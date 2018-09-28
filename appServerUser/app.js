const express = require('express');
var bodyParser = require('body-parser');

const users = require('./user/data/usersList')
const router = require('./user/routes/userRouter')
const db = require('./db/models/db')
const DBService = require('./db/services/db-service');

const app = express();

const initApp = async () => {
  try {
    await DBService.initDataBase();
  } catch (error) {
    console.log(error);
    
  }

}

initApp();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

  next();
})

app.use('/api/v1/users', router);

app.use((req, res) => {
    res.status(404).send('404: NotFound')
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('500: Internal server')
  })

app.listen(8080, ()=>{
    console.log('Start server');
    
})