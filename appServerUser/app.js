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
  res.header('Access-Control-Allow-Origin', '*');
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