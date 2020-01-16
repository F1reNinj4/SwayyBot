const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

const token = require('./package.json');

const PREFIX = '?'

bot.on('ready', () => {
    bot.user.setGame('Swayy945', 'https://twitch.tv/swayy945')
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
        case 'help':
            bot.commands.get('help').execute(message, args);
            break;
        case 'admin':
            bot.commands.get('admin').execute(message, args);
            break;
    }
})

bot.on('message', message => {
    
    let args = message.content.substring(PREFIX.length).split(' ');

        bot.commands.get('roles').execute(message, args);
})

bot.on('messageReactionAdd', (reaction, user) => {
    if (user.bot)
        return;
    
    var roleName = reaction.emoji.name;
    var role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === roleName.toLowerCase());
    var member = reaction.message.guild.members.find(member => member.id === user.id);
    if(member.roles.has(role.id)) {
        member.removeRole(role.id)
    }
    member.addRole(role.id)
})

bot.login(token);