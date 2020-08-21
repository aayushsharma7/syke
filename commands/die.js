const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'die',
    description: "says die!",
    execute(msg, args){
        const user = msg.mentions.users.first();
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setColor(0xFFFF00)
        .setDescription(`**YOU COMMITTED SUICIDE\nRIP\n TYPE ?rebirth TO GET A SECOND CHANCE TO LIVE\n(IF YOU WANT TO ONE)**`)

.setImage('https://media.giphy.com/media/QNGtIbsXz88V2/giphy.gif')
return msg.channel.send(embed);
        
        
    }
}