//require discord js
const Discord = require("discord.js");
require('dotenv').config(); 
var twss = require('twss');
twss.threshold = 0.8;


async function isPossible(content){
    try{
        result=await twss.is(content);
        return result;
    }catch (error) {
        console.log('Oopsie');
        
      }

}
//create new client
const client = new Discord.Client();


// Display a message once the bot has started
client.on("ready", ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
});


// Check messages for a specific command
client.on("message", msg => {
    // Send back a reply when the specific command has been written
    if (twss.is(msg.content)) {
        msg.reply("That's what she said!");
    }

    else if(msg.content === "!ms help"){
        msg.reply("Ehh. You know, **wink wink**")
    }
    
    else if(msg.content === "!ms who"){
        msg.reply("I go by many names, but I would prefer if you called me Michael Scarn.")
    }

    else if(msg.content === "!ms i am toby"){
        msg.reply("Why are you the way that you are?")
    }

    else if(msg.content === "!ms You really think you can go all day?"){
        msg.reply("That's what she said")
    }

    else if(msg.content === "!ms who is dwight?"){
        msg.reply("Assistant to the regional manager")
    }

});

//log in with token
client.login(process.env.BOT_TOKEN);



