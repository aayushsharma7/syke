
const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'kill',
    description: "says kill!",
    execute(msg, args){
        
        
        const user = msg.mentions.users.first();
        if (!user) return msg.channel.send('**PLEASE PROVIE A USER TO KILL!**')
        const embed = new Discord.MessageEmbed()
        
        
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setColor(0xFFFF00)
        .setDescription(`**${user} WAS SHOT IN THE NUTS** \n  **TYPE ?revive(user) TO UNDO YOUR CRIME**`)

.setImage('https://i.gifer.com/1p6p.gif')
return msg.channel.send(embed);
        
        
    }
}