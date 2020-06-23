const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var botIcon = bot.user.defaultAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("discord bot info")
        .setColor("#128760")
        .setThumbnail(botIcon)
        .addField("Bot naam", bot.user.username)
        .addField("Gamaakt op", bot.user.createdAt);

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info",
    description: "Om informatie van je zelf op te vragen.",
    category: "info",
    usage: "info"
}