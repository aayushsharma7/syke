
module.exports = {
    name: 'mute',
    description: "says mute!",
    execute(msg, args){
        var person  = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]));
            if(!person) return  msg.reply("I CANT FIND THE USER " + person)
 
            let mainrole = msg.guild.roles.cache.find(role => role.name === "Community");
            let role = msg.guild.roles.cache.find(role => role.name === "mute");
           
 
            if(!role) return message.reply("Couldn't find the mute role.")
 
 
            let time = args[2];
            if(!time){
                return message.reply("You didnt specify a time!");
            }
 
            person.roles.add(mainrole.id)
            person.roles.remove(role.id);
 
 
            msg.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)
 
            setTimeout(function(){
               
                person.roles.add(mainrole.id)
                person.roles.remove(role.id);
                console.log(role.id)
                msg.channel.send(`@${person.user.tag} has been unmuted.`)
            }, ms(time));
 
 
   
        
    
    }
}
