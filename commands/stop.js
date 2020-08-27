const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const ytdl = require('ytdl-core');


const queue = new Map();
const PREFIX = '?';
module.exports = {
    name: 'stop',
    description: "says stop!",
    execute: async (msg, args) => {
        const voiceChannel = msg.member.voice.channel
        const serverQueue = queue.get(msg.guild.id)
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true,
        }
        
            

            const song = {
                title: songInfo.videoDetails.title,
                url: songInfo.videoDetails.video_url, 
            }

        if(!msg.member.voice.channel) return msg.channel.send("You need to be in a voice channel to stop the music")
        if(!serverQueue) return msg.channel.send("THERE IS NOTHING PLAYING")
        serverQueue.songs = []
        serverQueue.connection.dispatcher.end()
        msg.channel.send("I have stopped the music for you")
        return undefined

            
            
        


    }
}
