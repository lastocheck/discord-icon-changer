const dotenv = require('dotenv');
dotenv.config();
const source = require('../main');
module.exports = {
    name: 'toggle',
    description: 'toggles the icon change',
    async execute(client, message, args) {
        if (!args[0]) {
            return message.reply('no args found');
        }

        if (args[2]) {
            return message.reply('too many arguments');
        }

        switch (args[0]) {
            case 'on': {
                if (!source.timedCheck) {
                    let interval = process.env.DEFAULT_INTERVAL;
                    if (args[1]) {
                        try {
                            interval = parseInt(args[1]) * 60 * 1000;
                        } catch (error) {
                            return message.reply(`invalid interval argument ${args[1]}`);
                        }
                    }

                    source.timedCheck = setInterval(() => {
                        let imgName = '1.png';
                        if (source.currentPic === 1) {
                            imgName = '2.png';
                        }
                        message.guild.setIcon(`./img/${imgName}`);
                        //message.channel.send(imgName);
                        source.currentPic = source.currentPic === 1 ? 2 : 1;
                    }, interval);
                    message.reply(`starting changing the icon with the ${interval / 1000 / 60} min. interval`);
                    console.log(`starting command with interval ${interval / 1000 / 60}min.`);
                } else {
                    return message.reply('command already running');
                }
                break;
            }

            case 'off': {
                if (source.timedCheck) {
                    message.reply('turning off');
                    clearInterval(source.timedCheck);
                    source.timedCheck = undefined;
                } else {
                    message.reply('command is not running');
                }
                break;
            }

            default: {
                message.reply(`incorrect argument: ${args[0]}`);
                break;
            }
        }
    }
};
