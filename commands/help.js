const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '?';

module.exports = {
    name: 'help',
    aliases: ['h'],
    description: "says help!",
    execute(msg, args){
        msg.channel.send('**Message Has Been Sent to You In DMs!**');
        const Embed = new Discord.MessageEmbed()
             
            .setAuthor(`${msg.guild.me.displayName}`, msg.guild.iconURL())
            .setThumbnail(msg.author.displayAvatarURL())
            .setTitle('SYKE HELP')
            .setColor(0xFF0000)
            .setImage('https://live.staticflickr.com/65535/49976767706_50ac2a3d15_c_d.jpg')
            .setDescription('**These Are the Available Commands For Syke\n Bots Global Prefix is `?`\n\n Moderation:\n `ban` `kick` `clear` `mute(timed)` `warn`\n  Fun:\n  `meme` `embed` `youtube` `owner` `react` `image` `dumb` `ping` \n  Maths : \n `cal` `conv` **  ')
            .setFooter('More Commands coming soon :)');
            

        msg.author.send(Embed);
        
        
    }
}