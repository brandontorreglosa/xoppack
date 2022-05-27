require("dotenv").config();
const ms = require("ms");
const { MessageEmbed } = require("discord.js");
const { Client, Collection, Intents, DiscordAPIError } = require("discord.js");
const lineReplyNoMention = require("discord-reply");
const color = process.env.Color;
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
client.on('message', async(message) => {
    if (message.author.bot || message.channel.type === 'dm') return;
    if (message.content === "x2!help") {
        let e1 = new MessageEmbed().setColor(`${color}`).setDescription("Loading...")
        let e2 = new MessageEmbed().setTimestamp().setTitle("Help Menu").setColor(`${color}`).setDescription("No commands yet 😞").setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        let msg = await message.channel.send({ embed: e1 });
        let time = "3s"
        setTimeout(function() {
            msg.edit(e2);
        }, ms(time));
    }
});
client.login(process.env.Prefix);