module.exports = {
    name: 'clear',
    description: 'Bulk delete',
    execute(message, args) {
        if (!message.member.roles.find(r => r.name === 'SwayyAdmin')) return message.channel.send('You lack permissions to perform this command.')
            .then(msg => msg.delete(4000));
        if (!args[1]) return message.channel.send('Invalid arguments!')
            .then(msg => msg.delete(4000));
        message.channel.bulkDelete(args[1]);
    }
}