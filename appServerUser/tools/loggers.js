const winston = require('winston');

const path = require('path');

let fileSize = 1024000;

let myFormat = winston.format.printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

class LoggerService {
  constructor(){
    this.commonLogger = null;
  }

  initLoggers() {
    this.commonLogger = this.getCommonLogger();
  }

  initGlobalLogger(){
    global.logger = this.commonLogger;
  }

  static getCommonLogger(){

    const fileLogger = new(winston.transports.File)({
      fileName: path.join("logs", "common", "log.log"),
      handleExceptions: true,
      maxsize: fileSize,
      format: winston.format.combine(
        winston.format.timestamp(),
        myFormat
      ) 
    });

    const result = winston.createLogger({
      transports: [
        new(winston.transports.Console)({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
           myFormat
          )
        }),
        fileLogger
      ],
      exceptionHandlers: [fileLogger]
    });
    return result;
  }
}

module.exports =  new LoggerService();
