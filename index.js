const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const fs = require('fs');

module.exports = { version : '1.0.1' };

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

const token = 'NjY1NjI4MjI1OTE3MTU3Mzg4.XhoZaw.RNk00L4cKv7f9wvUBED0JhuIUhk';

const PREFIX = '?'

bot.on('ready', () => {
    console.log('This bot is online!')
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0]) {
        case 'ping':
            bot.commands.get('ping').execute(message, args);
            break;
        case 'info':
            bot.commands.get('info').execute(message, args);
            break;
        case 'clear':
            bot.commands.get('clear').execute(message, args);
            break;
        case 'help':
            bot.commands.get('help').execute(message, args);
            break;
    }
})

bot.login(process.env.token);