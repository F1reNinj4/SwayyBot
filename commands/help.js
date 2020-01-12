const Discord = require('discord.js');
const { version } = require('../index.js');

module.exports = {
    name: 'help',
    description: 'Command help.',
    execute(message, args) {
        switch (args[1]) {
            case 'ping':
                const ping = new Discord.RichEmbed()
                    .setTitle('Ping')
                    .addField('Usage: `?ping`', 'Sends \'Pong!\'')
                    .setFooter('SwayyBot v' + version)
                    .setColor(0xD0B02B);
                message.channel.sendEmbed(ping);
                break;
            case 'info':
                const info = new Discord.RichEmbed()
                    .setTitle('Info')
                    .addField('Usage: `?info [ me | version ]`', 'Information about the bot, server and user.')
                    .setFooter('SwayyBot v' + version)
                    .setColor(0xD0B02B);
                message.channel.sendEmbed(info);
                break;
            case 'admin':
                const clear = new Discord.RichEmbed()
                    .setTitle('Admin')
                    .addField('Usage: `?admin [ clear ]`', 'Admin tools.')
                    .setFooter('SwayyBot v' + version)
                    .setColor(0xD0B02B);
                message.channel.sendEmbed(clear);
                break;
            default:
                const help = new Discord.RichEmbed()
                    .setTitle('Help')
                    .addField('Prefix: ?', '`admin, info, ping`')
                    .setFooter('SwayyBot v' + version)
                    .setColor(0xD0B02B);
                message.channel.sendEmbed(help);
                break;
        }
    }
}