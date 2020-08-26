const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const got = require('got');
const google = require('google');
const covid = require('novelcovid');
const fetch = require('node-fetch');
const querystring = require('querystring');
const giveMeAJoke = require('discord-jokes');
const { inspect } = require('util');
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyDXFBtGGGPm25U63-kI6BRazRmmwmmYiMo");
const queue = new Map();









const ms = require('ms');


const cheerio = require('cheerio');

const request = require('request')





const PREFIX = '?';






function getUserFromMention(mention) {
    
    if (!mention) return; 

    if (mention.startsWith('<@') && mention.endsWith('>')) { 
         mention = mention.slice(2,-1); 

         if (mention.startsWith('!')) { 
              mention = mention.slice(1);
               
         };
    };

    mention = bot.users.cache.get(mention); 

    return mention; 
};
bot.on('ready', () => {
    console.log('This Bot is online!');
    
    setInterval(() => {
        const statuses = [
            ` ?help`,
            
        ]
        const status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status, { type: "WATCHING"})


    }, 5000)
})

const fs = require("fs");
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('guildMemberAdd', async member => {
    

    const channel = member.guild.channels.cache.find(channel => channel.name === "👋-welcome");
    if (!channel) return;

    channel.send(`:wave: Ohayo ${member}\n  Welcome to Obru's Server, Please make sure to check out <#713310905114296392>`)
});
bot.on('guildMemberRemove',  member => {

    const channel = member.guild.channels.cache.find(channel => channel.name === "👋-welcome");
    if (!channel) return;

    channel.send(`Oh no... ${member} just left the server :(\n Maybe it wasn't meant to be....`)
});


bot.on('message', msg => {

    let args = msg.content.substring(PREFIX.length).split(" ");
    if(msg.content.substring(0, PREFIX.length) == PREFIX)

    switch (args[0]) {
        case 'meme':
            bot.commands.get('meme').execute(msg, args);
            break;
        case 'ping':
            bot.commands.get('ping').execute(msg, args);
            break;
        case 'joke':
            bot.commands.get('joke').execute(msg, args);

            
        
            break;
        case 'play':
            bot.commands.get('play').execute(msg, args);
            break;
        

        

        case 'av':
            bot.commands.get('av').execute(msg, args);
            break;
        case 'eval':
            bot.commands.get('eval').execute(msg, args);
            break;

        case 'urban':
            bot.commands.get('urban').execute(msg, args);
            break;

        case 'cal':
            bot.commands.get('cal').execute(msg, args);
            break;
        case 'conv':
            bot.commands.get('conv').execute(msg, args);   
            break;
        case 'google':
            bot.commands.get('google').execute(msg, args);   
            break;    
        case 'covid':
            bot.commands.get('covid').execute(msg, args);   
            break;



        case 'whoareyou':
            
            bot.commands.get('whoareyou').execute(msg, args);
            break;

        case 'image':
            image(msg);
            break;

        
        case 'warn':
            const mentioned = getUserFromMention(args[1]);

            const embed = new Discord.MessageEmbed()
            .setAuthor(msg.guild.name, msg.guild.iconURL())
            .setColor('RANDOM')
            .setDescription("**YOU HAVE BEEN WARNED IN : **" + "‎" + msg.guild.name + "   " + "\n**REASON :** " + "    " +  args[2] + args[3])
            .addField('**WARNED BY**', msg.author.username);
    msg.react('✅');
    return mentioned.send(embed);
    
       break;    
        
                



        case 'react':
            msg.react('💩');
            break;

         
       


        case 'owner':
            bot.commands.get('owner').execute(msg, args);
            break;
            case 'mute':
                if(!msg.member.roles.cache.find(r => r.name === "Owner") && !msg.member.roles.cache.find(r => r.name === "Admin") && !msg.member.roles.cache.find(r => r.name === "Head Admin")) return msg.channel.send('**YOU DO NOT HAVE THE PERMISSIONS TO DO THAT!**')
                var person  = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]));
                if(!person) return  msg.reply("**CANT FIND THE USER**")
     
                let mainrole = msg.guild.roles.cache.find(role => role.name === "Community" && "Admin");
                let role = msg.guild.roles.cache.find(role => role.name === "mute");
               
     
                if(!role) return msg.reply("Couldn't find the mute role.")
     
     
                let time = args[2];
                if(!time){
                    return msg.reply("**You didnt specify time**");
                }
     
                person.roles.remove(mainrole.id)
                person.roles.add(role.id);
     
     
                msg.channel.send(`${person} has now been muted for ${ms(ms(time))}`)
     
                setTimeout(function(){
                   
                    person.roles.add(mainrole.id)
                    person.roles.remove(role.id);
                    console.log(role.id)
                    msg.channel.send(`${person} has been unmuted.`)
                }, ms(time));
     
     
       
            break;
           
        case 'help':
            bot.commands.get('help').execute(msg, args);
            
        break;

        
       
        case 'ban':
            bot.commands.get('ban').execute(msg, args);
            break;


        case 'info':
            if (args[1] === 'version') {
                msg.channel.send('version 1.0.1');
            } 
            break;
        case 'clear':
            bot.commands.get('clear').execute(msg, args);
            break;
        case 'embed':
            bot.commands.get('embed').execute(msg, args);
            break;
        case 'kick':
            bot.commands.get('kick').execute(msg, args);
   
            break;
       

    }
});

function image(msg){
    let args = msg.content.slice(PREFIX.length).split(" ");
    var search  = args.toString();

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
    }
};

request(options, function(error, response, responseBody) {
    if (error) {
        return;
    }


    $ = cheerio.load(responseBody);


    var links = $(".image a.link");

    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
   
    console.log(urls);

    if (!urls.length) {
       
        return;
    }

    
    
    msg.channel.send( urls[Math.floor(Math.random() * urls.length)]);
});



}

bot.login(process.env.token); 