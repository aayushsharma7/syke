
const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'youtube',
    description: "says youtube!",
    execute(msg, args){
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL())
.setDescription('**OWNER\'S YOUTUBE CHANNEL IS :** https://www.youtube.com/channel/UCaTwt4Aq_1RYeW2hjbdyYJQ')
.setColor(0xFFFF00)
.setImage('https://live.staticflickr.com/65535/49976046478_06296c0737_c_d.jpg')
.setThumbnail(msg.author.displayAvatarURL())
.setFooter('Subscribe if you like the content')
return msg.channel.send(embed);

        
    }
}