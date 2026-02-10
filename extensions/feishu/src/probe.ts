import type { FeishuProbeResult } from "./types.js";
import { createFeishuClient, type FeishuClientCredentials } from "./client.js";

// Cache probe results per appId to avoid hitting Feishu API rate limits.
// Bot info (name, open_id) rarely changes, so 24h TTL is safe.
const PROBE_CACHE_TTL_MS = 24 * 60 * 60_000; // 24 hours
const probeCache = new Map<string, { result: FeishuProbeResult; ts: number }>();

export async function probeFeishu(creds?: FeishuClientCredentials): Promise<FeishuProbeResult> {
  if (!creds?.appId || !creds?.appSecret) {
    return {
      ok: false,
      error: "missing credentials (appId, appSecret)",
    };
  }

  // Return cached result if still valid
  const cached = probeCache.get(creds.appId);
  if (cached && cached.result.ok && Date.now() - cached.ts < PROBE_CACHE_TTL_MS) {
    return cached.result;
  }

  try {
    const client = createFeishuClient(creds);
    // Use bot/v3/info API to get bot information
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- SDK generic request method
    const response = await (client as any).request({
      method: "GET",
      url: "/open-apis/bot/v3/info",
      data: {},
    });

    if (response.code !== 0) {
      return {
        ok: false,
        appId: creds.appId,
        error: `API error: ${response.msg || `code ${response.code}`}`,
      };
    }

    const bot = response.bot || response.data?.bot;
    const result: FeishuProbeResult = {
      ok: true,
      appId: creds.appId,
      botName: bot?.bot_name,
      botOpenId: bot?.open_id,
    };

    // Cache successful results
    probeCache.set(creds.appId, { result, ts: Date.now() });
    return result;
  } catch (err) {
    return {
      ok: false,
      appId: creds.appId,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
