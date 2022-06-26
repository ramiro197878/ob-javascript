const { throws } = require('assert');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});


function mostraError() {
  throw new Error("Esto es un error personalizado")
}


try {
  mostraError();
} catch (e) {
  logger.log("error", e)
}