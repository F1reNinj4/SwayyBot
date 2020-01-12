const Discord = require('discord.js');
const { version } = require('../index.js');

module.exports = {
    name: 'help',
    description: 'Command help.',
    execute(message, args) {
        if (args[1] === 'ping') {
            const ping = new Discord.RichEmbed()
                .setTitle('Ping')
                .addField('Usage: `?ping`', 'Sends \'Pong!\'')
                .setFooter('SwayyBot v' + version)
                .setColor(0xD0B02B);
            message.channel.sendEmbed(ping);
        } else if (args[1] === 'info') {
            const info = new Discord.RichEmbed()
                .setTitle('Info')
                .addField('Usage: `?info [ me | version ]`', 'Information about the bot, server and user.')
                .setFooter('SwayyBot v' + version)
                .setColor(0xD0B02B);
            message.channel.sendEmbed(info);
        } else if (args[1] === 'clear') {
            const clear = new Discord.RichEmbed()
                .setTitle('Clear')
                .addField('Usage: `?clear <number>`', 'Bulk-deletes a defined number of messages.')
                .setFooter('SwayyBot v' + version)
                .setColor(0xD0B02B);
            message.channel.sendEmbed(clear);
        } else {
            const help = new Discord.RichEmbed()
                .setTitle('Help')
                .addField('Prefix: ?', '`clear, info, ping`')
                .setFooter('SwayyBot v' + version)
                .setColor(0xD0B02B);
            message.channel.sendEmbed(help);
        }
    }
}