import type { Command } from "commander";
import type { GatewayDaemonRuntime } from "../../commands/daemon-runtime.js";
import type {
  AuthChoice,
  GatewayAuthChoice,
  GatewayBind,
  NodeManagerChoice,
  TailscaleMode,
} from "../../commands/onboard-types.js";
import { onboardCommand } from "../../commands/onboard.js";
import { t } from "../../i18n/index.js";
import { defaultRuntime } from "../../runtime.js";
import { formatDocsLink } from "../../terminal/links.js";
import { theme } from "../../terminal/theme.js";
import { runCommandWithRuntime } from "../cli-utils.js";

function resolveInstallDaemonFlag(
  command: unknown,
  opts: { installDaemon?: boolean },
): boolean | undefined {
  if (!command || typeof command !== "object") {
    return undefined;
  }
  const getOptionValueSource =
    "getOptionValueSource" in command ? command.getOptionValueSource : undefined;
  if (typeof getOptionValueSource !== "function") {
    return undefined;
  }

  // Commander doesn't support option conflicts natively; keep original behavior.
  // If --skip-daemon is explicitly passed, it wins.
  if (getOptionValueSource.call(command, "skipDaemon") === "cli") {
    return false;
  }
  if (getOptionValueSource.call(command, "installDaemon") === "cli") {
    return Boolean(opts.installDaemon);
  }
  return undefined;
}

