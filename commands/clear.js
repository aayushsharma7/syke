module.exports = {
    name: 'clear',
    description: "says clear!",
    execute(msg, args){
        if (!args[1]) return msg.reply('Error pls define second arg')
            msg.channel.bulkDelete(args[1]);
    }
}