import type { Command } from "commander";
import { DEFAULT_CHAT_CHANNEL } from "../../channels/registry.js";
import { agentCliCommand } from "../../commands/agent-via-gateway.js";
import {
  agentsAddCommand,
  agentsDeleteCommand,
  agentsListCommand,
  agentsSetIdentityCommand,
} from "../../commands/agents.js";
import { setVerbose } from "../../globals.js";
import { t } from "../../i18n/index.js";
import { defaultRuntime } from "../../runtime.js";
import { formatDocsLink } from "../../terminal/links.js";
import { theme } from "../../terminal/theme.js";
import { runCommandWithRuntime } from "../cli-utils.js";
import { hasExplicitOptions } from "../command-options.js";
import { createDefaultDeps } from "../deps.js";
import { formatHelpExamples } from "../help-format.js";
import { collectOption } from "./helpers.js";

export function registerAgentCommands(program: Command, args: { agentChannelOptions: string }) {
  program
    .command("agent")
    .description(t("cli.cmd.agent.desc"))
    .requiredOption("-m, --message <text>", t("cli.cmd.agent.messageOpt"))
    .option("-t, --to <number>", t("cli.cmd.agent.toOpt"))
    .option("--session-id <id>", t("cli.cmd.agent.sessionIdOpt"))
    .option("--agent <id>", t("cli.cmd.agent.agentOpt"))
    .option("--thinking <level>", t("cli.cmd.agent.thinkingOpt"))
    .option("--verbose <on|off>", t("cli.cmd.agent.verboseOpt"))
    .option(
      "--channel <channel>",
      t("cli.cmd.agent.channelOpt", { options: args.agentChannelOptions, default: DEFAULT_CHAT_CHANNEL }),
    )
    .option("--reply-to <target>", t("cli.cmd.agent.replyToOpt"))
    .option("--reply-channel <channel>", t("cli.cmd.agent.replyChannelOpt"))
    .option("--reply-account <id>", t("cli.cmd.agent.replyAccountOpt"))
    .option(
      "--local",
      t("cli.cmd.agent.localOpt"),
      false,
    )
    .option("--deliver", t("cli.cmd.agent.deliverOpt"), false)
    .option("--json", t("cli.cmd.agent.jsonOpt"), false)
    .option(
      "--timeout <seconds>",
      t("cli.cmd.agent.timeoutOpt"),
    )
    .addHelpText(
      "after",
      () =>
        `
${theme.heading("Examples:")}
${formatHelpExamples([
  ['openclaw agent --to +15555550123 --message "status update"', "Start a new session."],
  ['openclaw agent --agent ops --message "Summarize logs"', "Use a specific agent."],
  [
    'openclaw agent --session-id 1234 --message "Summarize inbox" --thinking medium',
    "Target a session with explicit thinking level.",
  ],
  [
    'openclaw agent --to +15555550123 --message "Trace logs" --verbose on --json',
    "Enable verbose logging and JSON output.",
  ],
  ['openclaw agent --to +15555550123 --message "Summon reply" --deliver', "Deliver reply."],
  [
    'openclaw agent --agent ops --message "Generate report" --deliver --reply-channel slack --reply-to "#reports"',
    "Send reply to a different channel/target.",
  ],
])}

${theme.muted("Docs:")} ${formatDocsLink("/cli/agent", "docs.openclaw.ai/cli/agent")}`,
    )
    .action(async (opts) => {
      const verboseLevel = typeof opts.verbose === "string" ? opts.verbose.toLowerCase() : "";
      setVerbose(verboseLevel === "on");
      // Build default deps (keeps parity with other commands; future-proofing).
      const deps = createDefaultDeps();
      await runCommandWithRuntime(defaultRuntime, async () => {
        await agentCliCommand(opts, defaultRuntime, deps);
      });
    });

  const agents = program
    .command("agents")
    .description(t("cli.cmd.agents.desc"))
    .addHelpText(
      "after",
      () =>
        `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/agents", "docs.openclaw.ai/cli/agents")}\n`,
    );

  agents
    .command("list")
    .description(t("cli.cmd.agents.list"))
    .option("--json", t("cli.cmd.agents.listJsonOpt"), false)
    .option("--bindings", t("cli.cmd.agents.listBindingsOpt"), false)
    .action(async (opts) => {
      await runCommandWithRuntime(defaultRuntime, async () => {
        await agentsListCommand(
          { json: Boolean(opts.json), bindings: Boolean(opts.bindings) },
          defaultRuntime,
        );
      });
    });

  agents
    .command("add [name]")
    .description(t("cli.cmd.agents.add"))
    .option("--workspace <dir>", t("cli.cmd.agents.addWorkspaceOpt"))
    .option("--model <id>", t("cli.cmd.agents.addModelOpt"))
    .option("--agent-dir <dir>", t("cli.cmd.agents.addAgentDirOpt"))
    .option("--bind <channel[:accountId]>", t("cli.cmd.agents.addBindOpt"), collectOption, [])
    .option("--non-interactive", t("cli.cmd.agents.addNonInteractiveOpt"), false)
    .option("--json", t("cli.cmd.common.jsonSummaryOpt"), false)
    .action(async (name, opts, command) => {
      await runCommandWithRuntime(defaultRuntime, async () => {
        const hasFlags = hasExplicitOptions(command, [
          "workspace",
          "model",
          "agentDir",
          "bind",
          "nonInteractive",
        ]);
        await agentsAddCommand(
          {
            name: typeof name === "string" ? name : undefined,
            workspace: opts.workspace as string | undefined,
            model: opts.model as string | undefined,
            agentDir: opts.agentDir as string | undefined,
            bind: Array.isArray(opts.bind) ? (opts.bind as string[]) : undefined,
            nonInteractive: Boolean(opts.nonInteractive),
            json: Boolean(opts.json),
          },
          defaultRuntime,
          { hasFlags },
        );
      });
    });

  agents
    .command("set-identity")
    .description(t("cli.cmd.agents.setIdentity"))
    .option("--agent <id>", t("cli.cmd.agents.setIdentity.agentOpt"))
    .option("--workspace <dir>", t("cli.cmd.agents.setIdentity.workspaceOpt"))
    .option("--identity-file <path>", t("cli.cmd.agents.setIdentity.identityFileOpt"))
    .option("--from-identity", t("cli.cmd.agents.setIdentity.fromIdentityOpt"), false)
    .option("--name <name>", t("cli.cmd.agents.setIdentity.nameOpt"))
    .option("--theme <theme>", t("cli.cmd.agents.setIdentity.themeOpt"))
    .option("--emoji <emoji>", t("cli.cmd.agents.setIdentity.emojiOpt"))
    .option("--avatar <value>", t("cli.cmd.agents.setIdentity.avatarOpt"))
    .option("--json", t("cli.cmd.common.jsonSummaryOpt"), false)
    .addHelpText(
      "after",
      () =>
        `
${theme.heading("Examples:")}
${formatHelpExamples([
  ['openclaw agents set-identity --agent main --name "OpenClaw" --emoji "🦞"', "Set name + emoji."],
  ["openclaw agents set-identity --agent main --avatar avatars/openclaw.png", "Set avatar path."],
  [
    "openclaw agents set-identity --workspace ~/.openclaw/workspace --from-identity",
    "Load from IDENTITY.md.",
  ],
  [
    "openclaw agents set-identity --identity-file ~/.openclaw/workspace/IDENTITY.md --agent main",
    "Use a specific IDENTITY.md.",
  ],
])}
`,
    )
    .action(async (opts) => {
      await runCommandWithRuntime(defaultRuntime, async () => {
        await agentsSetIdentityCommand(
          {
            agent: opts.agent as string | undefined,
            workspace: opts.workspace as string | undefined,
            identityFile: opts.identityFile as string | undefined,
            fromIdentity: Boolean(opts.fromIdentity),
            name: opts.name as string | undefined,
            theme: opts.theme as string | undefined,
            emoji: opts.emoji as string | undefined,
            avatar: opts.avatar as string | undefined,
            json: Boolean(opts.json),
          },
          defaultRuntime,
        );
      });
    });

  agents
    .command("delete <id>")
    .description(t("cli.cmd.agents.delete"))
    .option("--force", t("cli.cmd.agents.deleteForceOpt"), false)
    .option("--json", t("cli.cmd.common.jsonSummaryOpt"), false)
    .action(async (id, opts) => {
      await runCommandWithRuntime(defaultRuntime, async () => {
        await agentsDeleteCommand(
          {
            id: String(id),
            force: Boolean(opts.force),
            json: Boolean(opts.json),
          },
          defaultRuntime,
        );
      });
    });

  agents.action(async () => {
    await runCommandWithRuntime(defaultRuntime, async () => {
      await agentsListCommand({}, defaultRuntime);
    });
  });
}
