const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const covid = require('novelcovid');

module.exports = {
    name: 'covid',
    description: "says covid!",
    execute , async (msg, args){
        const covidStats = await covid.all()

        return msg.channel.send(new Disocord.MessageEmbed()
            .setTitle('Covid19 (CORONAVIRUS) Stats')
            .setColor('RANDOM')
            .addFields(
                {name: 'Cases' , value: covidStats.cases.toLocaleString(), inline: true},
                {name: 'Cases Today' , value: covidStats.todayCases.toLocaleString(), inline: true},
                {name: 'Deaths' , value: covidStats.deaths.toLocaleString(), inline: true},
                {name: 'Deaths Today' , value: covidStats.todayDeaths.toLocaleString(), inline: true},
                {name: 'Recovered' , value: covidStats.recovered.toLocaleString(), inline: true},
                {name: 'Recovered Today' , value: covidStats.todayRecovered.toLocaleString(), inline: true},
                {name: 'Active Cases' , value: covidStats.active.toLocaleString(), inline: true},
                {name: 'In Critical Condition' , value: covidStats.critical.toLocaleString(), inline: true},
                {name: 'Total Tests' , value: covidStats.tests.toLocaleString(), inline: true},

            )  
        
        )

        
        
    }
}
