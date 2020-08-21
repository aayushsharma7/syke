
const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
module.exports = {
    name: 'whois',
    description: "says whois!",
    execute(msg, args){
        const user = msg.mentions.users.first()
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setColor(0xFFFF00)

.setImage('https://en.bloggif.com/tmp/3b615aa8e5a7f79a132386fae98f58bf/text.gif?1591443369')
return msg.channel.send(embed);
    }
}