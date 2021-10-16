const logger = require('./utils/logger');
const config = require('./config');

const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const api = express();
const routes = path.join(__dirname, './routes');

api.use(cors());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(express.json());
api.use(helmet());

fs.readdirSync(routes).forEach(file => {
    // Register all routes in routes folder. 
    const route = require(`${routes}/${file}`);
    for (let data in route) {
        const {method, path, handler} = route[data];
        api[method](path, handler);
    }
});

api.listen(config.port, err => {
    const routesCount = fs.readdirSync(routes).length;

    if (err) {
        logger.error({err});
        process.exit(1);
    }

    require('./utils/db');
    logger.info(`API is now running on port ${config.port} in ${config.env} mode.`);
    logger.info(`API running with ${routesCount} routes in ${config.env} mode.`)
})

module.exports = api;