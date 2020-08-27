const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'kick',
    description: "says kick!",
    execute(msg, args){
        const user = msg.mentions.users.first();

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You Don't have Permissions to do this Command**")
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("**I Don't have permission to Kick Members**")


            if (user) {
                const member = msg.guild.member(user);

                if (member) {
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