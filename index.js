const Discord = require('discord.js');
const client = new Discord.Client();
const botConfig = require('./confige.json')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  //client.user.setActivity(`${botConfig.prefix}help`, {type: "WATCHING"})
  client.user.setActivity(`hi i'm a patato`, {type: "WATCHING"});
});

client.on('message', message  => {

  if (message.author.bot) return;

  if (message.channel.type == "dm") return message.channel.send("hi, i'm a patato");
  
  var prefix = botConfig.prefix;

  var messageArray = message.content.split(" ");

  var command = messageArray[0];

  console.log(`${message.author.username}: ${command}`)

  if(command === `${prefix}ping`){
    return message.channel.send("pong");
  };

  
});

client.login(process.env.token);