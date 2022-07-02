const Discord = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

require('./command-handler')(client, Discord);
require('./event-handler')(client, Discord);

module.exports.timedCheck = undefined;
module.exports.currentPic = 1;

client.login(process.env.TOKEN);
