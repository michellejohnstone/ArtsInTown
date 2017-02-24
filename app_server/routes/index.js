var express = require('express');
var router = express.Router();
var ctrlMain = require('../controller/main');

/* GET home page. */
router.get('/', ctrlMain.index);

/*GET 'Find Events' page */
router.get('/events', ctrlMain.eventList);

/*Get 'Post Event' page */
router.get('/post', ctrlMain.postEvent);

/*GET 'Contact' page */
router.get('/contact', ctrlMain.contact);


module.exports = router;
