const mongoose = require('mongoose');

const config = require('../../config');
const logger = require('../logger');

const connection = mongoose.connect(config.mongo_url, {
    autoIndex: true,
    useNewUrlParser: true,
    maxPoolSize: 10
})

connection.then(db => {
    logger.info(`Connected to ${config.mongo_url} MongoDB cluster in ${config.env} mode.`);
    return db;
})
.catch(err => {
    if (err.message.code === 'ETIMEDOUT') {
        logger.info(`Database connection failed. Attempting to reconnect.`)
        mongoose.connect(config.mongo_url)
    } else {
        logger.error(`Database connection failed. ${{err}}`);
        logger.error(err)
    }
})

module.exports = connection;



