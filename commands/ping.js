module.exports = {
    name: 'ping',
    description: 'ping command',
    async execute(client, message, args) {
        console.log('ping command executed');
        message.reply('pong');
    }
};
