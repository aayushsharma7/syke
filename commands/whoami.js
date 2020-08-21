
const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
module.exports = {
    name: 'whoami',
    description: "says whoami!",
    execute(msg, args){
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setColor(0xFFFF00)

.setImage('https://media1.tenor.com/images/c75adc763c78cc8bf133b38b2edd982d/tenor.gif?itemid=12486791')
return msg.channel.send(embed);
    }
}