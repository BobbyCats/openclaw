/**
 * Lightweight i18n module for the OpenClaw CLI.
 *
 * Usage:
 *   import { t } from "../i18n/index.js";
 *   console.log(t("cli.onboard.welcome"));
 *   console.log(t("cli.status.uptime", { value: "3h" }));
 */

export type Locale = "en" | "zh-CN";

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // ── Configure sections ──
    "cli.configure.workspace": "Workspace",
    "cli.configure.workspaceHint": "Set workspace + sessions",
    "cli.configure.model": "Model",
    "cli.configure.modelHint": "Pick provider + credentials",
    "cli.configure.web": "Web tools",
    "cli.configure.webHint": "Configure Brave search + fetch",
    "cli.configure.gateway": "Gateway",
    "cli.configure.gatewayHint": "Port, bind, auth, tailscale",
    "cli.configure.daemon": "Daemon",
    "cli.configure.daemonHint": "Install/manage the background service",
    "cli.configure.channels": "Channels",
    "cli.configure.channelsHint": "Link WhatsApp/Telegram/etc and defaults",
    "cli.configure.skills": "Skills",
    "cli.configure.skillsHint": "Install/enable workspace skills",
    "cli.configure.healthCheck": "Health check",
    "cli.configure.healthCheckHint": "Run gateway + channel checks",
    "cli.configure.selectSections": "Select sections to configure",

    // ── Onboard ──
    "cli.onboard.welcome": "Welcome to OpenClaw",
    "cli.onboard.selectChannel": "Select channel (QuickStart)",
    "cli.onboard.configureDm": "Configure DM access policies now?",
    "cli.onboard.configureChannels": "Configure chat channels now?",
    "cli.onboard.configureSkills": "Configure skills now? (recommended)",
    "cli.onboard.preferredNodeManager": "Preferred node manager for skill installs",
    "cli.onboard.installMissing": "Install missing skill dependencies",
    "cli.onboard.discoverGateway": "Discover gateway on LAN (Bonjour)?",
    "cli.onboard.selectGateway": "Select gateway",
    "cli.onboard.gatewayWsUrl": "Gateway WebSocket URL",
    "cli.onboard.gatewayAuth": "Gateway auth",

    // ── Status ──
    "cli.status.scanning": "Scanning status…",
    "cli.status.checkingHealth": "Checking gateway health…",
    "cli.status.probingAuth": "Probing auth profiles…",

    // ── Update ──
    "cli.update.channel": "Update channel",
    "cli.update.restart": "Restart the gateway service after update?",
    "cli.update.stable": "Stable",
    "cli.update.beta": "Beta",
    "cli.update.dev": "Dev",

    // ── Uninstall ──
    "cli.uninstall.which": "Uninstall which components?",
    "cli.uninstall.gatewayService": "Gateway service",
    "cli.uninstall.stateConfig": "State + config",
    "cli.uninstall.workspace": "Workspace",
    "cli.uninstall.macApp": "macOS app",

    // ── Reset ──
    "cli.reset.scope": "Reset scope",
    "cli.reset.configOnly": "Config only",
    "cli.reset.configCredsSessions": "Config + credentials + sessions",
    "cli.reset.fullReset": "Full reset",

    // ── Models ──
    "cli.models.tokenProvider": "Token provider",
    "cli.models.tokenMethod": "Token method",
    "cli.models.pasteToken": "Paste token",
    "cli.models.defaultModel": "Default model",
    "cli.models.filterByProvider": "Filter models by provider",
    "cli.models.selectFallback": "Select fallback models (ordered)",

    // ── CLI Command Descriptions ──
    "cli.cmd.agent.desc": "Run an agent turn via the Gateway (use --local for embedded)",
    "cli.cmd.agent.messageOpt": "Message body for the agent",
    "cli.cmd.agent.toOpt": "Recipient number in E.164 used to derive the session key",
    "cli.cmd.agent.sessionIdOpt": "Use an explicit session id",
    "cli.cmd.agent.agentOpt": "Agent id (overrides routing bindings)",
    "cli.cmd.agent.thinkingOpt": "Thinking level: off | minimal | low | medium | high",
    "cli.cmd.agent.verboseOpt": "Persist agent verbose level for the session",
    "cli.cmd.agent.replyToOpt": "Delivery target override (separate from session routing)",
    "cli.cmd.agent.replyChannelOpt": "Delivery channel override (separate from routing)",
    "cli.cmd.agent.replyAccountOpt": "Delivery account id override",
    "cli.cmd.agent.localOpt":
      "Run the embedded agent locally (requires model provider API keys in your shell)",
    "cli.cmd.agent.deliverOpt": "Send the agent's reply back to the selected channel",
    "cli.cmd.agent.jsonOpt": "Output result as JSON",
    "cli.cmd.agent.timeoutOpt":
      "Override agent command timeout (seconds, default 600 or config value)",
    "cli.cmd.agents.desc": "Manage isolated agents (workspaces + auth + routing)",
    "cli.cmd.agents.list": "List configured agents",
    "cli.cmd.agents.listJsonOpt": "Output JSON instead of text",
    "cli.cmd.agents.listBindingsOpt": "Include routing bindings",
    "cli.cmd.agents.add": "Add a new isolated agent",
    "cli.cmd.agents.addWorkspaceOpt": "Workspace directory for the new agent",
    "cli.cmd.agents.addModelOpt": "Model id for this agent",
    "cli.cmd.agents.addAgentDirOpt": "Agent state directory for this agent",
    "cli.cmd.agents.addBindOpt": "Route channel binding (repeatable)",
    "cli.cmd.agents.addNonInteractiveOpt": "Disable prompts; requires --workspace",
    "cli.cmd.agents.setIdentity": "Update an agent identity (name/theme/emoji/avatar)",
    "cli.cmd.agents.delete": "Delete an agent and prune workspace/state",
    "cli.cmd.agents.deleteForceOpt": "Skip confirmation",
    "cli.cmd.configure.desc":
      "Interactive prompt to set up credentials, devices, and agent defaults",
    "cli.cmd.status.desc": "Show channel health and recent session recipients",
    "cli.cmd.status.jsonOpt": "Output JSON instead of text",
    "cli.cmd.status.allOpt": "Full diagnosis (read-only, pasteable)",
    "cli.cmd.status.usageOpt": "Show model provider usage/quota snapshots",
    "cli.cmd.status.deepOpt": "Probe channels (WhatsApp Web + Telegram + Discord + Slack + Signal)",
    "cli.cmd.status.timeoutOpt": "Probe timeout in milliseconds",
    "cli.cmd.status.verboseOpt": "Verbose logging",
    "cli.cmd.status.debugOpt": "Alias for --verbose",
    "cli.cmd.health.desc": "Fetch health from the running gateway",
    "cli.cmd.health.jsonOpt": "Output JSON instead of text",
    "cli.cmd.health.timeoutOpt": "Connection timeout in milliseconds",
    "cli.cmd.sessions.desc": "List stored conversation sessions",
    "cli.cmd.sessions.jsonOpt": "Output as JSON",
    "cli.cmd.sessions.storeOpt": "Path to session store (default: resolved from config)",
    "cli.cmd.sessions.activeOpt": "Only show sessions updated within the past N minutes",
    "cli.cmd.setup.desc": "Initialize ~/.openclaw/openclaw.json and the agent workspace",
    "cli.cmd.setup.wizardOpt": "Run the interactive onboarding wizard",
    "cli.cmd.setup.nonInteractiveOpt": "Run the wizard without prompts",
    "cli.cmd.onboard.desc": "Interactive wizard to set up the gateway, workspace, and skills",
    "cli.cmd.onboard.resetOpt":
      "Reset config + credentials + sessions + workspace before running wizard",
    "cli.cmd.onboard.nonInteractiveOpt": "Run without prompts",
    "cli.cmd.onboard.acceptRiskOpt":
      "Acknowledge that agents are powerful and full system access is risky (required for --non-interactive)",
    "cli.cmd.doctor.desc": "Health checks + quick fixes for the gateway and channels",
    "cli.cmd.doctor.yesOpt": "Accept defaults without prompting",
    "cli.cmd.doctor.repairOpt": "Apply recommended repairs without prompting",
    "cli.cmd.doctor.fixOpt": "Apply recommended repairs (alias for --repair)",
    "cli.cmd.doctor.forceOpt": "Apply aggressive repairs (overwrites custom service config)",
    "cli.cmd.doctor.nonInteractiveOpt": "Run without prompts (safe migrations only)",
    "cli.cmd.doctor.deepOpt": "Scan system services for extra gateway installs",
    "cli.cmd.dashboard.desc": "Open the Control UI with your current token",
    "cli.cmd.dashboard.noOpenOpt": "Print URL but do not launch a browser",
    "cli.cmd.reset.desc": "Reset local config/state (keeps the CLI installed)",
    "cli.cmd.reset.yesOpt": "Skip confirmation prompts",
    "cli.cmd.reset.nonInteractiveOpt": "Disable prompts (requires --scope + --yes)",
    "cli.cmd.reset.dryRunOpt": "Print actions without removing files",
    "cli.cmd.uninstall.desc": "Uninstall the gateway service + local data (CLI remains)",
    "cli.cmd.uninstall.serviceOpt": "Remove the gateway service",
    "cli.cmd.uninstall.stateOpt": "Remove state + config",
    "cli.cmd.uninstall.workspaceOpt": "Remove workspace dirs",
    "cli.cmd.uninstall.appOpt": "Remove the macOS app",
    "cli.cmd.uninstall.allOpt": "Remove service + state + workspace + app",
    "cli.cmd.message.desc": "Send messages and channel actions",
    "cli.cmd.gateway.desc": "Run the WebSocket Gateway",
    "cli.cmd.gateway.run": "Run the WebSocket Gateway (foreground)",
    "cli.cmd.gateway.status": "Show gateway service status + probe the Gateway",
    "cli.cmd.gateway.install": "Install the Gateway service (launchd/systemd/schtasks)",
    "cli.cmd.gateway.uninstall": "Uninstall the Gateway service (launchd/systemd/schtasks)",
    "cli.cmd.gateway.start": "Start the Gateway service (launchd/systemd/schtasks)",
    "cli.cmd.gateway.stop": "Stop the Gateway service (launchd/systemd/schtasks)",
    "cli.cmd.gateway.restart": "Restart the Gateway service (launchd/systemd/schtasks)",
    "cli.cmd.gateway.call": "Call a Gateway method",
    "cli.cmd.gateway.usageCost": "Fetch usage cost summary from session logs",
    "cli.cmd.gateway.health": "Fetch Gateway health",
    "cli.cmd.gateway.probe":
      "Show gateway reachability + discovery + health + status summary (local + remote)",
    "cli.cmd.gateway.discover": "Discover gateways via Bonjour (local + wide-area if configured)",
    "cli.cmd.daemon.desc": "Manage the Gateway service (launchd/systemd/schtasks)",
    "cli.cmd.daemon.status": "Show service install status + probe the Gateway",
    "cli.cmd.daemon.install": "Install the Gateway service (launchd/systemd/schtasks)",
    "cli.cmd.daemon.uninstall": "Uninstall the Gateway service (launchd/systemd/schtasks)",
    "cli.cmd.daemon.start": "Start the Gateway service (launchd/systemd/schtasks)",
    "cli.cmd.daemon.stop": "Stop the Gateway service (launchd/systemd/schtasks)",
    "cli.cmd.daemon.restart": "Restart the Gateway service (launchd/systemd/schtasks)",
    "cli.cmd.cron.desc": "Manage cron jobs (via Gateway)",
    "cli.cmd.subcli.acp": "Agent Control Protocol tools",
    "cli.cmd.subcli.gateway": "Gateway control",
    "cli.cmd.subcli.daemon": "Gateway service (legacy alias)",
    "cli.cmd.subcli.logs": "Gateway logs",
    "cli.cmd.subcli.system": "System events, heartbeat, and presence",
    "cli.cmd.subcli.models": "Model configuration",
    "cli.cmd.subcli.approvals": "Exec approvals",
    "cli.cmd.subcli.nodes": "Node commands",
    "cli.cmd.subcli.devices": "Device pairing + token management",
    "cli.cmd.subcli.node": "Node control",
    "cli.cmd.subcli.sandbox": "Sandbox tools",
    "cli.cmd.subcli.tui": "Terminal UI",
    "cli.cmd.subcli.cron": "Cron scheduler",
    "cli.cmd.subcli.dns": "DNS helpers",
    "cli.cmd.subcli.docs": "Docs helpers",
    "cli.cmd.subcli.hooks": "Hooks tooling",
    "cli.cmd.subcli.webhooks": "Webhook helpers",
    "cli.cmd.subcli.pairing": "Pairing helpers",
    "cli.cmd.subcli.plugins": "Plugin management",
    "cli.cmd.subcli.channels": "Channel management",
    "cli.cmd.subcli.directory": "Directory commands",
    "cli.cmd.subcli.security": "Security helpers",
    "cli.cmd.subcli.skills": "Skills management",
    "cli.cmd.subcli.update": "CLI update helpers",
    "cli.cmd.subcli.completion": "Generate shell completion script",

    // ── Common CLI Options ──
    "cli.cmd.common.jsonOpt": "Output JSON",
    "cli.cmd.common.jsonSummaryOpt": "Output JSON summary",
    "cli.cmd.common.yesOpt": "Skip confirmation prompts",
    "cli.cmd.common.nonInteractiveOpt": "Disable prompts (requires --yes)",
    "cli.cmd.common.nonInteractiveScopeOpt": "Disable prompts (requires --scope + --yes)",
    "cli.cmd.common.dryRunOpt": "Print actions without removing files",

    // ── Agent Channel + Identity Options ──
    "cli.cmd.agent.channelOpt": "Delivery channel: {options} (default: {default})",
    "cli.cmd.agents.setIdentity.agentOpt": "Agent id to update",
    "cli.cmd.agents.setIdentity.workspaceOpt":
      "Workspace directory used to locate the agent + IDENTITY.md",
    "cli.cmd.agents.setIdentity.identityFileOpt": "Explicit IDENTITY.md path to read",
    "cli.cmd.agents.setIdentity.fromIdentityOpt": "Read values from IDENTITY.md",
    "cli.cmd.agents.setIdentity.nameOpt": "Identity name",
    "cli.cmd.agents.setIdentity.themeOpt": "Identity theme",
    "cli.cmd.agents.setIdentity.emojiOpt": "Identity emoji",
    "cli.cmd.agents.setIdentity.avatarOpt":
      "Identity avatar (workspace path, http(s) URL, or data URI)",

    // ── Doctor + Reset Extra Options ──
    "cli.cmd.doctor.noWorkspaceSuggestionsOpt": "Disable workspace memory system suggestions",
    "cli.cmd.doctor.generateTokenOpt": "Generate and configure a gateway token",
    "cli.cmd.reset.scopeOpt": "config|config+creds+sessions|full (default: interactive prompt)",

    // ── Onboard Extra Options ──
    "cli.cmd.onboard.workspaceOpt": "Agent workspace directory (default: ~/.openclaw/workspace)",
    "cli.cmd.onboard.flowOpt": "Wizard flow: quickstart|advanced|manual",
    "cli.cmd.onboard.modeOpt": "Wizard mode: local|remote",
    "cli.cmd.onboard.authChoiceOpt": "Auth provider choice",
    "cli.cmd.onboard.tokenProviderOpt":
      "Token provider id (non-interactive; used with --auth-choice token)",
    "cli.cmd.onboard.tokenOpt": "Token value (non-interactive; used with --auth-choice token)",
    "cli.cmd.onboard.tokenProfileIdOpt":
      "Auth profile id (non-interactive; default: <provider>:manual)",
    "cli.cmd.onboard.tokenExpiresInOpt": "Optional token expiry duration (e.g. 365d, 12h)",
    "cli.cmd.onboard.apiKeyOpt": "{provider} API key",
    "cli.cmd.onboard.cloudflareAccountIdOpt": "Cloudflare Account ID",
    "cli.cmd.onboard.cloudflareGatewayIdOpt": "Cloudflare AI Gateway ID",
    "cli.cmd.onboard.gatewayPortOpt": "Gateway port",
    "cli.cmd.onboard.gatewayBindOpt": "Gateway bind: loopback|tailnet|lan|auto|custom",
    "cli.cmd.onboard.gatewayAuthOpt": "Gateway auth: token|password",
    "cli.cmd.onboard.gatewayTokenOpt": "Gateway token (token auth)",
    "cli.cmd.onboard.gatewayPasswordOpt": "Gateway password (password auth)",
    "cli.cmd.onboard.remoteUrlOpt": "Remote Gateway WebSocket URL",
    "cli.cmd.onboard.remoteTokenOpt": "Remote Gateway token (optional)",
    "cli.cmd.onboard.tailscaleOpt": "Tailscale: off|serve|funnel",
    "cli.cmd.onboard.tailscaleResetOpt": "Reset tailscale serve/funnel on exit",
    "cli.cmd.onboard.installDaemonOpt": "Install gateway service",
    "cli.cmd.onboard.skipDaemonOpt": "Skip gateway service install",
    "cli.cmd.onboard.daemonRuntimeOpt": "Daemon runtime: node|bun",
    "cli.cmd.onboard.skipChannelsOpt": "Skip channel setup",
    "cli.cmd.onboard.skipSkillsOpt": "Skip skills setup",
    "cli.cmd.onboard.skipHealthOpt": "Skip health check",
    "cli.cmd.onboard.skipUiOpt": "Skip Control UI/TUI prompts",
    "cli.cmd.onboard.nodeManagerOpt": "Node manager for skills: npm|pnpm|bun",

    // ── Setup Extra Options ──
    "cli.cmd.setup.workspaceOpt":
      "Agent workspace directory (default: ~/.openclaw/workspace; stored as agents.defaults.workspace)",
    "cli.cmd.setup.modeOpt": "Wizard mode: local|remote",
    "cli.cmd.setup.remoteUrlOpt": "Remote Gateway WebSocket URL",
    "cli.cmd.setup.remoteTokenOpt": "Remote Gateway token (optional)",

    // ── Gateway CLI Options ──
    "cli.cmd.gateway.status.urlOpt": "Gateway WebSocket URL (defaults to config/remote/local)",
    "cli.cmd.gateway.status.tokenOpt": "Gateway token (if required)",
    "cli.cmd.gateway.status.passwordOpt": "Gateway password (password auth)",
    "cli.cmd.gateway.status.timeoutOpt": "Timeout in ms",
    "cli.cmd.gateway.status.noProbeOpt": "Skip RPC probe",
    "cli.cmd.gateway.status.deepOpt": "Scan system-level services",
    "cli.cmd.gateway.install.portOpt": "Gateway port",
    "cli.cmd.gateway.install.runtimeOpt": "Daemon runtime (node|bun). Default: node",
    "cli.cmd.gateway.install.tokenOpt": "Gateway token (token auth)",
    "cli.cmd.gateway.install.forceOpt": "Reinstall/overwrite if already installed",
    "cli.cmd.gateway.call.methodArg": "Method name (health/status/system-presence/cron.*)",
    "cli.cmd.gateway.call.paramsOpt": "JSON object string for params",
    "cli.cmd.gateway.usageCost.daysOpt": "Number of days to include",
    "cli.cmd.gateway.probe.urlOpt": "Explicit Gateway WebSocket URL (still probes localhost)",
    "cli.cmd.gateway.probe.sshOpt":
      "SSH target for remote gateway tunnel (user@host or user@host:port)",
    "cli.cmd.gateway.probe.sshIdentityOpt": "SSH identity file path",
    "cli.cmd.gateway.probe.sshAutoOpt": "Try to derive an SSH target from Bonjour discovery",
    "cli.cmd.gateway.probe.tokenOpt": "Gateway token (applies to all probes)",
    "cli.cmd.gateway.probe.passwordOpt": "Gateway password (applies to all probes)",
    "cli.cmd.gateway.probe.timeoutOpt": "Overall probe budget in ms",
    "cli.cmd.gateway.discover.timeoutOpt": "Per-command timeout in ms",

    // ── Common CLI ──
    "cli.cancelled": "Setup cancelled.",
    "cli.configInvalid": "Config invalid.",
    "cli.noChanges": "No changes selected.",
    "cli.complete": "Configure complete.",

    // ── Skill descriptions ──
    "skill.desc.1password": "Set up and use 1Password CLI (op) for secret management.",
    "skill.desc.apple-notes": "Manage Apple Notes via the memo CLI on macOS.",
    "skill.desc.apple-reminders": "Manage Apple Reminders via the remindctl CLI on macOS.",
    "skill.desc.bear-notes": "Create, search, and manage Bear notes via grizzly CLI.",
    "skill.desc.blogwatcher": "Monitor blogs and RSS/Atom feeds for updates.",
    "skill.desc.blucli": "BluOS CLI (blu) for discovery, playback, grouping, and volume.",
    "skill.desc.bluebubbles": "Send or manage iMessages via BlueBubbles.",
    "skill.desc.camsnap": "Capture frames or clips from RTSP/ONVIF cameras.",
    "skill.desc.canvas": "Display HTML content on connected OpenClaw nodes.",
    "skill.desc.clawhub": "Search, install, update, and publish agent skills from ClawHub.",
    "skill.desc.coding-agent":
      "Run coding agents (Codex CLI, Claude Code, etc.) via background process.",
    "skill.desc.discord":
      "Control Discord from OpenClaw (messages, reactions, threads, moderation).",
    "skill.desc.eightctl": "Control Eight Sleep pods (status, temperature, alarms, schedules).",
    "skill.desc.food-order": "Reorder Foodora orders and track ETA/status.",
    "skill.desc.gemini": "Gemini CLI for one-shot Q&A, summaries, and generation.",
    "skill.desc.gifgrep": "Search GIF providers, download results, and extract stills.",
    "skill.desc.github": "Interact with GitHub using the gh CLI.",
    "skill.desc.gog":
      "Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, and Docs.",
    "skill.desc.goplaces": "Query Google Places API via the goplaces CLI.",
    "skill.desc.healthcheck": "Host security hardening and risk-tolerance configuration.",
    "skill.desc.himalaya": "CLI to manage emails via IMAP/SMTP.",
    "skill.desc.imsg": "iMessage/SMS CLI for listing chats, history, watch, and sending.",
    "skill.desc.local-places": "Search for places via Google Places API proxy on localhost.",
    "skill.desc.mcporter": "List, configure, auth, and call MCP servers/tools directly.",
    "skill.desc.model-usage": "Summarize per-model usage and cost data.",
    "skill.desc.nano-banana-pro": "Generate or edit images via Gemini 3 Pro Image.",
    "skill.desc.nano-pdf": "Edit PDFs with natural-language instructions.",
    "skill.desc.notion": "Notion API for creating and managing pages, databases, and blocks.",
    "skill.desc.obsidian": "Work with Obsidian vaults and automate via obsidian-cli.",
    "skill.desc.openai-image-gen": "Batch-generate images via OpenAI Images API.",
    "skill.desc.openai-whisper": "Local speech-to-text with the Whisper CLI (no API key).",
    "skill.desc.openai-whisper-api": "Transcribe audio via OpenAI Audio Transcriptions API.",
    "skill.desc.openhue": "Control Philips Hue lights/scenes via the OpenHue CLI.",
    "skill.desc.oracle": "Best practices for using the oracle CLI.",
    "skill.desc.ordercli": "Foodora CLI for checking past orders and active order status.",
    "skill.desc.peekaboo": "Capture and automate macOS UI with the Peekaboo CLI.",
    "skill.desc.sag": "ElevenLabs text-to-speech with mac-style say UX.",
    "skill.desc.session-logs": "Search and analyze your own session logs using jq.",
    "skill.desc.sherpa-onnx-tts": "Local text-to-speech via sherpa-onnx (offline, no cloud).",
    "skill.desc.skill-creator": "Create or update agent skills.",
    "skill.desc.slack": "Control Slack from OpenClaw (messages, reactions, pins).",
    "skill.desc.songsee": "Generate spectrograms and visualizations from audio.",
    "skill.desc.sonoscli": "Control Sonos speakers (discover/status/play/volume/group).",
    "skill.desc.spotify-player": "Terminal Spotify playback/search via spogo or spotify_player.",
    "skill.desc.summarize": "Summarize or extract text/transcripts from URLs, podcasts, and files.",
    "skill.desc.things-mac": "Manage Things 3 via the things CLI on macOS.",
    "skill.desc.tmux": "Remote-control tmux sessions for interactive CLIs.",
    "skill.desc.trello": "Manage Trello boards, lists, and cards via the Trello REST API.",
    "skill.desc.video-frames": "Extract frames or short clips from videos using ffmpeg.",
    "skill.desc.voice-call": "Start voice calls via the OpenClaw voice-call plugin.",
    "skill.desc.wacli": "Send WhatsApp messages or search/sync WhatsApp history via wacli CLI.",
    "skill.desc.weather": "Get current weather and forecasts (no API key required).",

    // ── Hook descriptions ──
    "hook.desc.boot-md": "Run BOOT.md on gateway startup",
    "hook.desc.command-logger": "Log all command events to a centralized audit file",
    "hook.desc.session-memory": "Save session context to memory when /new command is issued",
    "hook.desc.soul-evil":
      "Swap SOUL.md with SOUL_EVIL.md during a purge window or by random chance",

    // ── Built-in tool labels ──
    "tool.label.web_search": "Web Search",
    "tool.label.web_fetch": "Web Fetch",
    "tool.label.memory_search": "Memory Search",
    "tool.label.memory_get": "Memory Get",
    "tool.label.image": "Image Understanding",
    "tool.label.tts": "TTS",
    "tool.label.browser": "Browser",
    "tool.label.canvas": "Canvas",
    "tool.label.nodes": "Nodes",
    "tool.label.cron": "Cron",
    "tool.label.gateway": "Gateway",
    "tool.label.message": "Message",
    "tool.label.agents_list": "Agents",
    "tool.label.sessions_list": "Sessions",
    "tool.label.sessions_history": "Session History",
    "tool.label.sessions_send": "Session Send",
    "tool.label.sessions_spawn": "Sub-agent",
    "tool.label.session_status": "Session Status",
  },

  "zh-CN": {
    // ── 配置向导各区段 ──
    "cli.configure.workspace": "工作区",
    "cli.configure.workspaceHint": "设置工作区和会话",
    "cli.configure.model": "模型",
    "cli.configure.modelHint": "选择提供商和凭据",
    "cli.configure.web": "网络工具",
    "cli.configure.webHint": "配置 Brave 搜索和网页获取",
    "cli.configure.gateway": "网关",
    "cli.configure.gatewayHint": "端口、绑定、认证、tailscale",
    "cli.configure.daemon": "守护进程",
    "cli.configure.daemonHint": "安装/管理后台服务",
    "cli.configure.channels": "频道",
    "cli.configure.channelsHint": "关联 WhatsApp/Telegram 等及默认设置",
    "cli.configure.skills": "技能",
    "cli.configure.skillsHint": "安装/启用工作区技能",
    "cli.configure.healthCheck": "健康检查",
    "cli.configure.healthCheckHint": "运行网关和频道检查",
    "cli.configure.selectSections": "选择要配置的部分",

    // ── 引导向导 ──
    "cli.onboard.welcome": "欢迎使用 OpenClaw",
    "cli.onboard.selectChannel": "选择频道（快速开始）",
    "cli.onboard.configureDm": "现在配置私信访问策略吗？",
    "cli.onboard.configureChannels": "现在配置聊天频道吗？",
    "cli.onboard.configureSkills": "现在配置技能吗？（推荐）",
    "cli.onboard.preferredNodeManager": "技能安装首选的包管理器",
    "cli.onboard.installMissing": "安装缺失的技能依赖",
    "cli.onboard.discoverGateway": "在局域网上发现网关（Bonjour）？",
    "cli.onboard.selectGateway": "选择网关",
    "cli.onboard.gatewayWsUrl": "网关 WebSocket 地址",
    "cli.onboard.gatewayAuth": "网关认证",

    // ── 状态 ──
    "cli.status.scanning": "正在扫描状态…",
    "cli.status.checkingHealth": "正在检查网关健康…",
    "cli.status.probingAuth": "正在探测认证配置…",

    // ── 更新 ──
    "cli.update.channel": "更新频道",
    "cli.update.restart": "更新后重启网关服务？",
    "cli.update.stable": "稳定版",
    "cli.update.beta": "测试版",
    "cli.update.dev": "开发版",

    // ── 卸载 ──
    "cli.uninstall.which": "卸载哪些组件？",
    "cli.uninstall.gatewayService": "网关服务",
    "cli.uninstall.stateConfig": "状态和配置",
    "cli.uninstall.workspace": "工作区",
    "cli.uninstall.macApp": "macOS 应用",

    // ── 重置 ──
    "cli.reset.scope": "重置范围",
    "cli.reset.configOnly": "仅配置",
    "cli.reset.configCredsSessions": "配置 + 凭据 + 会话",
    "cli.reset.fullReset": "完全重置",

    // ── 模型 ──
    "cli.models.tokenProvider": "令牌提供商",
    "cli.models.tokenMethod": "令牌方式",
    "cli.models.pasteToken": "粘贴令牌",
    "cli.models.defaultModel": "默认模型",
    "cli.models.filterByProvider": "按提供商筛选模型",
    "cli.models.selectFallback": "选择备用模型（按顺序）",

    // ── CLI 命令描述 ──
    "cli.cmd.agent.desc": "通过网关运行代理回合（使用 --local 进行本地嵌入运行）",
    "cli.cmd.agent.messageOpt": "代理的消息内容",
    "cli.cmd.agent.toOpt": "E.164 格式的收件人号码，用于派生会话密钥",
    "cli.cmd.agent.sessionIdOpt": "使用显式会话 ID",
    "cli.cmd.agent.agentOpt": "代理 ID（覆盖路由绑定）",
    "cli.cmd.agent.thinkingOpt": "思考级别：off | minimal | low | medium | high",
    "cli.cmd.agent.verboseOpt": "为会话持久化代理详细级别",
    "cli.cmd.agent.replyToOpt": "投递目标覆盖（与会话路由分开）",
    "cli.cmd.agent.replyChannelOpt": "投递渠道覆盖（与路由分开）",
    "cli.cmd.agent.replyAccountOpt": "投递账户 ID 覆盖",
    "cli.cmd.agent.localOpt": "在本地运行嵌入式代理（需要 Shell 中的模型提供商 API 密钥）",
    "cli.cmd.agent.deliverOpt": "将代理回复发送到选定渠道",
    "cli.cmd.agent.jsonOpt": "以 JSON 格式输出结果",
    "cli.cmd.agent.timeoutOpt": "覆盖代理命令超时（秒，默认 600 或配置值）",
    "cli.cmd.agents.desc": "管理独立代理（工作区 + 认证 + 路由）",
    "cli.cmd.agents.list": "列出已配置的代理",
    "cli.cmd.agents.listJsonOpt": "输出 JSON 而非文本",
    "cli.cmd.agents.listBindingsOpt": "包含路由绑定",
    "cli.cmd.agents.add": "添加新的独立代理",
    "cli.cmd.agents.addWorkspaceOpt": "新代理的工作区目录",
    "cli.cmd.agents.addModelOpt": "此代理的模型 ID",
    "cli.cmd.agents.addAgentDirOpt": "此代理的状态目录",
    "cli.cmd.agents.addBindOpt": "路由渠道绑定（可重复）",
    "cli.cmd.agents.addNonInteractiveOpt": "禁用提示；需要 --workspace",
    "cli.cmd.agents.setIdentity": "更新代理身份（名称/主题/表情/头像）",
    "cli.cmd.agents.delete": "删除代理并清理工作区/状态",
    "cli.cmd.agents.deleteForceOpt": "跳过确认",
    "cli.cmd.configure.desc": "交互式设置凭据、设备和代理默认值",
    "cli.cmd.status.desc": "显示渠道健康状态和最近的会话接收者",
    "cli.cmd.status.jsonOpt": "输出 JSON 而非文本",
    "cli.cmd.status.allOpt": "完整诊断（只读，可粘贴）",
    "cli.cmd.status.usageOpt": "显示模型提供商使用量/配额快照",
    "cli.cmd.status.deepOpt": "探测渠道（WhatsApp Web + Telegram + Discord + Slack + Signal）",
    "cli.cmd.status.timeoutOpt": "探测超时（毫秒）",
    "cli.cmd.status.verboseOpt": "详细日志",
    "cli.cmd.status.debugOpt": "--verbose 的别名",
    "cli.cmd.health.desc": "从运行中的网关获取健康状态",
    "cli.cmd.health.jsonOpt": "输出 JSON 而非文本",
    "cli.cmd.health.timeoutOpt": "连接超时（毫秒）",
    "cli.cmd.sessions.desc": "列出已存储的会话",
    "cli.cmd.sessions.jsonOpt": "以 JSON 格式输出",
    "cli.cmd.sessions.storeOpt": "会话存储路径（默认：从配置解析）",
    "cli.cmd.sessions.activeOpt": "仅显示过去 N 分钟内更新的会话",
    "cli.cmd.setup.desc": "初始化 ~/.openclaw/openclaw.json 和代理工作区",
    "cli.cmd.setup.wizardOpt": "运行交互式引导向导",
    "cli.cmd.setup.nonInteractiveOpt": "无提示运行向导",
    "cli.cmd.onboard.desc": "交互式向导，设置网关、工作区和技能",
    "cli.cmd.onboard.resetOpt": "运行向导前重置配置 + 凭据 + 会话 + 工作区",
    "cli.cmd.onboard.nonInteractiveOpt": "无提示运行",
    "cli.cmd.onboard.acceptRiskOpt":
      "确认代理功能强大且完全系统访问存在风险（--non-interactive 必需）",
    "cli.cmd.doctor.desc": "网关和渠道的健康检查 + 快速修复",
    "cli.cmd.doctor.yesOpt": "接受默认值而不提示",
    "cli.cmd.doctor.repairOpt": "无提示应用推荐修复",
    "cli.cmd.doctor.fixOpt": "应用推荐修复（--repair 的别名）",
    "cli.cmd.doctor.forceOpt": "应用强力修复（覆盖自定义服务配置）",
    "cli.cmd.doctor.nonInteractiveOpt": "无提示运行（仅安全迁移）",
    "cli.cmd.doctor.deepOpt": "扫描系统服务以查找额外的网关安装",
    "cli.cmd.dashboard.desc": "使用当前令牌打开控制面板 UI",
    "cli.cmd.dashboard.noOpenOpt": "打印 URL 但不启动浏览器",
    "cli.cmd.reset.desc": "重置本地配置/状态（保留 CLI）",
    "cli.cmd.reset.yesOpt": "跳过确认提示",
    "cli.cmd.reset.nonInteractiveOpt": "禁用提示（需要 --scope + --yes）",
    "cli.cmd.reset.dryRunOpt": "打印操作但不删除文件",
    "cli.cmd.uninstall.desc": "卸载网关服务 + 本地数据（保留 CLI）",
    "cli.cmd.uninstall.serviceOpt": "移除网关服务",
    "cli.cmd.uninstall.stateOpt": "移除状态 + 配置",
    "cli.cmd.uninstall.workspaceOpt": "移除工作区目录",
    "cli.cmd.uninstall.appOpt": "移除 macOS 应用",
    "cli.cmd.uninstall.allOpt": "移除服务 + 状态 + 工作区 + 应用",
    "cli.cmd.message.desc": "发送消息和渠道操作",
    "cli.cmd.gateway.desc": "运行 WebSocket 网关",
    "cli.cmd.gateway.run": "运行 WebSocket 网关（前台）",
    "cli.cmd.gateway.status": "显示网关服务状态 + 探测网关",
    "cli.cmd.gateway.install": "安装网关服务（launchd/systemd/schtasks）",
    "cli.cmd.gateway.uninstall": "卸载网关服务（launchd/systemd/schtasks）",
    "cli.cmd.gateway.start": "启动网关服务（launchd/systemd/schtasks）",
    "cli.cmd.gateway.stop": "停止网关服务（launchd/systemd/schtasks）",
    "cli.cmd.gateway.restart": "重启网关服务（launchd/systemd/schtasks）",
    "cli.cmd.gateway.call": "调用网关方法",
    "cli.cmd.gateway.usageCost": "从会话日志获取使用成本摘要",
    "cli.cmd.gateway.health": "获取网关健康状态",
    "cli.cmd.gateway.probe": "显示网关可达性 + 发现 + 健康 + 状态摘要（本地 + 远程）",
    "cli.cmd.gateway.discover": "通过 Bonjour 发现网关（本地 + 广域，如已配置）",
    "cli.cmd.daemon.desc": "管理网关服务（launchd/systemd/schtasks）",
    "cli.cmd.daemon.status": "显示服务安装状态 + 探测网关",
    "cli.cmd.daemon.install": "安装网关服务（launchd/systemd/schtasks）",
    "cli.cmd.daemon.uninstall": "卸载网关服务（launchd/systemd/schtasks）",
    "cli.cmd.daemon.start": "启动网关服务（launchd/systemd/schtasks）",
    "cli.cmd.daemon.stop": "停止网关服务（launchd/systemd/schtasks）",
    "cli.cmd.daemon.restart": "重启网关服务（launchd/systemd/schtasks）",
    "cli.cmd.cron.desc": "管理定时任务（通过网关）",
    "cli.cmd.subcli.acp": "代理控制协议工具",
    "cli.cmd.subcli.gateway": "网关控制",
    "cli.cmd.subcli.daemon": "网关服务（旧别名）",
    "cli.cmd.subcli.logs": "网关日志",
    "cli.cmd.subcli.system": "系统事件、心跳和在线状态",
    "cli.cmd.subcli.models": "模型配置",
    "cli.cmd.subcli.approvals": "执行审批",
    "cli.cmd.subcli.nodes": "节点命令",
    "cli.cmd.subcli.devices": "设备配对 + 令牌管理",
    "cli.cmd.subcli.node": "节点控制",
    "cli.cmd.subcli.sandbox": "沙箱工具",
    "cli.cmd.subcli.tui": "终端 UI",
    "cli.cmd.subcli.cron": "定时调度器",
    "cli.cmd.subcli.dns": "DNS 工具",
    "cli.cmd.subcli.docs": "文档工具",
    "cli.cmd.subcli.hooks": "钩子工具",
    "cli.cmd.subcli.webhooks": "Webhook 工具",
    "cli.cmd.subcli.pairing": "配对工具",
    "cli.cmd.subcli.plugins": "插件管理",
    "cli.cmd.subcli.channels": "渠道管理",
    "cli.cmd.subcli.directory": "目录命令",
    "cli.cmd.subcli.security": "安全工具",
    "cli.cmd.subcli.skills": "技能管理",
    "cli.cmd.subcli.update": "CLI 更新工具",
    "cli.cmd.subcli.completion": "生成 Shell 补全脚本",

    // ── 通用 CLI 选项 ──
    "cli.cmd.common.jsonOpt": "输出 JSON",
    "cli.cmd.common.jsonSummaryOpt": "输出 JSON 摘要",
    "cli.cmd.common.yesOpt": "跳过确认提示",
    "cli.cmd.common.nonInteractiveOpt": "禁用提示（需要 --yes）",
    "cli.cmd.common.nonInteractiveScopeOpt": "禁用提示（需要 --scope + --yes）",
    "cli.cmd.common.dryRunOpt": "打印操作但不删除文件",

    // ── 代理渠道和身份选项 ──
    "cli.cmd.agent.channelOpt": "投递渠道：{options}（默认：{default}）",
    "cli.cmd.agents.setIdentity.agentOpt": "要更新的代理 ID",
    "cli.cmd.agents.setIdentity.workspaceOpt": "用于定位代理和 IDENTITY.md 的工作区目录",
    "cli.cmd.agents.setIdentity.identityFileOpt": "显式 IDENTITY.md 文件路径",
    "cli.cmd.agents.setIdentity.fromIdentityOpt": "从 IDENTITY.md 读取值",
    "cli.cmd.agents.setIdentity.nameOpt": "身份名称",
    "cli.cmd.agents.setIdentity.themeOpt": "身份主题",
    "cli.cmd.agents.setIdentity.emojiOpt": "身份表情",
    "cli.cmd.agents.setIdentity.avatarOpt": "身份头像（工作区路径、http(s) URL 或 data URI）",

    // ── Doctor + 重置额外选项 ──
    "cli.cmd.doctor.noWorkspaceSuggestionsOpt": "禁用工作区记忆系统建议",
    "cli.cmd.doctor.generateTokenOpt": "生成并配置网关令牌",
    "cli.cmd.reset.scopeOpt": "config|config+creds+sessions|full（默认：交互式提示）",

    // ── 引导额外选项 ──
    "cli.cmd.onboard.workspaceOpt": "代理工作区目录（默认：~/.openclaw/workspace）",
    "cli.cmd.onboard.flowOpt": "向导流程：quickstart|advanced|manual",
    "cli.cmd.onboard.modeOpt": "向导模式：local|remote",
    "cli.cmd.onboard.authChoiceOpt": "认证提供商选择",
    "cli.cmd.onboard.tokenProviderOpt":
      "令牌提供商 ID（非交互式；与 --auth-choice token 一起使用）",
    "cli.cmd.onboard.tokenOpt": "令牌值（非交互式；与 --auth-choice token 一起使用）",
    "cli.cmd.onboard.tokenProfileIdOpt": "认证配置文件 ID（非交互式；默认：<provider>:manual）",
    "cli.cmd.onboard.tokenExpiresInOpt": "可选令牌过期时长（如 365d、12h）",
    "cli.cmd.onboard.apiKeyOpt": "{provider} API 密钥",
    "cli.cmd.onboard.cloudflareAccountIdOpt": "Cloudflare 账户 ID",
    "cli.cmd.onboard.cloudflareGatewayIdOpt": "Cloudflare AI Gateway ID",
    "cli.cmd.onboard.gatewayPortOpt": "网关端口",
    "cli.cmd.onboard.gatewayBindOpt": "网关绑定：loopback|tailnet|lan|auto|custom",
    "cli.cmd.onboard.gatewayAuthOpt": "网关认证：token|password",
    "cli.cmd.onboard.gatewayTokenOpt": "网关令牌（令牌认证）",
    "cli.cmd.onboard.gatewayPasswordOpt": "网关密码（密码认证）",
    "cli.cmd.onboard.remoteUrlOpt": "远程网关 WebSocket 地址",
    "cli.cmd.onboard.remoteTokenOpt": "远程网关令牌（可选）",
    "cli.cmd.onboard.tailscaleOpt": "Tailscale：off|serve|funnel",
    "cli.cmd.onboard.tailscaleResetOpt": "退出时重置 tailscale serve/funnel",
    "cli.cmd.onboard.installDaemonOpt": "安装网关服务",
    "cli.cmd.onboard.skipDaemonOpt": "跳过网关服务安装",
    "cli.cmd.onboard.daemonRuntimeOpt": "守护进程运行时：node|bun",
    "cli.cmd.onboard.skipChannelsOpt": "跳过频道设置",
    "cli.cmd.onboard.skipSkillsOpt": "跳过技能设置",
    "cli.cmd.onboard.skipHealthOpt": "跳过健康检查",
    "cli.cmd.onboard.skipUiOpt": "跳过控制面板/TUI 提示",
    "cli.cmd.onboard.nodeManagerOpt": "技能安装包管理器：npm|pnpm|bun",

    // ── 初始化额外选项 ──
    "cli.cmd.setup.workspaceOpt":
      "代理工作区目录（默认：~/.openclaw/workspace；存储为 agents.defaults.workspace）",
    "cli.cmd.setup.modeOpt": "向导模式：local|remote",
    "cli.cmd.setup.remoteUrlOpt": "远程网关 WebSocket 地址",
    "cli.cmd.setup.remoteTokenOpt": "远程网关令牌（可选）",

    // ── 网关 CLI 选项 ──
    "cli.cmd.gateway.status.urlOpt": "网关 WebSocket 地址（默认从配置/远程/本地获取）",
    "cli.cmd.gateway.status.tokenOpt": "网关令牌（如需要）",
    "cli.cmd.gateway.status.passwordOpt": "网关密码（密码认证）",
    "cli.cmd.gateway.status.timeoutOpt": "超时时间（毫秒）",
    "cli.cmd.gateway.status.noProbeOpt": "跳过 RPC 探测",
    "cli.cmd.gateway.status.deepOpt": "扫描系统级服务",
    "cli.cmd.gateway.install.portOpt": "网关端口",
    "cli.cmd.gateway.install.runtimeOpt": "守护进程运行时（node|bun）。默认：node",
    "cli.cmd.gateway.install.tokenOpt": "网关令牌（令牌认证）",
    "cli.cmd.gateway.install.forceOpt": "已安装时重新安装/覆盖",
    "cli.cmd.gateway.call.methodArg": "方法名（health/status/system-presence/cron.*）",
    "cli.cmd.gateway.call.paramsOpt": "JSON 对象字符串参数",
    "cli.cmd.gateway.usageCost.daysOpt": "包含的天数",
    "cli.cmd.gateway.probe.urlOpt": "显式网关 WebSocket 地址（仍会探测 localhost）",
    "cli.cmd.gateway.probe.sshOpt": "远程网关隧道 SSH 目标（user@host 或 user@host:port）",
    "cli.cmd.gateway.probe.sshIdentityOpt": "SSH 身份文件路径",
    "cli.cmd.gateway.probe.sshAutoOpt": "尝试从 Bonjour 发现中推导 SSH 目标",
    "cli.cmd.gateway.probe.tokenOpt": "网关令牌（应用于所有探测）",
    "cli.cmd.gateway.probe.passwordOpt": "网关密码（应用于所有探测）",
    "cli.cmd.gateway.probe.timeoutOpt": "总体探测预算（毫秒）",
    "cli.cmd.gateway.discover.timeoutOpt": "每命令超时（毫秒）",

    // ── CLI 通用 ──
    "cli.cancelled": "设置已取消。",
    "cli.configInvalid": "配置无效。",
    "cli.noChanges": "未选择任何更改。",
    "cli.complete": "配置完成。",

    // ── 技能描述 ──
    "skill.desc.1password": "设置和使用 1Password CLI (op) 进行密钥管理。",
    "skill.desc.apple-notes": "通过 memo CLI 在 macOS 上管理 Apple Notes。",
    "skill.desc.apple-reminders": "通过 remindctl CLI 在 macOS 上管理 Apple Reminders。",
    "skill.desc.bear-notes": "通过 grizzly CLI 创建、搜索和管理 Bear 笔记。",
    "skill.desc.blogwatcher": "监控博客和 RSS/Atom 订阅源的更新。",
    "skill.desc.blucli": "BluOS CLI (blu)，用于设备发现、播放、分组和音量控制。",
    "skill.desc.bluebubbles": "通过 BlueBubbles 发送或管理 iMessage 消息。",
    "skill.desc.camsnap": "从 RTSP/ONVIF 摄像头捕获帧或短片段。",
    "skill.desc.canvas": "在已连接的 OpenClaw 节点上显示 HTML 内容。",
    "skill.desc.clawhub": "从 ClawHub 搜索、安装、更新和发布智能体技能。",
    "skill.desc.coding-agent": "通过后台进程运行编码智能体（Codex CLI、Claude Code 等）。",
    "skill.desc.discord": "从 OpenClaw 控制 Discord（消息、反应、话题、管理）。",
    "skill.desc.eightctl": "控制 Eight Sleep 床垫（状态、温度、闹钟、时间表）。",
    "skill.desc.food-order": "重新下单 Foodora 订单并追踪 ETA/状态。",
    "skill.desc.gemini": "Gemini CLI，用于一次性问答、摘要和生成。",
    "skill.desc.gifgrep": "搜索 GIF 提供商、下载结果并提取静帧。",
    "skill.desc.github": "使用 gh CLI 与 GitHub 交互。",
    "skill.desc.gog": "Google Workspace CLI，用于 Gmail、日历、云端硬盘、通讯录、表格和文档。",
    "skill.desc.goplaces": "通过 goplaces CLI 查询 Google Places API。",
    "skill.desc.healthcheck": "主机安全加固和风险容忍度配置。",
    "skill.desc.himalaya": "通过 IMAP/SMTP 管理电子邮件的 CLI 工具。",
    "skill.desc.imsg": "iMessage/SMS CLI，用于列出聊天、查看历史、监听和发送。",
    "skill.desc.local-places": "通过本地 Google Places API 代理搜索附近地点。",
    "skill.desc.mcporter": "列出、配置、认证和直接调用 MCP 服务器/工具。",
    "skill.desc.model-usage": "汇总每个模型的使用量和费用数据。",
    "skill.desc.nano-banana-pro": "通过 Gemini 3 Pro Image 生成或编辑图片。",
    "skill.desc.nano-pdf": "使用自然语言指令编辑 PDF。",
    "skill.desc.notion": "通过 Notion API 创建和管理页面、数据库和内容块。",
    "skill.desc.obsidian": "操作 Obsidian 知识库并通过 obsidian-cli 自动化。",
    "skill.desc.openai-image-gen": "通过 OpenAI Images API 批量生成图片。",
    "skill.desc.openai-whisper": "使用 Whisper CLI 进行本地语音转文字（无需 API 密钥）。",
    "skill.desc.openai-whisper-api": "通过 OpenAI 音频转录 API 转录音频。",
    "skill.desc.openhue": "通过 OpenHue CLI 控制 Philips Hue 灯光/场景。",
    "skill.desc.oracle": "使用 oracle CLI 的最佳实践。",
    "skill.desc.ordercli": "Foodora CLI，用于查看历史订单和当前订单状态。",
    "skill.desc.peekaboo": "通过 Peekaboo CLI 捕获和自动化 macOS 界面。",
    "skill.desc.sag": "ElevenLabs 文字转语音，类似 mac say 的体验。",
    "skill.desc.session-logs": "使用 jq 搜索和分析自己的会话日志。",
    "skill.desc.sherpa-onnx-tts": "通过 sherpa-onnx 进行本地文字转语音（离线，无需云端）。",
    "skill.desc.skill-creator": "创建或更新智能体技能。",
    "skill.desc.slack": "从 OpenClaw 控制 Slack（消息、反应、置顶）。",
    "skill.desc.songsee": "从音频生成频谱图和特征面板可视化。",
    "skill.desc.sonoscli": "控制 Sonos 音箱（发现/状态/播放/音量/分组）。",
    "skill.desc.spotify-player": "通过 spogo 或 spotify_player 进行终端 Spotify 播放/搜索。",
    "skill.desc.summarize": "从 URL、播客和文件中提取摘要或文本/字幕。",
    "skill.desc.things-mac": "通过 things CLI 在 macOS 上管理 Things 3。",
    "skill.desc.tmux": "远程控制 tmux 会话，用于交互式 CLI 操作。",
    "skill.desc.trello": "通过 Trello REST API 管理看板、列表和卡片。",
    "skill.desc.video-frames": "使用 ffmpeg 从视频中提取帧或短片段。",
    "skill.desc.voice-call": "通过 OpenClaw 语音通话插件发起语音通话。",
    "skill.desc.wacli": "通过 wacli CLI 发送 WhatsApp 消息或搜索/同步 WhatsApp 历史。",
    "skill.desc.weather": "获取当前天气和天气预报（无需 API 密钥）。",

    // ── 钩子描述 ──
    "hook.desc.boot-md": "在网关启动时运行 BOOT.md。",
    "hook.desc.command-logger": "将所有命令事件记录到集中式审计文件。",
    "hook.desc.session-memory": "在执行 /new 命令时将会话上下文保存到记忆。",
    "hook.desc.soul-evil": "在净化时间窗口内或随机将 SOUL.md 替换为 SOUL_EVIL.md。",

    // ── 内置工具标签 ──
    "tool.label.web_search": "网络搜索",
    "tool.label.web_fetch": "网页获取",
    "tool.label.memory_search": "记忆搜索",
    "tool.label.memory_get": "记忆读取",
    "tool.label.image": "图片理解",
    "tool.label.tts": "文字转语音",
    "tool.label.browser": "浏览器",
    "tool.label.canvas": "画布",
    "tool.label.nodes": "节点",
    "tool.label.cron": "定时任务",
    "tool.label.gateway": "网关",
    "tool.label.message": "消息",
    "tool.label.agents_list": "智能体",
    "tool.label.sessions_list": "会话",
    "tool.label.sessions_history": "会话历史",
    "tool.label.sessions_send": "会话发送",
    "tool.label.sessions_spawn": "子智能体",
    "tool.label.session_status": "会话状态",
  },
};

