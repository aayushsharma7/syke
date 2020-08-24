const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'av',
    description: "says av!",
    execute: async(msg, args)=> {
        const user = msg.mentions.users.first();
    if (user) {
    let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
    const embed = new Discord.MessageEmbed()
        
   .setTitle(`${user.tag} Avatar`)
  .setDescription(`[Avatar URL of **${user.tag}**](${avatar})`)
  .setColor('RANDOM')
  .setImage(avatar)
  
    msg.channel.send(embed);
} else { 
    
    
    const embed = new Discord.MessageEmbed() 
  .setTitle(`Avatar`)
  .setDescription(msg.author.username, 'Avatar')
  .setColor('RANDOM')
  .setImage(msg.author.displayAvatarURL({size: 4096, dynamic: true}))
 
   msg.channel.send(embed);
}
    }
}
    

