require("dotenv").config();
const ms = require("ms");
const {
    XOPSnake, XOPBlur, XOPAD, XOPClown, XOPDOF, XOPDrip, XOPGrave, XOPGun, XOPHeaven, XOPIAS, XOPMNM, XOPPET, XOPSimp, XOPStonks, XOPTABFLIP, XOPWPFP, XOPWanted
} = require("../index");
const { MessageEmbed } = require("discord.js");
const { Client, Collection, Intents, DiscordAPIError } = require("discord.js");
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTIONS"],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_BANS],
});
client.on("ready", () => {
    console.log("XOPBOT 2 Is Up And Working!")
    client.user.setPresence({ status: 'idle' })
    const activities = [
        `${client.guilds.cache.size} Servers`,
        `${client.channels.cache.size} Channels`,
        `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users`,
        '👑HACKERPROᵈᵉᵛ#1498 Made This Bot',
        'https://xopbot.glitch.me/',
        'Version 1.2.3',
        '24/7 Uptime'
    ];
    let i = 0;
    setInterval(() => client.user.setActivity(`x2!help | ${activities[i++ % activities.length]}`, { type: 'PLAYING' }), 10000);
});
client.on('message', async (message) => {
    if (message.author.bot || message.channel.type === 'dm') return;
    if (message.content === "test_games") {
        new XOPSnake({
            message: message,
            embed: {
                color: `PURPLE`,
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
    } else if (message.content === "test_images") {
        new XOPBlur({
            message: message,
            mention: true,
            embed: {
                color: `PURPLE`,
                title: "Blur"
            }
        }).startFunction();
        new XOPAD({
            message: message,
            mention: true,
            embed: {
                color: `PURPLE`,
                title: "AD"
            }
        }).startFunction();
        new XOPClown({
            message: message,
            mention: true,
            embed: {
                color: `PURPLE`,
                title: "Clown"
            }
        }).startFunction();
        new XOPDrip({
            message: message,
            mention: true,
            embed: {
                color: `PURPLE`,
                title: "Drip"
            }
        }).startFunction();
    }
});
client.login(process.env.Prefix);