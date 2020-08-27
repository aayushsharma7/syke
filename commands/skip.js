const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const ytdl = require('ytdl-core');


const queue = new Map();
const PREFIX = '?';
module.exports = {
    name: 'skip',
    description: "says skip!",
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
        
            

            
            if(!msg.member.voice.channel) return msg.channel.send("You need to be in a voice channel to skip")
                if(!serverQueue) return msg.channel.send("There is nothing playing")
                serverQueue.connection.dispatcher.end()
                msg.channel.send("Skipped the song")
                return undefined


        

    }
}