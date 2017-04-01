var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

//navagation bar routes
router.get('/', ctrlMain.index);
router.get('/eventlist', ctrlMain.eventList);
router.get('/eventDetail', ctrlMain.eventDetail);
router.get('/post', ctrlMain.postEvent);
router.get('/contact', ctrlMain.contact);

module.exports = router;