const express = require('express');
const users = require('./user/data/usersList')
const router = require('./user/routes/userRouter')
const db = require('./db/models/db')
//const DBService = require('./db/services/db-service')
const User = require('./user/models/user');
const app = express();

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  db.sync().then(() => console.log('Connected to database'))
  .catch(error => console.log(error));



app.use('/', router);

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