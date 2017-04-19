const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const parser = require('body-parser');
const controller = require('./server/controllers/controllers')
const db = require('./server/db/db');

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, '../client')));

app.get('/songs', controller.controller.get)
app.post('/songs', controller.controller.post)


app.listen(PORT, (err) => {
  if(err) {
    console.log('Err: ', err);
  }
  console.log('Connection established!!');
});

