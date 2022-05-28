<h1 align="center"><strong>XOPPACK</h1></strong>
<b><p align="center">A Fun Game NPM Package Made For Discord.js Developers!</p></b>
<p align="center">
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

- Updates Your Package Version To The Latest (ex. v2 > v3)

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
<img height="350px" width="100%" src="https://i.imgur.com/OXM37w7.png">

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
<img height="700px" width="100%" src='https://cdn.discordapp.com/attachments/824319314495537175/886540689314299944/Screenshot_2021-09-12_121559.png'>

## **📯 | Announcments**
<code>V1.4.8-bfix / V1.4.9</code> 
<p><strong>Major Update:</strong><br/>
We Removed The Ability To Name A Embed As It Created Errors Wth The Package.<br/>Instead We Recommend To Change A Embed Title Manuallly By Going In The <code>Node_Modules</code></p>
<code>V1.5.0</code>
<p><strong>Huge Update:</strong><br/>
We Have Made Various Changes In The Package, Of Which None Have Affected The Constructor In To Need Of Changing Options. Although They Have Affected Only The Source.<br/>To Be More Specific We Have Changed Folders And Functions Of Each Constructor.<br/>Example:
&nbsp;<code>lib</code>&nbsp;to&nbsp;<code>src</code>&nbsp;,&nbsp;<code>examples</code>&nbsp;to&nbsp;<code>events</code>&nbsp;,&nbsp;<code>xoptypes</code>&nbsp;to&nbsp;<code>typescript</code> and more...</p>

## **👥 | Discord Server**
You Can Visit The [Issues](https://github.com/HACKERPROTM/xoppack/issues) Page Of XOPPACK To Report [Bugs](https://github.com/HACKERPROTM/xoppack/issues) Or [Errors](https://github.com/HACKERPROTM/xoppack/issues) Found! 
Also Dont Be Afraid To Ping Me 'Once' On My [Server](https://discord.gg/invite/dPXTa2XERS) Just Click The Image And It Will Send You To The Server ⏬

<a href="https://discord.gg/invite/dPXTa2XERS"><img height="500px" width="100%" src="https://discord.com/api/guilds/707557478254247936/widget.png?style=banner4" alt="Discord"></a>

<b><p align="left">A Package Owned By <a href="https://github.com/XOPBOT-INC">XOPBOT.INC</a></p></b>
<hr/>
<h2>Please Make Sure To 🌟 And 🍴 The Repository!</h2>
