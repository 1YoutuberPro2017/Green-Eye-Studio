const Discord = require('discord.js');
const botConfig = require('./confige.json');

const client = new Discord.Client();µ
bot.commands = new discord.Collection();

const fs = require("fs");

fs.readdir("./commands/", (error, files) => {

  if (error) console.log(error);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {
      console.log("kon geen files vinden");
      return;
  }

  jsFiles.forEach((f, i) => {

      var fileGet = require(`./commands/${f}`);
      console.log(`De file ${f} is geladen`);

      bot.commands.set(fileGet.help.name, fileGet);

  })

});

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

  //client.user.setActivity(`${botConfig.prefix}help`, {type: "WATCHING"})

  client.user.setActivity(`hi i'm a patato`, {type: "WATCHING"});
  
});

bot.on("message", async message => {

  if (message.author.bot) return;

  if (message.channel.type === "dm") return message.channel.send("hi, i'm a patato");

  var id = message.guild.id

  var prefix = botConfig.prefix

  if (!message.content.startsWith(prefix)) return;

  var messageArray = message.content.split(" ");

  var command = messageArray[0];

  var arguments = messageArray.slice(1);

  var commands = bot.commands.get(command.slice(prefix.length));

  if (commands) commands.run(bot, message, arguments);

});
// client.on('message', message  => {

//   if (message.author.bot) return;

//   if (message.channel.type == "dm") return message.channel.send("hi, i'm a patato");
  
//   var prefix = botConfig.prefix;

//   var messageArray = message.content.split(" ");

//   var command = messageArray[0];

//   console.log(`${message.author.username}: ${command}`);

//   if(command === `${prefix}ping`){
//     return message.channel.send("pong");
//   };

  
// });

client.login(process.env.token);