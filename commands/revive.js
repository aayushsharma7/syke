
const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'revive',
    description: "says revive!",
    execute(msg, args){
        const user = msg.mentions.users.first();
        if (!user) return msg.channel.send('**PLEASE PROVIE A USER TO REVIVE!**')
        const embed = new Discord.MessageEmbed()
        
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setColor(0xFFFF00)
        .setDescription(`**${user} WAS REVIVED**\n**U HAVE SUCCESFULLY REMOVED YOUR CRIME**`)



.setImage('https://gifimage.net/wp-content/uploads/2018/11/cat-cpr-gif-3.gif')
return msg.channel.send(embed);
        
        
    }
}