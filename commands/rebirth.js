const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'rebirth',
    description: "says rebirth!",
    execute(msg, args){
        const user = msg.mentions.users.first();
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setColor(0xFFFF00)
        .setDescription(`**YOU HAVE BEEN GRANTED A SECOND CHANCE TO LIVE\n**`)

.setImage('https://media.giphy.com/media/OhMGy3vXVf9wA/giphy.gif')
return msg.channel.send(embed);
        
        
    }
}