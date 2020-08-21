const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
module.exports = {
    name: 'ban',
    description: "says ban!",
    execute(msg, args){
        const user = msg.mentions.users.first();

        if(!msg.member.roles.cache.find(r => r.name === "Owner")&& !msg.member.roles.cache.find(r => r.name === "Admin") && !msg.member.roles.cache.find(r => r.name === "Head Admin")&& !msg.member.roles.cache.find(r => r.name === "Hotel manager")) return msg.channel.send('**YOU DO NOT HAVE THE PERMISSIONS TO DO THAT!**')

        if(user){
            const member = msg.guild.member(user);
        
        
             if (member) {
                 member.ban({ression: 'you were bad!'}).then(() =>{
                    const embed = new Discord.MessageEmbed()
                    .setAuthor(msg.guild.name, msg.guild.iconURL())
                    .setColor(0xFFFF00)
                    
                    .setDescription(`**${user} WAS BANNED FROM THE SERVER**`)
                    
            
            .setImage('https://thumbs.gfycat.com/HairyVelvetyHornbill-size_restricted.gif')
            .setFooter('Good Job')
            
            
            return msg.channel.send(embed);
            

                  })
            }else {
               msg.reply("That user isn\'t in the guild")
            }
        } else {
            msg.reply('**PLEASE PROVIDE A USER TO BAN!**')
        }

        
    }
}