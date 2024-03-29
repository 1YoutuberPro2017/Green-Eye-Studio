const mongoose = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family:4
        };

        mongoose.connect('mongodb://Root:lKF1iX4MRInsF9R8@discordbot-shard-00-00.w1mqw.gcp.mongodb.net:27017,discordbot-shard-00-01.w1mqw.gcp.mongodb.net:27017,discordbot-shard-00-02.w1mqw.gcp.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-h5wle3-shard-0&authSource=admin&retryWrites=true&w=majority', dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('Mongoose has successfully connected!');
        });

        mongoose.connection.on('err', err => {
            console.error(`Mongoose connection error: \n${err.stack}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('Mongoose connection lost');
        });
    }
}