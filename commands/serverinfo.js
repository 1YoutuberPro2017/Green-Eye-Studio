const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var serverIcon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription("server info")
        .setColor("#128760")
        .setThumbnail(serverIcon)
        .addField("Je bent gejoind op", message.member.joinedAt)
        .addField("Totaal members", message.guild.memberCount);

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo",
    description: "Om informatie van de server te vragen.",
    category: "info",
    usage: "serverinfo"
}