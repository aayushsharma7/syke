const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'kick',
    description: "says kick!",
    execute(msg, args){
        const user = msg.mentions.users.first();
        const member = msg.guild.member(user);

        if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send("**You Do not have Permissions to do this Command**")
        if(!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.channel.send("**I Don not have permission to Kick Members**")


            if (user) {
                

                if (member) {
                    if(member.id === msg.author.id) return msg.channel.send("**Why Would You Want to Kick Yourself **")
                    if(member.roles.highest.position >= msg.member.roles.highest.position || msg.author.id !== msg.guild.owner.id) 
                        return msg.channel.send("**I Can't kick this member due to his role being higher than mine.**")
                    member.kick('You were kicked from the server').then(() => {
                        
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setColor(0xFFFF00)
        .setDescription(`**${user} WAS SUCCESSFULLY KICKED FROM THE SERVER**`)

.setImage('https://i.pinimg.com/originals/51/61/56/5161568c3139718e683d5a2f553b2033.gif')
return msg.channel.send(embed);
                    }).catch(err => {
                        msg.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    msg.reply("That user isn\'t in the guild")
                }
            } else {
                msg.reply('**PLEASE PROVIDE A USER TO KICK!**')
            }

    }
}