module.exports = (bot) => {
    let prompt = process.openStdin()
    prompt.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
        bot.channels.cache.get("725829820579184735").send(x.join(" "));
    })
}