const { MessageEmbed } = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')
const choice = { r: '🌑', p: '📃', s: '✂️' };
const lineReplyNoMention = require('discord-reply');
class XOPRPSGame {
    constructor(options = {}) {
        if (!options.message) throw new TypeError('NO_MESSAGE: Please Provide A message arguement')
        if (typeof options.message !== 'object') throw new TypeError('INVALID_MESSAGE: Invalid Discord Message object was provided.')
        if (!options.opponent) throw new TypeError('NO_OPPONENT: Please provide an opponent arguement')
        if (typeof options.opponent !== 'object') throw new TypeError('INVALID_OPPONENT: Invalid Discord User object was provided.')
        if (!options.embed) options.embed = {};
        if (!options.embed.title) options.embed.title = 'Rock Paper Scissors';
        if (typeof options.embed.title !== 'string') throw new TypeError('INVALID_TITLE: Embed Title must be a string.')
        if (!options.embed.description) options.embed.description = 'Press a button below to make a choice!';
        if (typeof options.embed.description !== 'string') throw new TypeError('INVALID_TITLE: Embed Title must be a string.')
        if (!options.embed.color) options.embed.color = '#5865f2';
        if (typeof options.embed.color !== 'string') throw new TypeError('INVALID_COLOR: Embed Color must be a string.')
        if (!options.buttons) options.buttons = {};
        if (!options.buttons.rock) options.buttons.rock = 'Rock';
        if (typeof options.buttons.rock !== 'string') throw new TypeError('INVALID_BUTTON: Rock Button must be a string.')
        if (!options.buttons.paper) options.buttons.paper = 'Paper';
        if (typeof options.buttons.paper !== 'string') throw new TypeError('INVALID_BUTTON: Paper Button must be a string.')
        if (!options.buttons.scissors) options.buttons.scissors = 'Scissors';
        if (typeof options.buttons.scissors !== 'string') throw new TypeError('INVALID_BUTTON: Scissors Button must be a string.')
        if (!options.askerMessage) options.askerMessage = 'Hey {opponent}, {challenger} challenged you for a game of Rock Paper Scissors!';
        if (typeof options.askerMessage !== 'string') throw new TypeError('ASK_MESSAGE: Ask Message must be a string.')
        if (!options.cancelMessage) options.cancelMessage = 'Looks like they refused to have a game of Rock Paper Scissors. \:(';
        if (typeof options.cancelMessage !== 'string') throw new TypeError('CANCEL_MESSAGE: Cancel Message must be a string.')
        if (!options.timerEndMessage) options.timerEndMessage = 'Since the opponent didnt answer, i dropped the game!';
        if (typeof options.timerEndMessage !== 'string') throw new TypeError('TIME_END_MESSAGE: Time End Message must be a string.')
        if (!options.othersuserMessage) options.othersuserMessage = 'You are not allowed to use buttons for this message!';
        if (typeof options.othersuserMessage !== 'string') throw new TypeError('INVALID_OTHERS_MESSAGE: Others Message must be a string.')
        if (!options.chooseMessage) options.chooseMessage = 'You choose {emoji}!';
        if (typeof options.chooseMessage !== 'string') throw new TypeError('INVALID_CHOOSE_MESSAGE: Choose Message must be a string.')
        if (!options.noChangeMessage) options.noChangeMessage = 'You cannot change your selection!';
        if (typeof options.noChangeMessage !== 'string') throw new TypeError('INVALID_NOCHANGE_MESSAGE: noChange Message must be a string.')
        if (!options.gameEndMessage) options.gameEndMessage = 'The game went unfinished :(';
        if (typeof options.gameEndMessage !== 'string') throw new TypeError('GAME_END_MESSAGE: Game End Message must be a string.')
        if (!options.winMessage) options.winMessage = '{winner} won the game!';
        if (typeof options.winMessage !== 'string') throw new TypeError('WIN_MESSAGE: Win Message must be a string.')
        if (!options.drawMessage) options.drawMessage = 'It was a draw!';
        if (typeof options.drawMessage !== 'string') throw new TypeError('DRAW_MESSAGE: Draw Message must be a string.')

        this.inGame = false;
        this.options = options;
        this.opponent = options.opponent;
        this.message = options.message;
    }

    async startGame() {
        if (this.inGame) return;
        const author = this.message.author;
        const opponent = this.opponent;
        const emoji = this.options.emoji ? this.options.emoji : '';

        if (opponent.bot) return this.message.lineReplyNoMention(`**${emoji} Sorry But You Cant Play With Bots!**`)
        if (opponent.id === author.id) return this.message.lineReplyNoMention(`**${emoji} Are You Alright? You Can Not Play With Yourself!**`)

        const embed = new MessageEmbed()
            .setTitle(this.options.embed.title)
            .setDescription(this.options.askerMessage
                .replace('{challenger}', this.message.author)
                .replace('{opponent}', this.opponent))
            .setColor(this.options.embed.color)
            .setFooter('XOPPACK©', this.message.author.displayAvatarURL({ dynamic: true }))

        let btn1 = new MessageButton().setLabel('Accept').setStyle('green').setID('accept')
        let btn2 = new MessageButton().setLabel('Reject').setStyle('red').setID('reject')
        let row = new MessageActionRow().addComponents(btn1, btn2)
        const askMsg = await this.message.channel.send({ embed: embed, components: [row] });

        const filter = m => m.clicker.user.id === this.opponent.id;
        const interaction = await askMsg.createButtonCollector(filter, {
            time: 60000,  // 60 seconds
        })

        interaction.on('collect', async btn => {
            await btn.reply.defer()

            if (btn.id === 'reject') {
                for (let y = 0; y < askMsg.components[0].components.length; y++) {
                    askMsg.components[0].components[y].disabled = true;
                }
                askMsg.embeds[0].description = this.options.cancelMessage.replace('{opponent}', this.opponent).replace('{challenger}', this.message.author)
                return askMsg.edit({ embed: askMsg.embeds[0], components: askMsg.components });

            } else if (btn.id === 'accept') {
                askMsg.delete().catch();
                this.RPSGame();
            }
        })

        interaction.on("end", async (c, r) => {
            if (r === 'messageDelete') return;
            for (let y = 0; y < askMsg.components[0].components.length; y++) {
                askMsg.components[0].components[y].disabled = true;
            }

            askMsg.embeds[0].description = this.options.timerEndMessage.replace('{opponent}', this.opponent).replace('{challenger}', this.message.author);
            return askMsg.edit({ embed: askMsg.embeds[0], components: askMsg.components });
        })
    }

