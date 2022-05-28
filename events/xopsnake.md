```js
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
                color: '#c30202',
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