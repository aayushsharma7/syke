const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'cal',
    description: "says cal!",
    execute(msg, args){
        const operations = ['+' , '-' , '*' , '/'];
        
        let firstNumber = Number(args[1]);
        let method = (args[2]);
        let secondNumber = Number(args[3]);

        if(!method) msg.reply('Please Give Space Between The Numbers!')
    

        if (method === '+'){
            let doMath = firstNumber + secondNumber
            const embed = new Discord.MessageEmbed() 
          .setTitle('Calculator')
          .addField('Input' , `\`\`\`js\n${firstNumber} + ${secondNumber}\`\`\``)
          .addField('Output' , `\`\`\`js\n${doMath}\`\`\``)

         .setColor('RANDOM')
         msg.channel.send(embed);
               
            }       
        if (method === '-'){
            let doMath = firstNumber - secondNumber
            const embed = new Discord.MessageEmbed() 
            .setTitle('Calculator')
            .addField('Input' , `\`\`\`js\n${firstNumber} - ${secondNumber}\`\`\``)
            .addField('Output' , `\`\`\`js\n${doMath}\`\`\``)
  
           .setColor('RANDOM')
           msg.channel.send(embed);
                }       
        if (method === '*'){
            let doMath = firstNumber * secondNumber
            const embed = new Discord.MessageEmbed() 
            .setTitle('Calculator')
            .addField('Input' , `\`\`\`js\n${firstNumber} * ${secondNumber}\`\`\``)
            .addField('Output' , `\`\`\`js\n${doMath}\`\`\``)
  
           .setColor('RANDOM')
           msg.channel.send(embed);
                    }   
                    
         if (method === '/'){
                let doMath = firstNumber / secondNumber
                const embed = new Discord.MessageEmbed() 
                .setTitle('Calculator')
                .addField('Input' , `\`\`\`js\n${firstNumber} / ${secondNumber}\`\`\``)
                .addField('Output' , `\`\`\`js\n${doMath}\`\`\``)
      
               .setColor('RANDOM')
               msg.channel.send(embed);
                        }                   
    }
}