    async RPSGame() {
        this.inGame = true;

        let btn_a1 = 'r_' + i(15)
        let btn_a2 = 'p_' + i(15)
        let btn_a3 = 's_' + i(15)

        const embed = new MessageEmbed()
            .setTimestamp()
            .setTitle(this.options.embed.title)
            .setDescription(this.options.embed.description)
            .setColor(this.options.embed.color)
            .setFooter('XOPPACK©', this.message.author.displayAvatarURL({ dynamic: true }))

        let rock = new MessageButton().setID(btn_a1).setStyle("green").setLabel(this.options.buttons.rock).setEmoji('🌑')
        let paper = new MessageButton().setID(btn_a2).setStyle("blurple").setLabel(this.options.buttons.paper).setEmoji('📃')
        let scissors = new MessageButton().setID(btn_a3).setStyle("red").setLabel(this.options.buttons.scissors).setEmoji('✂️')

        const msg = await this.message.channel.send({
            embed: embed, components: [
                {
                    type: 1, components: [rock, paper, scissors]
                },
            ]
        })

        let challenger_choice;
        let opponent_choice;
        const filter = m => m;
        const collector = msg.createButtonCollector(filter, {
            time: 120000, // 120 seconds
        })

        collector.on('collect', async btn => {
            if (btn.clicker.user.id !== this.message.author.id && btn.clicker.user.id !== this.opponent.id) {
                return btn.reply.send(this.options.othersuserMessage, true)
            }

            if (btn.clicker.user.id == this.message.author.id) {
                if (challenger_choice) {
                    return btn.reply.send(this.options.noChangeMessage, true)
                }
                challenger_choice = choice[btn.id.split('_')[0]];

                btn.reply.send(this.options.chooseMessage.replace('{emoji}', challenger_choice), true)

                if (challenger_choice && opponent_choice) {
                    collector.stop()
                    this.getResult(msg, challenger_choice, opponent_choice)
                }
            }
            else if (btn.clicker.user.id == this.opponent.id) {
                if (opponent_choice) {
                    return btn.reply.send(this.options.noChangeMessage, true)
                }
                opponent_choice = choice[btn.id.split('_')[0]];

                btn.reply.send(this.options.chooseMessage.replace('{emoji}', opponent_choice), true)

                if (challenger_choice && opponent_choice) {
                    collector.stop()
                    this.getResult(msg, challenger_choice, opponent_choice)
                }
            }
        })

        collector.on("end", async (c, r) => {
            if (r === 'time' && this.inGame == true) {
                const endEmbed = new MessageEmbed()
                    .setTitle(this.options.embed.title)
                    .setColor(this.options.embed.color)
                    .setDescription(this.options.gameEndMessage)
                    .setFooter('XOPPACK©', this.message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()

                for (let x = 0; x < msg.components.length; x++) {
                    for (let y = 0; y < msg.components[x].components.length; y++) {
                        msg.components[x].components[y].disabled = true;
                    }
                }
                return msg.edit({ embed: endEmbed, components: msg.components })
            }
        })
    }

    getResult(msg, challenger, opponent) {
        let result;

        if (challenger === opponent) {
            result = this.options.drawMessage;
        } else if (
            (opponent === '✂️' && challenger === '📃') ||
            (opponent === '🌑' && challenger === '✂️') ||
            (opponent === '📃' && challenger === '🌑')
        ) {
            result = this.options.winMessage.replace('{winner}', this.opponent)
        } else {
            result = this.options.winMessage.replace('{winner}', this.message.author)
        }

        const finalEmbed = new MessageEmbed()
            .setTitle(this.options.embed.title)
            .setColor(this.options.embed.color)
            .setDescription(result)
            .setFooter('XOPPACK©', this.message.author.displayAvatarURL({ dynamic: true }))
            .addField(this.message.author.username, challenger, true)
            .addField(this.opponent.username, opponent, true)
            .setTimestamp()

        for (let x = 0; x < msg.components.length; x++) {
            for (let y = 0; y < msg.components[x].components.length; y++) {
                msg.components[x].components[y].disabled = true;
            }
        }

        return msg.edit({ embed: finalEmbed, components: msg.components })
    }
}

module.exports = XOPRPSGame;

function i(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }
    return result;
}