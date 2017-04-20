const controller = require('./server/controllers/controllers');
const router = require('express').Router();

router.get('/songs', controller.songControl.get);
router.post('/songs', controller.songControl.post);

module.exports = router;