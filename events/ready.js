const { env } = require("process");

module.exports = client => {
    let activities = [`${client.guilds.cache.size} servers!`, `${client.channels.cache.size} channels!`, `${client.users.cache.size} users!`], i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000);

    let choices = ["i'm back from the dead!", "its good to be alive."]
    let response = choices[Math.floor(Math.random() * choices.length)]

    client.channels.cache.get("725829820579184735").send(`${response}`)

    console.log(`${client.user.username} is online in ${client.guilds.cache.size} servers and helping ${client.users.cache.size} users`);
}