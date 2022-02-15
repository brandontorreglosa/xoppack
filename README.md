<p align="center">
<a href="https://xopbot-gg.glitch.me/"><img src="https://cdn.discordapp.com/avatars/831824859066925087/6fb334d187ba17372343e45a3a7a76da.webp"></a>
</p>
<h1 align="center"><strong>XOPPACK</h1></strong>
<p align ="center">
    <a href="https://www.npmjs.com/package/xoppack"><img src="https://nodei.co/npm/xoppack.png?downloads=true&downloadRank=true&stars=true" alt="NPM All"></a>
</p>
<p align="center">
    <a href="https://www.npmjs.com/package/xoppack"><img src="https://img.shields.io/npm/v/xoppack.svg?style=for-the-badge&label=XOPPACK" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/xoppack"><img src="https://img.shields.io/npm/dt/xoppack.svg?style=for-the-badge" alt="NPM Downloads" /></a>
    <a href="https://www.npmjs.com/package/xoppack"><img src="https://img.shields.io/librariesio/dependents/npm/xoppack?style=for-the-badge" alt="NPM Dependents"></a>
    <a href="https://www.npmjs.com/package/xoppack"><img src="https://img.shields.io/npm/l/xoppack.svg?style=for-the-badge&color=red" alt="NPM License"></a>
    <a href="https://discord.gg/invite/dPXTa2XERS"><img src="https://img.shields.io/discord/707557478254247936?style=for-the-badge&color=blue&label=HACKERPROTM%27s%20Server" alt="Discord"></a>
</p>

## **📥 | Installation**
```js
npm i xoppack
```

- Only Supports Discord.js@12.5.3 And Lower Versions Of V12

## **📤 | Update**
```js
npm i xoppack@latest
```

## **🎮 | XOP RPS GAME**
```js
const lineReplyNoMention = require('discord-reply')  //<----Install To Work!---->
const { XOPRockPaperScissors } = require('xoppack') //<----Always Define XOPPACK---->

module.exports = {
    name: "rps",
    permissions: ["SEND_MESSAGES"], //<----Your Member Permissions!---->[optional]
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"], //<----Your Bots Permissions!---->[optional]
    aliases: [],
    cooldown: 10, //<----Your Bots Cooldown!---->[optional]
    description: "play rock paper sciccors",
    async execute(client, message, cmd, args, Discord) { //<----Your Parameters---->
        if (!args[0]) {
            const noch = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#34b7db')
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)rps <@user>\`**`)
            return message.lineReplyNoMention(noch)
        }
        new XOPRockPaperScissors({
            message: message,
            opponent: message.mentions.users.first(),
            embed: {
                title: 'Rock Paper Scissors Game',
                description: '**Press A Button Below To Start!**',
                color: '#c30202',
            },
            buttons: {
                rock: '🗻',
                paper: '📄',
                scissors: '✂',
            },
            othersuserMessage: '**You Are Not Allowed To Use Buttons For This Message!**',
            chooseMessage: '**You Choose {emoji}!**',
            noChangeMessage: '**You Cannot Change Your Button Selection!**',
            askerMessage: '**Hey {opponent}, {challenger} Challenged You For A Game Of Rock Paper Scissors!**',
            cancelMessage: '**Looks Like They Didn\`t Want To Play!**',
            timerEndMessage: '**Since The Opponent Didnt Answer, I Ended The Game!**',
            drawMessage: '**The Game Ended With a Draw!**',
            winMessage: '**{winner} Won The Game!**',
            gameEndMessage: '**The Game Was Unfinished!**',
        }).startGame();
    },
};
```

## **🤳 | Outcome**
<img height=80% width=50% src="https://cdn.discordapp.com/attachments/824319314495537175/886540431075188746/Screenshot_2021-09-12_121435.png">

## **🎮 | XOP SNAKE GAME**
```js
const lineReplyNoMention = require('discord-reply') //<----Install To Work!---->
const { XOPSnake } = require("xoppack") //<----Always Define XOPPACK---->

module.exports = {
    name: "snake",
    cooldown: 10, //<----Your Bots Cooldown!---->[optional]
    permissions: ["SEND_MESSAGES"], //<----Your Member Permissions!---->[optional]
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"], //<----Your Bots Permissions!---->[optional]
    description: "snake in discord!",
    async execute(client, message, cmd, args, Discord) { //<----Your Parameters---->
        new XOPSnake({
            message: message,
            embed: {
                title: 'Snake Game',
                color: '#34b7db',
                OverTitle: "**Game Over!**",
            },
            snake: { head: '🔴', body: '🟥', tail: '🔴' },
            emojis: {
                board: '⬛',
                food: '🍌',
                up: '⬆️',
                right: '➡️',
                down: '⬇️',
                left: '⬅️',
            },
            othersuserMessage: '**You Are Not Allowed To Use The Buttons For The Snake Game!**',
        }).startGame();
    },
};
```

## **🤳 | Outcome**
<img height=70% width=50% src='https://cdn.discordapp.com/attachments/824319314495537175/886540689314299944/Screenshot_2021-09-12_121559.png'>

## **🆘 | Bugs**
You Can Visit The [Issues](https://github.com/HACKERPROTM/xoppack/issues) Page Of XOPPACK To Report [Bugs](https://github.com/HACKERPROTM/xoppack/issues) Or [Errors](https://github.com/HACKERPROTM/xoppack/issues) Found!
Also Dont Be Afraid To Ping Me 'Once' On My [Server](https://discord.gg/invite/dPXTa2XERS) Just Click The Image And It Will Send You To The Server ⏬

## **👥 | Discord Server**
<a href="https://discord.gg/invite/dPXTa2XERS"><img src="https://discord.com/api/guilds/707557478254247936/widget.png?style=banner4" alt="Discord"></a>