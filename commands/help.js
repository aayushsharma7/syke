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
            .setColor('RANDOM')

            .setDescription('** Bots Global Prefix is `?`\n Available Commands \n Moderation:\n `ban` `kick` `clear` `mute(timed)` `warn`\n  Fun:\n  `meme` `image` `ping` `joke` `urban` \n  Maths : \n `cal` `conv` \n Covid 19 : \n `covid` **  ')
            
            

        msg.author.send(Embed);
        
        
    }
}