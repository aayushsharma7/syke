const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const { inspect } = require('util');


module.exports = {
    name: 'eval',
    description: "says eval!",
    execute(msg, args){
        const command = args.slice(1).join(" ")

        if(msg.author.id !== "335432353650442240") return msg.channel.send("You Do Not Have Permissins!")
        if(!command) return msg.channel.send("Specify something to eval!")

        try {
            const evaled = eval(command)
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Evaluated')
            .addField(`To Eval`, `\`\`\`${command}\`\`\``)
            .addField(`Evaled`, `\`\`\`js\n${inspect(evaled, { depth: 0})}\`\`\``)
            .addField(`Type Of`, `\`\`\` ${typeof(evaled)}\`\`\``)
            msg.channel.send(embed)
        } catch (error) {
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error')
            .addField('Error', `${error}`)
            msg.channel.send(embed)

        }


            
        

        
    
       

      
    }
}