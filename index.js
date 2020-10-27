const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => { bot.user.setGame('say !help') });
bot.on('message', (message) => {
        
   const swearWords = ["anjg", "bgst", "tai", "kntl", "anjing", "kontol", "bangsat", "titit", "goblok", "ngentot", "tolol", "tot"];
    if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
     message.reply("Tiati omongannya y!");
     } 
        
     if(message.content == '!check_bot') {
        message.channel.sendMessage('DB BOT IS ONLINE !\nVer. 3.1');
     }

});

bot.login(process.env.BOT_TOKEN);
