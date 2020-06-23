const discord = require("discord.js");
const fs = require("fs");
const bot = new discord.Client();
bot.commands = new discord.Collection();

module.exports.run = async (bot, message, arguments) => {
    let commandSize = 0
    let embed = new discord.RichEmbed().setColor("RANDOM")

    if (!arguments[0]) {
        let categories =
            bot.commands
                .map(c => c.help.category)
                .reduce((a, b) => {
                    if (a.indexOf(b) < 0) a.push(b)
                    return a
                }, []).sort()

        embed.setAuthor("Commands List", message.author.avatarURL)
        categories.forEach(c => {
            let commands = bot.commands.filter(
                command => command.help.category == c
            )
            commands = commands.map(cmd => cmd.help.name)
            if (commands.length <= 0) return;
            commandSize += commands.length
            embed.addField(c, `\`${commands.sort().join("`, `")}\``)
        })
        embed.setFooter(`Total commands: ${commandSize}`)
        embed.setColor("#5b0b0b")

        return message.channel.send(embed)
    } else {
        let command = bot.commands.get(arguments[0])
        if (!command) return message.reply("Cant find this command, sorry!")
        command = command.help
        embed.setAuthor(`Command help for ${command.name}`, message.author.avatarURL)
        embed.setDescription(command.description)
        // if (command.aliases.length >= 1) embed.addField("Aliases", `\`${command.aliases.join("`, `")}\``)
        if (command.usage != null) embed.addField("Usage", command.usage)
        embed.setColor("#128760")

        return message.channel.send(embed)
    }
}

module.exports.help = {
    name: "help",
    aliases: ["h"],
    description: "Shows all bot commands.",
    category: "Util",
    usage: "help (command)"
}