const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'dumb',
    description: "says dumb!",
    execute(msg, args){
        const user = msg.mentions.users.first();
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setColor(0xFFFF00)
        .setDescription(`**SEEMS LIKE ${user} HAS FLUSHED THEIR BRAIN IN THE TOILET**`)

.setImage('https://media.tenor.com/images/3a4cbe11196151fd2db0d5d9602aa7e7/tenor.gif')
return msg.channel.send(embed);
        
        
    }
}