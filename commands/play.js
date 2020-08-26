const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const ytdl = require('ytdl-core');
const Youtube = require('simple-youtube-api');
const youtube = new Youtube("AIzaSyDXFBtGGGPm25U63-kI6BRazRmmwmmYiMo")

module.exports = {
    name: 'play',
    description: "says play!",
    execute: async (msg, args) => {
        if(msg.author.bot) return
        const searchString = args.slice(1).join(' ')
        const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

        
        
        const voiceChannel = msg.member.voice.channel
        if(!voiceChannel) return msg.channel.send("You need to be in a voice channel!")
        const permissions = voiceChannel.permissionsFor(msg.client.user)
        if(!permissions.has('CONNECT')) return msg.channel.send("I DONT HAVE PERMISSION TO JOIN THE VOICECHANNEL")
        if(!permissions.has('SPEAK')) return msg.channel.send("I DONT HAVE PERMISSIONS TO SPEAK IN THIS CHANNEL")
        
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();

            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, message, channel, true);
            }
            return message.channel.send(`**Playlist \`${playlist.title}\` has been added to the queue!**`);
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 1);
                    var video = await youtube.getVideoByID(videos[0].id);
                } catch (err) {
                    console.error(err)
                    return message.channel.send('❌ **No Matches!**')
                }
            }

       
        

        const song = {
            id: video.id,
            title: video.title,
            url: `https://www.youtube.com/watch?v=${video.id}`
        }

        try{
            var connection = await voiceChannel.join()


        } catch(error){
            console.log(`There was an error connecting to voice channel: ${error}`)
            return msg.channel.send(`There was an error connecting to the voice channel: ${error}`)


        }
        const dispatcher = connection.play(ytdl(args[1]))
        .on('finish' , () => {
            voiceChannel.leave()

        })
        .on('error', error =>{
            console.log(error)
        })
        dispatcher.setVolumeLogarithmic(5 / 5)

       } 

       }

    }
