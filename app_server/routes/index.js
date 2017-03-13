var express = require('express');
var router = express.Router();
var ctrlMain = require('../controller/main');
var postevents = require('../controller/postevent');


/* GET home page. */
router.get('/', ctrlMain.index);

/*GET 'Find Events' page */
router.get('/events', ctrlMain.eventList);

/*GET 'Events Details' page */
router.get('/eventDetail', ctrlMain.eventDetail);

/*Get 'Post Event' page */
router.get('/post', ctrlMain.postEvent);

/*GET 'Contact' page */
router.get('/contact', ctrlMain.contact);


/*POST db*/
router.post('/viewevent/', postevents.eventsCreate);
/*GET db*/
router.get('/viewevent', postevents.getEvents);
/*Del db*/
router.delete('/viewevent/:eventid', postevents.deleteEvent);
/*PUT db aka UPDATE*/
router.put('/viewevent/:eventid', postevents.eventsUpdateOne);

module.exports = router;