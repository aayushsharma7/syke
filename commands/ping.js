const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'ping',
    description: "says ping!",
    execute(msg, args){
        msg.channel.send("***Pinging...***").then(m =>{
            
              var ping = m.createdTimestamp - msg.createdTimestamp;
  
            
              var embed = new Discord.MessageEmbed()
              .setDescription(`🏓 Your Ping Is -\n \`\`\`js\n\n${ping} ms\`\`\``)
              .setColor('RANDOM')
              
              
              m.edit(embed)
          });
      
    
       

        
    }
}