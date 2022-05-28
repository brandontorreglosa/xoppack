import { Guild, GuildMember, Message, User } from 'discord.js';

interface XOPConnect {
    message: Message,
    embed?: {
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

interface XOPSnake {
    message: Message,
    embed?: {
        color?: string,
        OverTitle?: string,
    },
    snake?: { head?: string, body?: string, tail?: string },
    emojis?: {
        board?: string,
        food?: string,
        up?: string,
        right?: string,
        down?: string,
        left?: string,
    },
    othersuserMessage?: string,
}

declare module 'xoppack' {
    export function XOPSnake(options: XOPSnake): void;
}

interface XOPRockPaperScissors {
    message: message,
    opponent: message.mentions.users.first, // message.mentions.users.first()
    embed?: {
        description?: string,
        color?: string,
    },
    buttons?: {
        rock?: string,
        paper?: string,
        scissors?: string,
    },
    othersuserMessage?: string,
    chooseMessage?: string,
    noChangeMessage?: string,
    askerMessage?: string,
    cancelMessage?: string,
    timerEndMessage?: string,
    drawMessage?: string,
    winMessage?: string,
    gameEndMessage?: string,
}

declare module 'xoppack' {
    export function XOPRockPaperScissors(options: XOPRockPaperScissors): void;
}