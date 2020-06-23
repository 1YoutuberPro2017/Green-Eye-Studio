const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var banUser = message.guild.member(message.mentions.users.first());

    if (!banUser) return message.channel.send("Gebruiker is niet gevonden.");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry u kan geen members bannen.");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kan je niet bannen");

    var ban = new discord.RichEmbed()
        .setDescription("ban")
        .setColor("#5b0b0b")
        .addField("baned gebruiker", banUser)
        .addField("geband door", message.author)
        .addField("Reden", reason);

    var banChannel = message.guild.channels.find(`name`, "test");
    if (!banChannel) return message.guild.send("Kan het kanaal niet vinden", "Maak een channel aan.", "test");

    message.guild.member(banUser).ban(reason);

    banChannel.send(ban);

    return;

}

module.exports.help = {
    name: "ban",
    description: "Om mensen de bannen van je server.",
    category: "Admin",
    usage: "ban (username) (reason)"
}