import { Guild, GuildMember, Message, User } from 'discord.js';

interface XOPConnect {
    message: Message,
    embed?: {
        title?: string;
        color?: string;
    },
    emojis: {
        player1?: string;
        player2?: string;
    },
    turnMessage?: string;
    winMessage?: string;
    gameEndMessage?: string;
    drawMessage?: string;
    askerMessage?: string;
    cancelMessage?: string;
    timerEndMessage?: string;
}

declare module 'xoppack' {
    export function XOPConnect4(options: XOPConnect): void;
}