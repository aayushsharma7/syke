const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const giveMeAJoke = require('discord-jokes');

module.exports = {
    name: 'joke',
    description: "says joke!",
    execute(msg, args){
        giveMeAJoke.getRandomDadJoke (function(joke){
            const embed = new Discord.MessageEmbed()
            .setTitle("Joke")           
            .setColor('RANDOM')
            .setDescription(joke)

            msg.channel.send(embed)


        })
    
        
      
    
       

        
    }
}