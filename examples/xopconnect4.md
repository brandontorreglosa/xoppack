```js
const lineReplyNoMention = require('discord.js');
const { XOPConnect4 } = require("xoppack") //<----Always Define XOPPACK---->

module.exports = {
    name: "connect4",
    cooldown: 10, //<----Your Bots Cooldown!---->[optional]
    permissions: ["SEND_MESSAGES"], //<----Your Member Permissions!---->[optional]
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"], //<----Your Bots Permissions!---->[optional]
    description: "connect4 in discord!",
    async execute(client, message, cmd, args, Discord) { //<----Your Parameters---->
        if (!args[0]) {
            const noch = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#c30202')
                .setAuthor(`${message.author.username} `, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)connect4 <@user>\`**`)
            return message.lineReplyNoMention(noch)
        }
        new XOPConnect4({
            message: message,
            opponent: message.mentions.users.first(),
            embed: {
                title: 'Connect 4 Game',
                color: '#c30202',
            },
            emojis: {
                player1: '🔴',
                player2: '🟡'
            },
            turnMessage: '**Its Now {player}\`s Turn!**',
            winMessage: '**{winner} Won The Game!**',
            gameEndMessage: '**The Game Was Unfinished!**',
            drawMessage: '**The Game Ended With A Draw!**',
            askerMessage: '**Hey {opponent}, {challenger} Challenged You For A Game Of Connect 4!**',
            cancelMessage: '**Looks Like They Didn\`t Want To Play!**',
            timerEndMessage: '**Since The Opponent Didnt Answer, I Ended The Game!**',
        }).startGame();
    },
};
```