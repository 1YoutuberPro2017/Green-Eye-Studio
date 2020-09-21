const mongoose = require("mongoose")
const botconfig = require("../../botconfig.json")

module.exports = {
    config: {
        name: "balance",
        description: "",
        usage: "",
        category: "moneys",
        accessableby: "Members",
        aliases: ["bal"]
    },
    //-----------------[run command]-----------------
    run: async (bot, message, args) => {

    message.channel.send(`${botconfig}`)

    }
}