const { env } = require("process");

module.exports = client => {
    let activities = [ `${client.guilds.cache.size} servers!`, `${client.channels.cache.size} channels!`, `${client.users.cache.size} users!` ], i = 0;
    setInterval(() => client.user.setActivity(`${env.prefix}help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000);

    let choices = ["i'm back from the dead!", "its good to be alive.", "what breed of dog can jump higher than buildings? The answer is any dog, because buildings cannot jump."]
        let response = choices[Math.floor(Math.random() * choices.length)]

    client.channels.cache.get("725829820579184735").send(`${response}`)
    
        client.user.setPresence({
            status: 'dnd',
        });
}