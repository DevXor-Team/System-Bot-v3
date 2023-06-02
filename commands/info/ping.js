//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const { Message, Client } = require("discord.js");
const { wtf } = require('../../events/messageCreate.js')
module.exports = {
        name: "ping",
        description: `Test the bots response time.`,
        aliases: [],
         async execute(client, message, args) {
           if(!wtf) return message.reply({ content: `**The bot files have been vandalized and become unusable. Thank you for your understanding 
           تم التخريب في ملفات البوت و اصبح غير صالح للاستخدام شكرا لتفهمك**` });
           
                message.reply({ content: `:ping_pong: **Pong ${client.ws.ping} ms**` });
        },
};