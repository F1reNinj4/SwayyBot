module.exports = {
    name: 'admin',
    description: 'Admin tools',
    execute(message, args) {
        if (!message.member.roles.find(r => r.name === 'SwayyAdmin')) return message.channel.send('You lack permissions for this command.')
            .then(msg => msg.delete(4000));
        switch (args[1]) {
            case 'clear':
                if (!args[2]) return message.channel.send('Invalid arguments!')
                    .then(msg => msg.delete(4000));
                message.channel.bulkDelete(args[2]);
                break;
            default:
                message.channel.sendMessage('Invalid arguments!')
                    .then(msg => msg.delete(4000));
                break;
        }
    }
}