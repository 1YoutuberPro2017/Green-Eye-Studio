const mongoose = require('mongoose');
const Guild = require('../models/guild');
const { MessageEmbed } = require('discord.js');
const got = require('got');

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.guild.id === "509635817015083018") {
        if (message.attachments.size > 0) {
            message3 = `--image--\n ${message}`
        } else {
            message3 = message
        }

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.guild.name}`)
            .setThumbnail(message.author.avatarURL())
            .addField(message.channel.name, message.author.username)
            .addField('message: ' + `${message3}`, `-Chat log-`)
            .setTimestamp();
        client.channels.cache.get("510061374622400513").send(embed)
    };


    const settings = await Guild.findOne({
        guildID: message.guild.id
    }, (err, guild) => {
        if (err) console.error(err)
        if (!guild) {
            const newGuild = new Guild({
                _id: mongoose.Types.ObjectId(),
                guildID: message.guild.id,
                guildName: message.guild.name,
                prefix: process.env.PREFIX,
                logChannelID: null
            })

            newGuild.save()
                //.then(result => console.log(result))
                .catch(err => console.error(err));

            return message.channel.send('This server was not in our database! We have now added and you should be able to use bot commands.').then(m => m.delete({ timeout: 10000 }));
        }
    });


    //--meme code zonder commands--
    const args4 = message.content.slice().trim().split(/ +/g);

    if (message.content.startsWith("plss meme", "meme plss")) {
        if (!args4[2]) {
            const meme = new MessageEmbed()

            got('https://www.reddit.com/r/memes/random/.json').then(response => {
                let content = JSON.parse(response.body);
                let permalink = content[0].data.children[0].data.permalink;
                let memeUrl = `https://reddit.com${permalink}`;
                let memeImage = content[0].data.children[0].data.url;
                let memeTitle = content[0].data.children[0].data.title;
                let memeUpvotes = content[0].data.children[0].data.ups;
                let memeDownvotes = content[0].data.children[0].data.downs;
                let memeNumComments = content[0].data.children[0].data.num_comments;
                meme.addField(`${memeTitle}`, `[View thread](${memeUrl})`);
                meme.setImage(memeImage);
                meme.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`);
                message.channel.send(meme)

            }).catch(console.error);
        }
    }


    const prefix = settings.prefix;

    if (!message.guild) return;

    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);

};