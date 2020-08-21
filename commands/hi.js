
const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'hi',
    description: "says hi!",
    execute(msg, args){
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setThumbnail(msg.author.displayAvatarURL())
        .setColor(0xFFFF00)

.setImage('https://st4.depositphotos.com/3746151/25825/v/600/depositphotos_258252830-stock-video-animated-hello-hand-drawn-lettering.jpg')
return msg.channel.send(embed);
        
    }
}