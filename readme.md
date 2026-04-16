## File Structure

- **commands/** — Slash commands (organized by category)
- **events/** — Event handlers (`ready.js`, `interactionCreate.js`)
- **index.js** — Main entry point (loads commands & events)
- **logger.js** — Pino logging utility
- **deploy-commands.js** — Registers slash commands with Discord

## How It Works

`index.js` loads all commands from `/commands` and event handlers from `/events` at startup. Commands define `data` (slash command metadata) and `execute` (handler function). Events fire on Discord lifecycle events.

## Environment Variables

Create `.env.development` and `.env.production` from `.env.template`:

```
BOT_TOKEN=your_bot_token
CLIENT_ID=your_app_client_id
GUILD_ID=your_test_server_id
```

- **dev** script uses `.env.development` with pretty logging
- **start** script uses `.env.production` in production
- Both are git-ignored (never commit secrets)

## npm Scripts

- `npm run dev` — Run with prettier logging
- `npm start` — Run in production
- `npm deploy-dev` — Deploy the commands to dev
- `npm deploy-dev` — Deploy the commands to production
