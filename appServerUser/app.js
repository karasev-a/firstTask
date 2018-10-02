const http = require('http');

const DBService = require('./lib/db/services/db-service');
const app = require('./lib/server/models/exppress-application');
const loggers = require('./lib/tools/loggers');

loggers.initLoggers();
loggers.initGlobalLogger();

const initApp = async () => {
  try {
    await DBService.initDataBase();
    const port = app.get('port')
    const server = http.createServer(app);
    server.listen(port, ()=>{
      logger.info(`Server started on port ${port}`)
    })
  } 
  catch (error) {
    logger.info(error);
  }
}

initApp();
