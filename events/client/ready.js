const { PlayerManager } = require("discord.js-lavalink");
const token = require("../../botconfig.json")

module.exports = bot => {
    console.log(`${bot.user.username} is online`);

    // global.lavalink = new PlayerManager(bot, nodes, {
    //     user: bot.user.id,
    //     shards: 0
    // });

    let activities = [ `${bot.guilds.cache.size} servers!`, `${bot.channels.cache.size} channels!`, `${bot.users.cache.size} users!` ], i = 0;
    setInterval(() => bot.user.setActivity(`${token.prefix}help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000);

    let choices = ["i'm back from the dead!", "its good to be alive.", "what breed of dog can jump higher than buildings? The answer is any dog, because buildings cannot jump."]
        let response = choices[Math.floor(Math.random() * choices.length)]

    bot.channels.cache.get("725829820579184735").send(`${response}`)

};