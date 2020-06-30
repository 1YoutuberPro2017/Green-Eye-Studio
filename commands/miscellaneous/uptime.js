
// module.exports = {
//     config: {
//         name: "uptime",
//         description: "Displays the bots current uptime!",
//         usage: "!uptime",
//         category: "miscellaneous",
//         accessableby: "Members",
//         aliases: ["ut"]
//     },

//     run: async (bot, message, args) => {

//     function duration(ms) {
//         const sec = Math.floor((ms / 1000) % 60).toString()
//         const min = Math.floor((ms / (1000 * 60)) % 60).toString()
//         const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
//         const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
//         return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
//     }

//     message.channel.send(`I have been online for: ${duration(bot.uptime)}`)

//     }
// }

//-----------------[command info]-----------------
module.exports = {
    config: {
        name: "uptime",
        description: "Displays the bots current uptime!",
        usage: "!uptime",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["ut"]
    },
//-----------------[run command]-----------------
    run: async (bot, message, args) => {

    function duration(ms) {
        const totalSec = (bot.uptime/1000)
        const days = Math.floor(totalSec/86400).toString()
        const hrs = Math.floor(totalSec/3600).toString()
        totalSec %= 3600
        const min = Math.floor(totalSec/60).toString()
        const sec = Math.floor(totalSec%60).toString()
       
        
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
    }

    message.channel.send(`I have been online for: ${duration(bot.uptime)}`)

    }
}
