const source = require('../main');
module.exports = {
    name: 'testchange',
    description: 'testing the server icon change',
    async execute(client, message, args) {
        console.log('test change command executed');
        let imgName = '1.png';
        if (source.currentPic === 1) {
            imgName = '2.png';
        }
        message.guild.setIcon(`./img/${imgName}`);
        message.reply('icon changed!');
    }
};
