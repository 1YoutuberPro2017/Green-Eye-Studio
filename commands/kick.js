const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var kickUser = message.guild.member(message.mentions.users.first());

    if (!kickUser) return message.channel.send("Gebruiker is niet gevonden.");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry u kan geen members kicken.");

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kan je niet kicken");

    var kick = new discord.RichEmbed()
        .setDescription("kick")
        .setColor(" #f2ff00")
        .addField("Kicked gebruiker", kickUser)
        .addField("gekickd door", message.author)
        .addField("Reden", reason);

    var kickChannel = message.guild.channels.find(`name`, "bot-logs");
    if (!kickChannel) return message.guild.send("Kan het kanaal niet vinden");
    if (!banChannel) return message.guild.send("Maak een channel aan.", "bot-logs");

    message.guild.member(kickUser).kick(reason);

    kickChannel.send(kick);

    return;

}

module.exports.help = {
    name: "kick",
    description: "Om mensen uit je server te kicken."
}