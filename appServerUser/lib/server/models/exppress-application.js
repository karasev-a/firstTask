const express = require('express');
let bodyParser = require('body-parser');
const routes = require('../../routes')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8080;
app.set('port', port);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

  next();
})

app.use('/api/v1', routes);

app.use((req, res) => {
  res.status(404).send('404: NotFound')
});

app.use((err, req, res, next) => {
  logger.info(err.stack)
  res.status(500).send('500: Internal server')
})


module.exports = app;