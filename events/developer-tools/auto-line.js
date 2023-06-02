//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const { LINE,AUTOLINECHANNEL } = require('../../json/config.json');
const {
        MessageEmbed,
        Permissions,
        MessageAttachment,
        utils,
        Utils,
        MessageActionRow,
        MessageSelectMenu,
        MessageButton,
        Collection,
        ButtonInteraction,
        ColorResolvable,
        CommandInteraction,
        EmojiResolvable,
        Message,
        MessageReaction,
        TextChannel,
        User,
        MessageButtonStyle,
        GuildMember,
        WebhookClient,
        Client,
        Intents
} = require('discord.js');

//let lineid =  ["991677740648505406","1015027163914850425","991684194294038588"];


module.exports = {
    name: 'ready',
    once: true,
    execute(client) { 

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(AUTOLINECHANNEL.includes(message.channel.id)){ 
 let args = message.content.split(',')
  message.channel.send(LINE).catch((err) => {
   console.log(err.message)
   })
   }
});

      
    }
};