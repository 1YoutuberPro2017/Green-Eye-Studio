module.exports = (bot) => {
    let prompt = process.openStdin()
    prompt.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
        bot.channels.cache.get("725829820579184735").send(x.join(" "));
    })
}

const { Client } = require('pg')
const client = new Client({
    host: 'ec2-54-247-107-109.eu-west-1.compute.amazonaws.com',
    port: 5432,
    user: 'gnyarwjbfcyhms',
    password: '11967a9aa254ef5e180113b4283cdf14eda0927ff5cce912dd06a85829d8ba92',
    database: 'd2p58p2e2lsoeo',
})
client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
})