const express = require('express');
const users = require('./user/data/usersList')
const router = require('./user/routes/userRouter')

const app = express();



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