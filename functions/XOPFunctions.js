const converter = ['ᴀ', 'ʙ', 'ᴄ', 'ᴅ', 'ᴇ', 'ꜰ', 'ɢ', 'ʜ', 'ɪ', 'ᴊ',
    'ᴋ', 'ʟ', 'ᴍ', 'ɴ', 'ᴏ', 'ᴘ', 'ǫ', 'ʀ', 'ꜱ', 'ᴛ', 'ᴜ', 'ᴠ', 'ᴡ', 'x', 'ʏ', 'ᴢ'];
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const axios = require('axios');
const chalk = require('chalk');
const cheerio = require('cheerio');
const fetch = require('node-fetch');

module.exports = {
    smallCaps: function (text) {
        const content = text.toLowerCase().split('').map(letter => {
            if (/[a-z]/g.test(letter)) {
                var index = letters.indexOf(letter)
                return converter[index];
            } else {
                return letter
            }
        }).join('');
        return content;
    },
    reverseText: function (content) {
        return content.split('').reverse().join('');
    },
    getRandomString: async function (length) {
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += randomChars.charAt(
                Math.floor(Math.random() * randomChars.length),
            );
        }
        return result;
    },
    checkForUpdates: async function () {
        const package = require('../package.json');
        await fetch('https://registry.npmjs.com/xoppack')
            .then((res) => res.json())
            .then((res) => {
                const versions = Object.keys(res.time);
                const vLatest = versions[versions.length - 1];
                if (package.dependencies.weky) {
                    if (res['dist-tags'].latest !== package.dependencies.weky.slice(1)) {
                        const msg = chalk(
                            `New ${chalk.green('Version')} Of ${chalk.yellow(
                                'xoppack',
                            )} Is Available! ${chalk.red(
                                package.dependencies.weky.slice(1),
                            )} --> ${chalk.green(vLatest)}`,
                        );
                        const tip = chalk(
                            `Registry ${chalk.cyan('https://www.npmjs.com/package/xoppack')}`,
                        );
                        const install = chalk(
                            `Run ${chalk.green('npm i xoppack@latest')} To Update!`,
                        );
                        boxConsole([msg, tip, install]);
                    }
                } else if (package.devDependencies.weky) {
                    if (res['dist-tags'].latest !== package.devDependencies.weky.slice(1)) {
                        const msg = chalk(
                            `New ${chalk.green('Version')} Of ${chalk.yellow(
                                'xoppack',
                            )} Is Available! ${chalk.red(
                                package.devDependencies.weky.slice(1),
                            )} --> ${chalk.green(vLatest)}`,
                        );
                        const tip = chalk(
                            `Registry ${chalk.cyan('https://www.npmjs.com/package/xoppack')}`,
                        );
                        const install = chalk(
                            `Run ${chalk.green('npm i xoppack@latest')} To Update!`,
                        );
                        boxConsole([msg, tip, install]);
                    }
                }
            });
    }
}