export function registerOnboardCommand(program: Command) {
  program
    .command("onboard")
    .description(t("cli.cmd.onboard.desc"))
    .addHelpText(
      "after",
      () =>
        `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/onboard", "docs.openclaw.ai/cli/onboard")}\n`,
    )
    .option("--workspace <dir>", t("cli.cmd.onboard.workspaceOpt"))
    .option("--reset", t("cli.cmd.onboard.resetOpt"))
    .option("--non-interactive", t("cli.cmd.onboard.nonInteractiveOpt"), false)
    .option(
      "--accept-risk",
      t("cli.cmd.onboard.acceptRiskOpt"),
      false,
    )
    .option("--flow <flow>", t("cli.cmd.onboard.flowOpt"))
    .option("--mode <mode>", t("cli.cmd.onboard.modeOpt"))
    .option(
      "--auth-choice <choice>",
      "Auth: setup-token|token|chutes|openai-codex|openai-api-key|xai-api-key|qianfan-api-key|openrouter-api-key|ai-gateway-api-key|cloudflare-ai-gateway-api-key|moonshot-api-key|moonshot-api-key-cn|kimi-code-api-key|synthetic-api-key|venice-api-key|gemini-api-key|zai-api-key|xiaomi-api-key|apiKey|minimax-api|minimax-api-lightning|opencode-zen|skip",
    )
    .option(
      "--token-provider <id>",
      "Token provider id (non-interactive; used with --auth-choice token)",
    )
    .option("--token <token>", t("cli.cmd.onboard.tokenOpt"))
    .option(
      "--token-profile-id <id>",
      "Auth profile id (non-interactive; default: <provider>:manual)",
    )
    .option("--token-expires-in <duration>", t("cli.cmd.onboard.tokenExpiresInOpt"))
    .option("--anthropic-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "Anthropic" }))
    .option("--openai-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "OpenAI" }))
    .option("--openrouter-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "OpenRouter" }))
    .option("--ai-gateway-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "Vercel AI Gateway" }))
    .option("--cloudflare-ai-gateway-account-id <id>", t("cli.cmd.onboard.cloudflareAccountIdOpt"))
    .option("--cloudflare-ai-gateway-gateway-id <id>", t("cli.cmd.onboard.cloudflareGatewayIdOpt"))
    .option("--cloudflare-ai-gateway-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "Cloudflare AI Gateway" }))
    .option("--moonshot-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "Moonshot" }))
    .option("--kimi-code-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "Kimi Coding" }))
    .option("--gemini-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "Gemini" }))
    .option("--zai-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "Z.AI" }))
    .option("--xiaomi-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "Xiaomi" }))
    .option("--minimax-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "MiniMax" }))
    .option("--synthetic-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "Synthetic" }))
    .option("--venice-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "Venice" }))
    .option("--opencode-zen-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "OpenCode Zen" }))
    .option("--xai-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "xAI" }))
    .option("--qianfan-api-key <key>", t("cli.cmd.onboard.apiKeyOpt", { provider: "QIANFAN" }))
    .option("--gateway-port <port>", t("cli.cmd.onboard.gatewayPortOpt"))
    .option("--gateway-bind <mode>", t("cli.cmd.onboard.gatewayBindOpt"))
    .option("--gateway-auth <mode>", t("cli.cmd.onboard.gatewayAuthOpt"))
    .option("--gateway-token <token>", t("cli.cmd.onboard.gatewayTokenOpt"))
    .option("--gateway-password <password>", t("cli.cmd.onboard.gatewayPasswordOpt"))
    .option("--remote-url <url>", t("cli.cmd.onboard.remoteUrlOpt"))
    .option("--remote-token <token>", t("cli.cmd.onboard.remoteTokenOpt"))
    .option("--tailscale <mode>", t("cli.cmd.onboard.tailscaleOpt"))
    .option("--tailscale-reset-on-exit", t("cli.cmd.onboard.tailscaleResetOpt"))
    .option("--install-daemon", t("cli.cmd.onboard.installDaemonOpt"))
    .option("--no-install-daemon", t("cli.cmd.onboard.skipDaemonOpt"))
    .option("--skip-daemon", t("cli.cmd.onboard.skipDaemonOpt"))
    .option("--daemon-runtime <runtime>", t("cli.cmd.onboard.daemonRuntimeOpt"))
    .option("--skip-channels", t("cli.cmd.onboard.skipChannelsOpt"))
    .option("--skip-skills", t("cli.cmd.onboard.skipSkillsOpt"))
    .option("--skip-health", t("cli.cmd.onboard.skipHealthOpt"))
    .option("--skip-ui", t("cli.cmd.onboard.skipUiOpt"))
    .option("--node-manager <name>", t("cli.cmd.onboard.nodeManagerOpt"))
    .option("--json", t("cli.cmd.common.jsonSummaryOpt"), false)
    .action(async (opts, command) => {
      await runCommandWithRuntime(defaultRuntime, async () => {
        const installDaemon = resolveInstallDaemonFlag(command, {
          installDaemon: Boolean(opts.installDaemon),
        });
        const gatewayPort =
          typeof opts.gatewayPort === "string" ? Number.parseInt(opts.gatewayPort, 10) : undefined;
        await onboardCommand(
          {
            workspace: opts.workspace as string | undefined,
            nonInteractive: Boolean(opts.nonInteractive),
            acceptRisk: Boolean(opts.acceptRisk),
            flow: opts.flow as "quickstart" | "advanced" | "manual" | undefined,
            mode: opts.mode as "local" | "remote" | undefined,
            authChoice: opts.authChoice as AuthChoice | undefined,
            tokenProvider: opts.tokenProvider as string | undefined,
            token: opts.token as string | undefined,
            tokenProfileId: opts.tokenProfileId as string | undefined,
            tokenExpiresIn: opts.tokenExpiresIn as string | undefined,
            anthropicApiKey: opts.anthropicApiKey as string | undefined,
            openaiApiKey: opts.openaiApiKey as string | undefined,
            openrouterApiKey: opts.openrouterApiKey as string | undefined,
            aiGatewayApiKey: opts.aiGatewayApiKey as string | undefined,
            cloudflareAiGatewayAccountId: opts.cloudflareAiGatewayAccountId as string | undefined,
            cloudflareAiGatewayGatewayId: opts.cloudflareAiGatewayGatewayId as string | undefined,
            cloudflareAiGatewayApiKey: opts.cloudflareAiGatewayApiKey as string | undefined,
            moonshotApiKey: opts.moonshotApiKey as string | undefined,
            kimiCodeApiKey: opts.kimiCodeApiKey as string | undefined,
            geminiApiKey: opts.geminiApiKey as string | undefined,
            zaiApiKey: opts.zaiApiKey as string | undefined,
            xiaomiApiKey: opts.xiaomiApiKey as string | undefined,
            qianfanApiKey: opts.qianfanApiKey as string | undefined,
            minimaxApiKey: opts.minimaxApiKey as string | undefined,
            syntheticApiKey: opts.syntheticApiKey as string | undefined,
            veniceApiKey: opts.veniceApiKey as string | undefined,
            opencodeZenApiKey: opts.opencodeZenApiKey as string | undefined,
            xaiApiKey: opts.xaiApiKey as string | undefined,
            gatewayPort:
              typeof gatewayPort === "number" && Number.isFinite(gatewayPort)
                ? gatewayPort
                : undefined,
            gatewayBind: opts.gatewayBind as GatewayBind | undefined,
            gatewayAuth: opts.gatewayAuth as GatewayAuthChoice | undefined,
            gatewayToken: opts.gatewayToken as string | undefined,
            gatewayPassword: opts.gatewayPassword as string | undefined,
            remoteUrl: opts.remoteUrl as string | undefined,
            remoteToken: opts.remoteToken as string | undefined,
            tailscale: opts.tailscale as TailscaleMode | undefined,
            tailscaleResetOnExit: Boolean(opts.tailscaleResetOnExit),
            reset: Boolean(opts.reset),
            installDaemon,
            daemonRuntime: opts.daemonRuntime as GatewayDaemonRuntime | undefined,
            skipChannels: Boolean(opts.skipChannels),
            skipSkills: Boolean(opts.skipSkills),
            skipHealth: Boolean(opts.skipHealth),
            skipUi: Boolean(opts.skipUi),
            nodeManager: opts.nodeManager as NodeManagerChoice | undefined,
            json: Boolean(opts.json),
          },
          defaultRuntime,
        );
      });
    });
}
