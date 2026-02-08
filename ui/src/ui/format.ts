import { stripReasoningTagsFromText } from "../../../src/shared/text/reasoning-tags.js";
import { getLocale } from "./i18n.js";

export function formatMs(ms?: number | null): string {
  if (!ms && ms !== 0) {
    return "n/a";
  }
  return new Date(ms).toLocaleString(getLocale());
}

export function formatAgo(ms?: number | null): string {
  if (!ms && ms !== 0) {
    return "n/a";
  }
  const diff = Date.now() - ms;
  const absDiff = Math.abs(diff);
  const isZhCN = getLocale() === "zh-CN";
  const suffix = diff < 0 ? (isZhCN ? "后" : "from now") : isZhCN ? "前" : "ago";
  const sec = Math.round(absDiff / 1000);
  if (sec < 60) {
    if (diff < 0) {
      return isZhCN ? "不到 1 分钟后" : "in <1m";
    }
    return isZhCN ? `${sec} 秒${suffix}` : `${sec}s ago`;
  }
  const min = Math.round(sec / 60);
  if (min < 60) {
    return isZhCN ? `${min} 分钟${suffix}` : `${min}m ${suffix}`;
  }
  const hr = Math.round(min / 60);
  if (hr < 48) {
    return isZhCN ? `${hr} 小时${suffix}` : `${hr}h ${suffix}`;
  }
  const day = Math.round(hr / 24);
  return isZhCN ? `${day} 天${suffix}` : `${day}d ${suffix}`;
}

export function formatDurationMs(ms?: number | null): string {
  if (!ms && ms !== 0) {
    return "n/a";
  }
  if (ms < 1000) {
    return `${ms}ms`;
  }
  const sec = Math.round(ms / 1000);
  if (sec < 60) {
    return `${sec}s`;
  }
  const min = Math.round(sec / 60);
  if (min < 60) {
    return `${min}m`;
  }
  const hr = Math.round(min / 60);
  if (hr < 48) {
    return `${hr}h`;
  }
  const day = Math.round(hr / 24);
  return `${day}d`;
}

export function formatList(values?: Array<string | null | undefined>): string {
  if (!values || values.length === 0) {
    return "none";
  }
  return values.filter((v): v is string => Boolean(v && v.trim())).join(", ");
}

export function clampText(value: string, max = 120): string {
  if (value.length <= max) {
    return value;
  }
  return `${value.slice(0, Math.max(0, max - 1))}…`;
}

export function truncateText(
  value: string,
  max: number,
): {
  text: string;
  truncated: boolean;
  total: number;
} {
  if (value.length <= max) {
    return { text: value, truncated: false, total: value.length };
  }
  return {
    text: value.slice(0, Math.max(0, max)),
    truncated: true,
    total: value.length,
  };
}

export function toNumber(value: string, fallback: number): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

export function parseList(input: string): string[] {
  return input
    .split(/[,\n]/)
    .map((v) => v.trim())
    .filter((v) => v.length > 0);
}

export function stripThinkingTags(value: string): string {
  return stripReasoningTagsFromText(value, { mode: "preserve", trim: "start" });
}
