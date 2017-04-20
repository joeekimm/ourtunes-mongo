const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const uri = 'mongodb://user:user@ds163340.mlab.com:63340/mytunes';


mongoose.connect(uri, (err) => {
  if(err) {
    console.log('Err: ', err);
  }
  console.log('Connection to database successful!');
})

const db = mongoose.connection;

autoIncrement.intialize(db)

module.exports = db;


