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

- Supports Discord.js v12

## **📤 | Update**
```js
npm i xoppack@latest
```

- Update Your Package Version

## **📸 | XOP IMAGES**

<table>
<b>
<tr>
<th>Function</th>
<th>Information</th>
<th>Example</th>
</tr>
<tr>
<th>XOPAD</th>
<th>Displays A User As A Advertisement</th>
<th>XOPAD({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPBlur</th>
<th>Displays A Blurry Image Of The User</th>
<th>XOPBlur({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPClown</th>
<th>Displays A User As A Clown</th>
<th>XOPClown({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPDOF</th>
<th>Displays A Shameless User On The Dock</th>
<th>XOPDOF({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPDrip</th>
<th>Displays A Drippy User</th>
<th>XOPDrip({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPGrave</th>
<th>Displays A User In A Grave</th>
<th>XOPGrave({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPGun</th>
<th>Displays A User Holding A Gun</th>
<th>XOPGun({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPHeaven</th>
<th>Displays A User In Heaven</th>
<th>XOPHeaven({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPIAS</th>
<th>Displays A User As Mc'queen</th>
<th>XOPIAS({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPMNM</th>
<th>Displays A User As A MNM</th>
<th>XOPMNM // The Same As Below</th>
</tr>
<tr>
<th>XOPPET</th>
<th>Displays A User Getting Petted</th>
<th>XOPPET({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPSimp</th>
<th>Displays A User As A Simp</th>
<th>XOPSimp({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPStonks</th>
<th>Displays A User Getting High Stonks</th>
<th>XOPStonks({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPTABFLIP</th>
<th>Displays A User Tableflipping</th>
<th>XOPTABFLIP({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPWanted</th>
<th>Displays A User Being Wanted</th>
<th>XOPWanted({}) // The Same As Below</th>
</tr>
<tr>
<th>XOPWPFP</th>
<th>Displays A User's PFP Wide</th>
<th>XOPWPFP({}) // The Same As Below</th>
</tr>
</b>
</table>

**Version 12 Example**

```js
client.on('message', async (message) => {
if (message.content === "clown"){
   new XOPClown({ // Just Edit The Name With Any Of The Above
            message: message,
            mention: true, // Rewrite To False To Not Mention
            embed: {
                color: `PURPLE`, // HEX OR RED, GREEN etc.
                title: "Clown" // Title For The Embed
            }
        }).startFunction();
    },
});
```
## **🤳 | Outcome**
<img width="100%" height="550px" src="https://i.imgur.com/4jQBA5U.png">

**Version 12 Example**
```js
client.on('message', async (message) => {
if (message.content === "ad"){
   new XOPAD({ // Just Edit The Name With Any Of The Above
            message: message,
            mention: true, // Rewrite To False To Not Mention
            embed: {
                color: `PURPLE`, // HEX OR RED, GREEN etc.
                title: "AD" // Title For The Embed
            }
        }).startFunction();
    },
});
```
## **🤳 | Outcome**
<img height="550px" width="100%" src="https://i.imgur.com/ptj9qix.png">

## **🎮 | XOP RPS GAME**

**Version 12 Function**
```js
const lineReplyNoMention = require('discord-reply')  //<----Install To Work!---->
const { XOPRockPaperScissors } = require('xoppack') //<----Always Define XOPPACK---->
client.on('message', async (message) => {
if (message.content === "rps") {
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
                description: '**Press A Button Below To Start!**', // Text To Display On Embed
                color: '#c30202', // HEX OR RED, GREEN etc.
            },
            buttons: {
                rock: '🗻', // The Emoji For The Rock
                paper: '📄', // The Emoji For The Paper
                scissors: '✂', // The Emoji For The Scissors
            },
            othersuserMessage: '**You Are Not Allowed To Use Buttons For This Message!**', // Message To Display To Other Users
            chooseMessage: '**You Choose {emoji}!**', // The Message When A Emoji Is Chosen
            noChangeMessage: '**You Cannot Change Your Button Selection!**', // The Message When A User Tries To Change Selection
            askerMessage: '**Hey {opponent}, {challenger} Challenged You For A Game Of Rock Paper Scissors!**', // The Ask Message To A Opponent
            cancelMessage: '**Looks Like They Didn\`t Want To Play!**', // The Cancel Message
            timerEndMessage: '**Since The Opponent Didnt Answer, I Ended The Game!**', // The Message When The Time Ends
            drawMessage: '**The Game Ended With a Draw!**', // The Message When The Game Ends With A Draw
            winMessage: '**{winner} Won The Game!**', // The Message When A User Wins
            gameEndMessage: '**The Game Was Unfinished!**', // The End-Game Message
        }).startGame();
    },
});
```

## **🤳 | Outcome**
<img height="350px" width="100%" src="https://i.imgur.com/OXM37w7.png">

## **🎮 | XOP SNAKE GAME**

**Version 12 Function**
```js
const lineReplyNoMention = require('discord-reply') //<----Install To Work!---->
const { XOPSnake } = require("xoppack") //<----Always Define XOPPACK---->
client.on('message', async (message) => {
if (message.content === "snake") {
        new XOPSnake({
            message: message,
            embed: {
                color: '#34b7db', // HEX OR RED, GREEN etc.
                OverTitle: "**Game Over!**", // End-Game Title
            },
            snake: { head: '🔴', body: '🟥', tail: '🔴' }, // Characteristics For The Snake
            emojis: {
                board: '⬛', // Background Emoji
                food: '🍌', // Food To Display
                up: '⬆️', // Up Button
                right: '➡️', // Right Button
                down: '⬇️', // Down Button
                left: '⬅️', // Left Button
            },
            othersuserMessage: '**You Are Not Allowed To Use The Buttons For The Snake Game!**', // Message To Display For Other Users
        }).startGame();
    },
});
```

## **🤳 | Outcome**
<img height="550px" width="100%" src='https://i.imgur.com/5J5dzKh.png'>

<b><p align="left">A Package Owned By <a href="https://github.com/XOPBOT-INC">XOPBOT.INC</a></p></b>
<hr/>
