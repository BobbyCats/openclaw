import type { Command } from "commander";
import { dashboardCommand } from "../../commands/dashboard.js";
import { doctorCommand } from "../../commands/doctor.js";
import { resetCommand } from "../../commands/reset.js";
import { uninstallCommand } from "../../commands/uninstall.js";
import { t } from "../../i18n/index.js";
import { defaultRuntime } from "../../runtime.js";
import { formatDocsLink } from "../../terminal/links.js";
import { theme } from "../../terminal/theme.js";
import { runCommandWithRuntime } from "../cli-utils.js";

export function registerMaintenanceCommands(program: Command) {
  program
    .command("doctor")
    .description(t("cli.cmd.doctor.desc"))
    .addHelpText(
      "after",
      () =>
        `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/doctor", "docs.openclaw.ai/cli/doctor")}\n`,
    )
    .option("--no-workspace-suggestions", t("cli.cmd.doctor.noWorkspaceSuggestionsOpt"), false)
    .option("--yes", t("cli.cmd.doctor.yesOpt"), false)
    .option("--repair", t("cli.cmd.doctor.repairOpt"), false)
    .option("--fix", t("cli.cmd.doctor.fixOpt"), false)
    .option("--force", t("cli.cmd.doctor.forceOpt"), false)
    .option("--non-interactive", t("cli.cmd.doctor.nonInteractiveOpt"), false)
    .option("--generate-gateway-token", t("cli.cmd.doctor.generateTokenOpt"), false)
    .option("--deep", t("cli.cmd.doctor.deepOpt"), false)
    .action(async (opts) => {
      await runCommandWithRuntime(defaultRuntime, async () => {
        await doctorCommand(defaultRuntime, {
          workspaceSuggestions: opts.workspaceSuggestions,
          yes: Boolean(opts.yes),
          repair: Boolean(opts.repair) || Boolean(opts.fix),
          force: Boolean(opts.force),
          nonInteractive: Boolean(opts.nonInteractive),
          generateGatewayToken: Boolean(opts.generateGatewayToken),
          deep: Boolean(opts.deep),
        });
      });
    });

  program
    .command("dashboard")
    .description(t("cli.cmd.dashboard.desc"))
    .addHelpText(
      "after",
      () =>
        `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/dashboard", "docs.openclaw.ai/cli/dashboard")}\n`,
    )
    .option("--no-open", t("cli.cmd.dashboard.noOpenOpt"), false)
    .action(async (opts) => {
      await runCommandWithRuntime(defaultRuntime, async () => {
        await dashboardCommand(defaultRuntime, {
          noOpen: Boolean(opts.noOpen),
        });
      });
    });

  program
    .command("reset")
    .description(t("cli.cmd.reset.desc"))
    .addHelpText(
      "after",
      () =>
        `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/reset", "docs.openclaw.ai/cli/reset")}\n`,
    )
    .option("--scope <scope>", t("cli.cmd.reset.scopeOpt"))
    .option("--yes", t("cli.cmd.common.yesOpt"), false)
    .option("--non-interactive", t("cli.cmd.common.nonInteractiveScopeOpt"), false)
    .option("--dry-run", t("cli.cmd.common.dryRunOpt"), false)
    .action(async (opts) => {
      await runCommandWithRuntime(defaultRuntime, async () => {
        await resetCommand(defaultRuntime, {
          scope: opts.scope,
          yes: Boolean(opts.yes),
          nonInteractive: Boolean(opts.nonInteractive),
          dryRun: Boolean(opts.dryRun),
        });
      });
    });

  program
    .command("uninstall")
    .description(t("cli.cmd.uninstall.desc"))
    .addHelpText(
      "after",
      () =>
        `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/uninstall", "docs.openclaw.ai/cli/uninstall")}\n`,
    )
    .option("--service", t("cli.cmd.uninstall.serviceOpt"), false)
    .option("--state", t("cli.cmd.uninstall.stateOpt"), false)
    .option("--workspace", t("cli.cmd.uninstall.workspaceOpt"), false)
    .option("--app", t("cli.cmd.uninstall.appOpt"), false)
    .option("--all", t("cli.cmd.uninstall.allOpt"), false)
    .option("--yes", t("cli.cmd.common.yesOpt"), false)
    .option("--non-interactive", t("cli.cmd.common.nonInteractiveOpt"), false)
    .option("--dry-run", t("cli.cmd.common.dryRunOpt"), false)
    .action(async (opts) => {
      await runCommandWithRuntime(defaultRuntime, async () => {
        await uninstallCommand(defaultRuntime, {
          service: Boolean(opts.service),
          state: Boolean(opts.state),
          workspace: Boolean(opts.workspace),
          app: Boolean(opts.app),
          all: Boolean(opts.all),
          yes: Boolean(opts.yes),
          nonInteractive: Boolean(opts.nonInteractive),
          dryRun: Boolean(opts.dryRun),
        });
      });
    });
}
