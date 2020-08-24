const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const fetch = require('node-fetch');
const querystring = require('querystring');
const PREFIX = '?';

module.exports = {
    name: 'urban',
    description: "says urban!",
    execute: async (msg, args) => {
     

	if (msg.content.startsWith(`${PREFIX}urban`)) {		
		const searchString = querystring.stringify({ term: args.slice(1).join(" ") })

        if (!args.slice(1).join(" ")) return msg.channel.send(new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`You need to specify something you want to search the urban dictionary`)
        )

        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${searchString}`).then(response => response.json())

        try {
            const [answer] = list

            const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str)

            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`Urban Dictionary`)
                .setDescription(answer.word)
                .setURL(answer.permalink)
                .addFields(
                    { name: 'Definition', value: trim(answer.definition, 1024) },
                    { name: 'Example', value: trim(answer.example, 1024) },
                    
                )
            msg.channel.send(embed)
        } catch (error) {
            console.log(error)
            return msg.channel.send(new Discord.MessageEmbed()
                .setColor("BLUE")
                .setDescription(`No results were found for **${args.slice(1).join(" ")}**`)
            )
        }
    }
        
        


    }


    }