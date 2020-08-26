const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const ytdl = require('ytdl-core');

module.exports = {
    name: 'stop',
    description: "says stop!",
    execute: async (msg, args) => {
        
        const voiceChannel = msg.member.voice.channel
        if(!msg.member.voice.channel) return msg.channel.send("You need to be in a voice channel to stop the music")
        msg.member.voice.channel.leave()
        return msg.channel.send("LEFT THE VOICE CHANNEL")
        

       } 

       

}