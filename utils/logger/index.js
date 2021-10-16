const winston = require('winston');
const chalk = require('chalk');

function generateTitle(info) {
    switch (info.level) {
        case 'error':
            return chalk.red(info.level)
        case 'warn':
            return chalk.yellow(info.level)
        case 'info':
            return chalk.blue(info.level)
        case 'verbose':
            return chalk.green(info.level)
        case 'debug':
            return chalk.magenta(info.level)
        case 'silly':
            return chalk.cyan(info.level)
        default:
            return chalk.white(info.level)
    }
}

module.exports = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                winston.format.printf(info => `[${generateTitle(info)}] [${[info.timestamp]}] - ${info.message}`)
            )
        }),
        new winston.transports.File({
            filename: './logs/server.log',
            format: winston.format.combine(
                winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                winston.format.align(),
                winston.format.printf(info => `[${info.level}] [${[info.timestamp]}] - ${info.message}` )
            )
        }),
        new winston.transports.File({
            level: 'error',
            filename: './logs/error.log',
            format: winston.format.combine(
                winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                winston.format.align(),
                winston.format.printf(info => `[${info.level}] [${[info.timestamp]}] - ${info.message}` )
            )
        })
    ]
});

