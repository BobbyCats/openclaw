import {
  confirm as clackConfirm,
  intro as clackIntro,
  outro as clackOutro,
  select as clackSelect,
  text as clackText,
} from "@clack/prompts";
import { stylePromptHint, stylePromptMessage, stylePromptTitle } from "../terminal/prompt-style.js";
import { t } from "../i18n/index.js";

export const CONFIGURE_WIZARD_SECTIONS = [
  "workspace",
  "model",
  "web",
  "gateway",
  "daemon",
  "channels",
  "skills",
  "health",
] as const;

export type WizardSection = (typeof CONFIGURE_WIZARD_SECTIONS)[number];

export type ChannelsWizardMode = "configure" | "remove";

export type ConfigureWizardParams = {
  command: "configure" | "update";
  sections?: WizardSection[];
};

export const CONFIGURE_SECTION_OPTIONS: Array<{
  value: WizardSection;
  label: string;
  hint: string;
}> = [
  { value: "workspace", label: t("cli.configure.workspace"), hint: t("cli.configure.workspaceHint") },
  { value: "model", label: t("cli.configure.model"), hint: t("cli.configure.modelHint") },
  { value: "web", label: t("cli.configure.web"), hint: t("cli.configure.webHint") },
  { value: "gateway", label: t("cli.configure.gateway"), hint: t("cli.configure.gatewayHint") },
  {
    value: "daemon",
    label: t("cli.configure.daemon"),
    hint: t("cli.configure.daemonHint"),
  },
  {
    value: "channels",
    label: t("cli.configure.channels"),
    hint: t("cli.configure.channelsHint"),
  },
  { value: "skills", label: t("cli.configure.skills"), hint: t("cli.configure.skillsHint") },
  {
    value: "health",
    label: t("cli.configure.healthCheck"),
    hint: t("cli.configure.healthCheckHint"),
  },
];

export const intro = (message: string) => clackIntro(stylePromptTitle(message) ?? message);
export const outro = (message: string) => clackOutro(stylePromptTitle(message) ?? message);
export const text = (params: Parameters<typeof clackText>[0]) =>
  clackText({
    ...params,
    message: stylePromptMessage(params.message),
  });
export const confirm = (params: Parameters<typeof clackConfirm>[0]) =>
  clackConfirm({
    ...params,
    message: stylePromptMessage(params.message),
  });
export const select = <T>(params: Parameters<typeof clackSelect<T>>[0]) =>
  clackSelect({
    ...params,
    message: stylePromptMessage(params.message),
    options: params.options.map((opt) =>
      opt.hint === undefined ? opt : { ...opt, hint: stylePromptHint(opt.hint) },
    ),
  });
