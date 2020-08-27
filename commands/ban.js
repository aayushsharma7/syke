const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
module.exports = {
    name: 'ban',
    description: "says ban!",
    execute(msg, args){
        const user = msg.mentions.users.first();
        const member = msg.guild.member(user);

        if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("**You Do not have Permissions to do this Command**")
        if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.send("**I Don not have permission to Kick Members**")
        
        if(user){
            
        
        
             if (member) {
                if(member.id === msg.author.id) return msg.channel.send("**Why Would You Want to Ban Yourself **")
                if(member.roles.highest.position >= msg.member.roles.highest.position || msg.author.id !== msg.guild.owner.id)
                return msg.channel.send("**I Can't ban this member due to his role being higher than mine.**")

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