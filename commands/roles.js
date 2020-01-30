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
                    .then(reaction => reaction.message.react('<:osu:672483428276502539>'))
                    .then(reaction => reaction.message.react('<:HunterCallOfTheWild:672483427555213332>'))
                    .then(reaction => reaction.message.react('<:CallOfDuty:672483428809048064>'))
                    .then(reaction => reaction.message.react('<:Rainbow6:672483425827160084>'))
                    .then(reaction => reaction.message.delete(20000))
                }
            }
            return;
        }
        if (args[0] === 'roles') {
        const embed = new RichEmbed
        embed.setTitle('Server Roles');
        embed.setColor(0xD0B02B);
        embed.setDescription('<:Minecraft:667493014360555530> - Minecraft\n ' +
        '<:RocketLeague:667493014137995314> - Rocket League\n' + 
        '<:osu:672483428276502539> - osu!\n' +
        '<:HunterCallOfTheWild:672483427555213332> - Hunter: Call of the Wild\n' +
        '<:CallOfDuty:672483428809048064> - Call of Duty\n' +
        '<:Rainbow6:672483425827160084> Rainbow 6 Siege\n');
        embed.setFooter('SwayyBot v' + version);

        message.channel.send(embed);
        }
    }
}
