const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
    name: 'embed',
    description: "says embed!",
    execute(msg, args){
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setTitle('Player Information')
        .addField('Player Name', msg.author.username)
        .addField('Version', '1.0.1')
        .addField('Current Serrver', msg.guild.name)
        .setColor(0xFFFF00)
        .setThumbnail(msg.author.displayAvatarURL())
        .setFooter('Subscribe to Hedrie');

    msg.channel.send(embed);
    }
}