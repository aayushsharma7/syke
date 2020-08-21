const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
    name: 'av',
    description: "says av!",
    execute(msg, args){
        const embed = new Discord.MessageEmbed()
        .setTitle('Avatar')
        .setAuthor(msg.author.username)
        .setColor('RANDOM')
        .setImage(msg.author.displayAvatarURL())

    msg.channel.send(embed);
    }
}