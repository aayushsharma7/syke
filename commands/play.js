const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const ytdl = require('ytdl-core');


const queue = new Map();
const PREFIX = '?';

module.exports = {
    name: 'play',
    description: "says play!",
    execute: async (msg, args) => {

        if(msg.author.bot) return
        const serverQueue = queue.get(msg.guild.id)

        const voiceChannel = msg.member.voice.channel
        if(!voiceChannel) return msg.channel.send("You need to be in a voice channel!")
        const permissions = voiceChannel.permissionsFor(msg.client.user)
        if(!permissions.has('CONNECT')) return msg.channel.send("I DONT HAVE PERMISSION TO JOIN THE VOICECHANNEL")
        if(!permissions.has('SPEAK')) return msg.channel.send("I DONT HAVE PERMISSIONS TO SPEAK IN THIS CHANNEL")

        const songInfo = await ytdl.getInfo(args[1])
        const song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,  
        }

        if(!serverQueue){
            const queueConstruct = {
                textChannel: msg.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true,
            }
            queue.set(msg.guild.id, queueConstruct)
            queueConstruct.songs.push(song)

            try{
                var connection = await voiceChannel.join()
                queueConstruct.connection = connection
                play(msg.guild, queueConstruct.songs[0])
                
            } catch(error){
                console.log(`There was an error connecting to voice channel: ${error}`)
                queue.delete(msg.guild.id)
                return msg.channel.send(`There was an error connecting to the voice channel: ${error}`)
                 
            } 

        } else{
            serverQueue.songs.push(song)
            return msg.channel.send(`**${song.title}** has been added to the queue`)
        }
        return undefined
} 

}
        function play(song, guild){
           const serverQueue = queue.get(guild.id)
           console.log(serverQueue)

           if(!song){
               serverQueue.voiceChannel.leave()
               queue.delete(guild.id)
               return
           }
           const dispatcher = serverQueue.connection.play(ytdl(song.url))
        .on('finish' , () => {
            serverQueue.songs.shift()
            play(guild.serverQueue.songs[0])


        })
        .on('error', error =>{
            console.log(error)
        })
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5)
       }
    
    
