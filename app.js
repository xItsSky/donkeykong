const { Client, Intents } = require('discord.js');
require("./utils/InlineReply");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] })

const MonkeyService = require('./service/MonkeyService')(client, '!');

client.login(process.env.TOKEN);
