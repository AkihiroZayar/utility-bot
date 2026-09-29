<p align="center">
  <img src="app-icon.png" alt="Byte Utility logo" width="112">
</p>

<h1 align="center">Byte Utility 🦝</h1>

<p align="center">
  The AkihiroLabs Discord bot — Byte the raccoon greets the server, welcomes new members and keeps spam away.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.1.0-1E3A8A" alt="version 1.1.0">
  <img src="https://img.shields.io/badge/discord.js-v14-00A8CC" alt="discord.js v14">
  <img src="https://img.shields.io/badge/Node.js-18%2B-1E3A8A" alt="Node.js 18+">
</p>

---

## ✨ Features

- **Scheduled greetings** — morning (8:00), noon (12:00) and night (22:00) messages in JST, in Byte's voice
- **Welcome messages** — greets new members and can give them the Member role
- **Anti-spam** — times out members who send too many messages too fast
- **Slash commands** — loaded from the `commands/` folder
- **Mod log** — moderation events go to a log channel
- **AkihiroLabs projects** — a built-in list of AkihiroLabs projects to share

## 🚀 Getting started

Requires **Node.js 18+** and a Discord application with a bot user.

```bash
npm install
cp .env.example .env      # then fill in your values
npm run deploy            # register slash commands in your server
npm start                 # start the bot
```

`.env` needs `DISCORD_TOKEN`, `CLIENT_ID` and `GUILD_ID`. It's already in `.gitignore` — never commit it.

Channel IDs, greeting times, anti-spam limits and messages are set in `config.js`.

## 📁 Project structure

```
utility-bot/
├── index.js            # Client, command/event loader, scheduled greetings
├── deploy-commands.js  # Registers slash commands for your server
├── config.js           # Channels, schedule, anti-spam, messages, projects
├── commands/           # Slash commands (one file each)
├── events/             # Discord event handlers
├── app-icon.png        # App logo (README, 512px)
├── favicon.png · apple-touch-icon.png · icon-192.png · icon-512.png
├── package.json
├── .env.example        # Template for your secrets
├── CHANGELOG.md
└── README.md
```

> ⚠️ `index.js` loads the `commands/` and `events/` folders, which aren't in this repository yet — push them before deploying.

## 🖼 Bot avatar

Use `icon-512.png` as the bot's avatar in the Discord Developer Portal (Bot → Icon) so it matches the AkihiroLabs app family.

## 🛠 Tech

- Node.js + [discord.js](https://discord.js.org/) v14
- [node-cron](https://github.com/node-cron/node-cron) for scheduled greetings (Asia/Tokyo)
- [dotenv](https://github.com/motdotla/dotenv) for secrets

## 🔖 Versioning

This project uses [Semantic Versioning](https://semver.org/) (`MAJOR.MINOR.PATCH`).

- The version lives in **`package.json`** (`version`).
- To release: bump the version, add an entry to [`CHANGELOG.md`](CHANGELOG.md), then create a GitHub Release tagged `vX.Y.Z`.

Current version: **v1.1.1** — see the [changelog](CHANGELOG.md).

## 💬 Community

Updates and feedback on the **AkihiroLabs Discord server**.

---

<p align="center">
  Built with 🦝 by <b>AkihiroLabs</b>
</p>
