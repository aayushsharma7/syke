const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'whoareyou',
    description: "says whoareyou!",
    execute(msg, args){
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setColor(0xFFFF00)
        

.setImage('https://mrwgifs.com/wp-content/uploads/2013/10/Syke-Reaction-Gif-On-Game-Of-Thrones-Bad-Lip-Reading.gif')
return msg.channel.send(embed);
        
        
    }
}