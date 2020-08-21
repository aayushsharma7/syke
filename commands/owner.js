
const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'owner',
    description: "says owner!",
    execute(msg, args){
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL())
.setDescription('**The owner of the bot is _H乇DRIE#7497\nFeel free to contact him if any query**\n **Thx for the using the bot**')
.setColor(0xFFFF00)
.setThumbnail(msg.author.displayAvatarURL())
.setImage('https://img.freepik.com/free-vector/thank-you-lettering-with-curls_1262-6964.jpg?size=626&ext=jpg')
return msg.channel.send(embed);
    }
}