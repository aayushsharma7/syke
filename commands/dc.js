const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const ytdl = require('ytdl-core');


const queue = new Map();
const PREFIX = '?';
module.exports = {
    name: 'dc',
    description: "says dc!",
    execute: async (msg, args) => {
        const voiceChannel = msg.member.voice.channel
        if(!msg.member.voice.channel) return msg.channel.send("You need to be in a voice channel to disconnect ")
        msg.member.voice.channel.leave()
        return msg.channel.send("Disconnected from the voice channel")
        

        
        }
        
            

            
            

        

    }