let currentLocale: Locale = "en";

function detectLocale(): Locale {
  // Check OPENCLAW_LOCALE env var first
  const envLocale = process.env.OPENCLAW_LOCALE;
  if (envLocale && isLocale(envLocale)) {
    return envLocale;
  }

  // Check LANG env var
  const lang = process.env.LANG ?? "";
  if (lang.startsWith("zh")) {
    return "zh-CN";
  }

  // Check LC_ALL
  const lcAll = process.env.LC_ALL ?? "";
  if (lcAll.startsWith("zh")) {
    return "zh-CN";
  }

  return "en";
}

function isLocale(value: string): value is Locale {
  return value === "en" || value === "zh-CN";
}

// Auto-detect on load
currentLocale = detectLocale();

/**
 * Translate a key with optional parameter interpolation.
 * Falls back to English, then to the key itself.
 */
export function t(key: string, params?: Record<string, string | number>): string {
  const dict = translations[currentLocale] ?? translations.en;
  let value = dict[key] ?? translations.en[key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
    }
  }
  return value;
}

export function getLocale(): Locale {
  return currentLocale;
}

export function setLocale(locale: Locale): void {
  currentLocale = locale;
}

/**
 * Translate a skill description by skill key, falling back to the raw description
 * when no translation is available (e.g. workspace or user-installed skills).
 */
export function tSkillDesc(skillKey: string, fallback: string): string {
  const key = `skill.desc.${skillKey}`;
  const result = t(key);
  return result === key ? fallback : result;
}

/**
 * Translate a hook description by hook key, falling back to the raw description
 * when no translation is available (e.g. workspace or user-installed hooks).
 */
export function tHookDesc(hookKey: string, fallback: string): string {
  const key = `hook.desc.${hookKey}`;
  const result = t(key);
  return result === key ? fallback : result;
}
