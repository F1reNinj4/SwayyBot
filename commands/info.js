const Discord = require('discord.js');
const { version } = require('../index.js');

module.exports = {
    name: 'info',
    description: 'Information',
    execute(message, args) {
        switch (args[1]) {
            case 'version':
                message.channel.sendMessage('Version ' + version);
                break;
            case 'me':
                const me = new Discord.RichEmbed()
                    .setTitle('User Information')
                    .addField('User Name', message.author.username)
                    .addField('Current Server', message.guild.name)
                    .setColor(0xD0B02B)
                    .setThumbnail(message.author.avatarURL)
                    .setFooter('SwayyBot v' + version);
                message.channel.sendEmbed(me);
                break;
            default:
                message.channel.sendMessage('Invalid arguments!')
                    .then(msg => msg.delete(4000));
                break;
        }
    }
}