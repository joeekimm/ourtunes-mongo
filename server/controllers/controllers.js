const mongoose = require('mongoose');
const Song = require('../models/songModel.js').Song

const songControl = {
  get: (req, res) => {
    Song.find({}, (err, result) => {
      if(err) {
        console.log('Err: ', err);
        res.status(404);
      } else {
        console.log('Get request successful');
        res.status(200).send(result)
      }
    })
  },

  post: (req, res) => {
    let newSong = new Song(req.body);
    newSong.save((err, data) => {
      if(err) {
        console.log('Err: ', err);
        res.status(404);
      } else {
        console.log('Post request successful')
        res.status(201);
        res.json({
          title: req.body.title,
          artist: req.body.artist,
          url: req.body.url
        });
      }
    })
  }
}

module.exports = {
  songControl: songControl
}
