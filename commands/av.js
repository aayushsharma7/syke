const Discord = require('discord.js');
const bot = new Discord.Client()
=;
module.exports = {
    name: 'av',
    description: "says av!",
    execute: async(msg, args)=> {
        let user;
  
  if (msg.mentions.users.first()) {
    user = msg.mentions.users.first();
  } else if (args[0]) {
    user = msg.guild.members.cache.get(args[0]).user;
  } else {
    user = msg.author;
  }
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  const embed = new Discord.MessageEmbed()
        
  .setTitle(`${user.tag} avatar`)
  .setDescription(`[Avatar URL of **${user.tag}**](${avatar})`)
  .setColor('RANDOM')
  .setImage(avatar)
  

    msg.channel.send(embed);
    }
}