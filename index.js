const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
  });
const EasyAntiSpam = require('easyantispam'); // Js

Easy = new EasyAntiSpam.Config({
        urls: false, // Delete or not all URLS
        discordInvites: false, // Delete or not Discord Invites 
        allowUrlImages: true, // Delete or not Images provided by URL
        dm: false, // If true, send your message with URL to private message
        messageLink: "Hey {author}, you are not allowed to send spam.", // Message sent when a user send an URL
        messageFlood: "Hey {author}, stop doing spam.", // Message sent when a user is warned for flood
        messageKicked: "{author} has been kicked.", // Message sent when a user is kicked
        messageBanned: "{author} has been banned.", // Message sent when a user is banned
        allowBots: true, // Allow bots
        allowedPerms: [], // List of permissions allowed to do spam
        warnRow: 4, // Messages sent in a row to be warned
        kickRow: 6, // Messages sent in a row to be kicked
        banRow: 8, // Messages sent in a row to be banned
        rowInterval: 2000, // Amount of time in ms to consider spam (2s)
        warnDuplicates: 5, // Duplicated messages sent to be warned
        kickDuplicates: 10, // Duplicated messages sent to be kicked
        banDuplicates: 15, // Duplicated messages sent to be banned
        duplicatesInterval: 600000, // Amount of time in ms to consider spam (10m)
        canKick: false, // If false, the bot dont kick users
        canBan: false, // If false, the bot dont ban users
        banDays: 1, // Amount of days of Ban
 }); 

client.once('ready', () => console.log('Bot is online!'));

client.on('messageCreate', async message => {
    Easy.run(message);
});

client.login('Your Token');