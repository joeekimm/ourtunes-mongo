const mongoose = require('mongoose');
const uri = 'mongodb://user:user@ds163340.mlab.com:63340/mytunes'

// autoIncrement.intialize(db)

mongoose.connect(uri, (err) => {
  if(err) {
    console.log('Err: ', err);
  }
  console.log('Connection to database successful!');
})

const db = mongoose.connection;
module.exports = db;

