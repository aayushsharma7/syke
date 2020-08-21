
const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'conv',
    description: "says conv!",
    execute(msg, args){
        let firstNumber = Number(args[1]);
        let method = (args[2]);
        if (!method) msg.reply('Please tell the operation');
        if (method=='fahrenheit'){
            let doMath = (firstNumber * 9/5) + 32
            const embed = new Discord.MessageEmbed() 
          .setTitle('Convertor')
          .addField('Output' , `\`\`\`js\n${doMath} F\`\`\``)

         .setColor('RANDOM')
         msg.channel.send(embed);
        }  
        if (method==='celcius'){
            let doMath = (firstNumber - 32) * 5/9
            const embed = new Discord.MessageEmbed() 
          .setTitle('Convertor')
          .addField('Output' , `\`\`\`js\n${doMath} °C\`\`\``)

         .setColor('RANDOM')
         msg.channel.send(embed);
        
        } 

        
      
    }
}