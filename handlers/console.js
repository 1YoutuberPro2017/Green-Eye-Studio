module.exports = (bot) => {
let prompt = process.openStdin()
prompt.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
        bot.channels.cache.get("725829820579184735").send(x.join(" "));
    })
}

const { Pool, Client } = require('pg')
const connectionString = 'postgres://gnyarwjbfcyhms:11967a9aa254ef5e180113b4283cdf14eda0927ff5cce912dd06a85829d8ba92@ec2-54-247-107-109.eu-west-1.compute.amazonaws.com:5432/d2p58p2e2lsoeo'
const pool = new Pool({
    connectionString: connectionString,
})
pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})
const client = new Client({
    connectionString: connectionString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
})