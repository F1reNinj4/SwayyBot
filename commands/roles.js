const { RichEmbed } = require('discord.js');
const fs = require('fs');
const { version } = require('../package.json');

module.exports = {
    name: 'roles',
    description: 'Roles.',
    execute(message, args) {
        if (message.author.bot) {
            if (message.embeds) {
                const embedMsg = message.embeds.find(msg => msg.title === 'Server Roles');
                if (embedMsg) {
                    message.react(':Minecraft:667493014360555530')
                    .then(reaction => reaction.message.react(':RocketLeague:667493014137995314'))
                    .then(reaction => reaction.message.delete(60000))
                }
            }
            return;
        }
        if (args[0] === 'roles') {
        const embed = new RichEmbed
        embed.setTitle('Server Roles');
        embed.setColor(0xD0B02B);
        embed.setDescription('<:Minecraft:667493014360555530> - Minecraft\n ' +
        '<:RocketLeague:667493014137995314> - Rocket League\n');
        embed.setFooter('SwayyBot v' + version);

        message.channel.send(embed);
        }
    }
}