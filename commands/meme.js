const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const got = require('got');
module.exports = {
    name: 'meme',
    description: "says meme!",
    execute(msg, args){
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/dankmemes/random/.json').then(response => {
        let content = JSON.parse(response.body);

            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`🔺 ${memeUpvotes} 🔻 ${memeDownvotes} 💬 ${memeNumComments}`)
            msg.channel.send(embed);

        


        
        
    })
}
}