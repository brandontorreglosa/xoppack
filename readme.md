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

- Now Supports Discord.js v12 and v13 very soon 🥳

## **📤 | Update**
```js
npm i xoppack@latest
```

- Updates Your Package Version To The Latest (ex. v2 > v3)
<br/>

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
<img width="100%" src="https://i.imgur.com/4jQBA5U.png">

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

## **📯 | Announcments**
<code>V1.4.8-bfix / V1.4.9</code> 
<p><strong>Major Update:</strong><br/>
We Removed The Ability To Name A Embed As It Created Errors Wth The Package.<br/>Instead We Recommend To Change A Embed Title Manuallly By Going In The <code>Node_Modules</code></p>
<code>V1.5.0</code>
<p><strong>Huge Update:</strong><br/>
We Have Made Various Changes In The Package, Of Which None Have Affected The Constructor In To Need Of Changing Options. Although They Have Affected Only The Source.<br/>To Be More Specific We Have Changed Folders And Functions Of Each Constructor.<br/>Example:
&nbsp;<code>lib</code>&nbsp;to&nbsp;<code>src</code>&nbsp;,&nbsp;<code>examples</code>&nbsp;to&nbsp;<code>events</code>&nbsp;,&nbsp;<code>xoptypes</code>&nbsp;to&nbsp;<code>typescript</code> and more...</p>
<code>V1.5.1</code>
<p><strong>Very Huge Update:</strong><br/>
We Are Gonna Be Welcoming Discord.jsV13 Constructors By The End Of June With Better Functions, New Colors And More... Even Better You Can Now Try The Loading Function In Your Own Bot, Just Update To This Better Version.</p>
<code>V1.5.2</code>
<p><strong>Mega Huge Update:</strong><br/>
We Finally Are Going To Support Discord.jsV13, It Took Us Some Months To Decide, But We're Making It Possible, We Fixed All Mistakes Done From Previous V13 Versions And You Should Expect It By The End Of June 😀
</p>
<code>v3.2.5</code>
<p><strong>Ultra Huge Update:
We Have Added Over 16 Images To Use By Installing Our Pack. We Also Updated V12 Functions For Better Speed And Design, Mostly We Fixed Bugs With The Previous Version And Now Works Since We Got Our Testing Bot Finally Active 😂. AH, Just So You Know The Images Display The Icon Of Only The Author, In The Next Update We Will Be Fixing That But For Now Have Fun Using This Big Version.</strong></p>

## **👥 | Discord Server**
You Can Visit The [Issues](https://github.com/HACKERPROTM/xoppack/issues) Page Of XOPPACK To Report [Bugs](https://github.com/HACKERPROTM/xoppack/issues) Or [Errors](https://github.com/HACKERPROTM/xoppack/issues) Found! 
Also Dont Be Afraid To Ping Me 'Once' On My [Server](https://discord.gg/invite/dPXTa2XERS) Just Click The Image And It Will Send You To The Server ⏬

<a href="https://discord.gg/invite/dPXTa2XERS"><img height="500px" width="100%" src="https://discord.com/api/guilds/707557478254247936/widget.png?style=banner4" alt="Discord"></a>

<b><p align="left">A Package Owned By <a href="https://github.com/XOPBOT-INC">XOPBOT.INC</a></p></b>
<hr/>
<h2>Please Make Sure To 🌟 And 🍴 The Repository!</h2>