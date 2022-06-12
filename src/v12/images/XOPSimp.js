const { MessageEmbed } = require("discord.js");
const { lineReply, lineReplyNoMention } = require("discord-reply");
const ms = require("ms");
class XOPSimp {
    constructor(options = {}) {
        if (!options.message) throw new TypeError('Invalid_Message: Please Provide A Message For XOPPACK!')
        if (typeof options.message !== 'object') throw new TypeError('Invalid_Message: Invalid Discord Message Was Provided!')
        if (!options.mention) options.mention = false;
        if (typeof options.mention !== 'boolean') throw new TypeError('Invalid_Mention: Invalid Option Was Provided, Either True Or False!')
        if (!options.embed) options.embed = {};
        if (!options.embed.title) options.embed.title = "Simp";
        if (typeof options.embed.title !== 'string') throw new TypeError('Invalid_Title: Embed Title Must Be A String!')
        if (!options.embed.color) options.embed.color = '#34b7db';
        if (typeof options.embed.color !== 'string') throw new TypeError('Invalid_Color: Embed Color Must Be Hex. c30202 Or RED .etc!')
        this.options = options;
        this.message = options.message;
        this.mention = options.mention;
    }
    async startFunction() {
        if (this.mention === false) {
            const user = this.message.mentions.users.first() || this.message.author;
            const avatar = user.displayAvatarURL({ size: 2048, dynamic: true, format: 'png' })
            const loading = new MessageEmbed()
                .setTitle(this.options.embed.title)
                .setColor(this.options.embed.color)
                .setDescription('**🔁 | Loading Content...**')
                .setTimestamp()
            const embed = new MessageEmbed()
                .setTitle(this.options.embed.title)
                .setColor(this.options.embed.color)
                .setDescription('**[Website](https://xopbot.glitch.me/) | [Package](https://npmjs.com/package/xoppack) | [Bot](https://dsc.gg/xopbot)**')
                .setImage(`https://api.popcat.xyz/simpstamp?image=${avatar}`)
                .setTimestamp()
                .setFooter("XOPPACK©️ | Powered By PopCat", this.message.author.displayAvatarURL({ dynamic: true }))
            const msg = await this.message.lineReplyNoMention({ embed: loading })
            let time = '3s'
            setTimeout(function () {
                msg.edit(embed);
            }, ms(time));
        } else if (this.mention === true) {
            const user = this.message.mentions.users.first() || this.message.author;
            const avatar = user.displayAvatarURL({ size: 2048, dynamic: true, format: 'png' })
            const loading = new MessageEmbed()
                .setTitle(this.options.embed.title)
                .setColor(this.options.embed.color)
                .setDescription('**🔁 | Loading Content...**')
                .setTimestamp()
            const embed = new MessageEmbed()
                .setTitle(this.options.embed.title)
                .setColor(this.options.embed.color)
                .setDescription('**[Website](https://xopbot.glitch.me/) | [Package](https://npmjs.com/package/xoppack) | [Bot](https://dsc.gg/xopbot)**')
                .setImage(`https://api.popcat.xyz/ad?image=${avatar}`)
                .setTimestamp()
                .setFooter("XOPPACK©️ | Powered By PopCat", this.message.author.displayAvatarURL({ dynamic: true }))
            const msg = await this.message.lineReply({ embed: loading })
            let time = '3s'
            setTimeout(function () {
                msg.edit(embed);
            }, ms(time));
        }
    }
}
module.exports = XOPSimp;