const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const ytdl = require('ytdl-core');

module.exports = {
    name: 'play',
    description: "says play!",
    execute: async (msg, args) => {
        if(msg.author.bot) return
        const user = msg.mentions.users.first();
        
        const voiceChannel = msg.member.voice.channel
        if(!voiceChannel) return msg.channel.send("You need to be in a voice channel!")
        const permissions = voiceChannel.permissionsFor(msg.bot.user)
        if(!permissions.has('CONNECT')) return msg.channel.send("I DONT HAVE PERMISSION TO JOIN THE VOICECHANNEL")
        if(!permissions.has('SPEAK')) return msg.channel.send("I DONT HAVE PERMISSIONS TO SPEAK IN THIS CHANNEL")

        try{
            var connection = await voiceChannel.join()


        } catch(error){
            console.log(`There was an error connecting to voice channel: ${error}`)
            return msg.channel.send(`There was an error connecting to the voice channel: ${error}`)


        }
        const dispatcher = connection.play(ytdl(arfs[1]))
        .on('finish' , () => {
            voiceChannel.leave()

        })
        .on('error', error =>{
            console.log(error)
        })
        dispatcher.setVolumeLogarithmic(5 / 5)

       } 

       }

