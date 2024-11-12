# Discord COD Bot

A Discord bot that performs mathematical calculations with three variables (x, y, z).

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A Discord account
- A Discord server where you have admin permissions

## Step-by-Step Installation

### 1. Project Setup

```bash
yarn install OR npm install
```

### 2. Discord Bot Creation

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" in the top right
3. Give your application a name and click "Create"
4. Go to the "Bot" section in the left sidebar
5. Click "Add Bot" and confirm
6. Under the bot's username, click "Reset Token" and copy your new token
7. Enable these privileged intents under the bot settings:
   - MESSAGE CONTENT INTENT
   - SERVER MEMBERS INTENT
   - PRESENCE INTENT

### 3. Configure Environment Variables

1. Create a `.env` file in your project root or copy the `.env.example` file and rename it to `.env`
2. Add your Discord bot token to the `.env` file

```bash
DISCORD_TOKEN=your_discord_bot_token
```

### 4. Invite Bot to Your Server

1. In Discord Developer Portal, go to OAuth2 > URL Generator
2. Select these scopes:
   - `bot`
   - `applications.commands`
3. Select these bot permissions:
   - Send Messages
   - Use Slash Commands
4. Copy the generated URL at the bottom
5. Open the URL in a browser
6. Select your server and click "Authorize"

### 5. Run the Bot

```bash
node index.js
```

## Usage

Use the slash command `/formules` with three numbers:

```
/formules 1 2 3
```


The bot will return three calculations in the format "XX YY ZZ":
- First number (XX): 2x + 11
- Second number (YY): (2z+y)-5
- Third number (ZZ): |y+z-x|

## Troubleshooting

1. If you get "Invalid Token":
   - Make sure your token in `.env` is correct
   - Try regenerating the token in Discord Developer Portal

2. If slash commands don't appear:
   - Wait up to an hour (Discord's cache)
   - Remove and reinvite the bot to your server

3. If you get "Intents" error:
   - Check if all required intents are enabled in the Discord Developer Portal

## Security Notes

- Never share your bot token
- Don't commit `.env` file to version control
- If you accidentally expose your token, reset it immediately in the Discord Developer Portal

## Files Structure