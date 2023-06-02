//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const { LINE , sugid } = require('../../json/config.json');

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
const Discord = require('discord.js');


//let sugid = ["991674818720174212","1020087361897517127","1020087827070988319","1020088462847787048"];




//role bt test


module.exports = {
    name: 'ready',
    once: true,
    execute(client) { 

      
client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return

if(sugid.includes(message.channel.id)){
  
   message.delete()
  
let args = message.content.split(',')
  
  let embed = new MessageEmbed()
   .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))

.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))

 .setDescription(`${args}`) 
  
.setColor(message.guild.me.displayColor)

.setTimestamp()

  let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}
  
  message.channel.send({embeds: [embed]}).then(msg => {
 msg.react(`✔️`).then(() => {
 msg.react('❌')
      })
  }).catch((err) => {
   console.log(err.message)
   })
  message.author.send({content: `**<@${message.author.id}>, Thanks for ${message.channel.name} and using ${message.guild.name}**`}).catch((err) => {
   console.log(err.message)
   })
   }
});

    }
};