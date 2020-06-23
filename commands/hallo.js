const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    return message.channel.send("Hallo");

}

module.exports.help = {
    name: "hallo",
    aliases: [""],
    description: "Bot zeg hallo terug.",
    category: "user",
    usage: "hallo"
}