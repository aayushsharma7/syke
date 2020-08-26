const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const ytdl = require('ytdl-core');
const queue = new Map();

module.exports = {
    name: 'stop',
    description: "says stop!",
    execute: async (msg, args) => {
        const serverQueue = queue.get(msg.guild.id)
        const song = {
            title: songInfo.title,
            url: songInfo.video_url,
        }
        
        const voiceChannel = msg.member.voice.channel
        

        var connection = await voiceChannel.join()
                queueConstruct.connection = connection
                play(msg.guild, queueConstruct.songs[0])
                
        const dispatcher = serverQueue.connection.play(ytdl(song.url))
                .on('finish' , () => {
                    serverQueue.songs.shift()
                    play(guild.serverQueue.songs[0])
                })
                      


        if(!msg.member.voice.channel) return msg.channel.send("You need to be in a voice channel to stop the music")
        if(!serverQueue) return msg.channel.send("THERE IS NOTHING PLAYING")
        serverQueue.songs = []
        serverQueue.connection.dispatcher.end()
        msg.channel.send("I have stopped the music for you")


        return undefined
        } 

       

}