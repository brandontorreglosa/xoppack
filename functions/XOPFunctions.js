const converter = ['ᴀ', 'ʙ', 'ᴄ', 'ᴅ', 'ᴇ', 'ꜰ', 'ɢ', 'ʜ', 'ɪ', 'ᴊ', 'ᴋ', 'ʟ', 'ᴍ', 'ɴ', 'ᴏ', 'ᴘ', 'ǫ', 'ʀ', 'ꜱ', 'ᴛ', 'ᴜ', 'ᴠ', 'ᴡ', 'x', 'ʏ', 'ᴢ'];
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const chalk = require('chalk');
const fetch = require('node-fetch');
module.exports = {
    smallCaps: function(text) {
        const content = text.toLowerCase().split('').map(letter => {
            if (/[a-z]/g.test(letter)) {
                var index = letters.indexOf(letter)
                return converter[index];
            } else { return letter }
        }).join('');
        return content;
    },
    reverseText: function(content) { return content.split('').reverse().join(''); },
    getRandomString: async function(length) {
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) { result += randomChars.charAt(Math.floor(Math.random() * randomChars.length), ); }
        return result;
    },
}