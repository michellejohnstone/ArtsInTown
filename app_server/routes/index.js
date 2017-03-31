var express = require('express');
var router = express.Router();
var ctrlMain = require('../controller/main');
var ctrlEvent = require('../controller/eventscontrollers');
var postevents = require('../controller/postevent');

/* GET home page. */
router.get('/', ctrlMain.index);


/* GET USER */
/* GET login page */
router.get('/login', ctrlMain.login);

/* GET register page */
router.get('/register', ctrlMain.register);

router.get('/userProfile', ctrlMain.profile);



// /*GET 'Find Events' page */
router.get('/eventList', ctrlMain.eventList);

/*GET 'Events Details' page */
router.get('/eventDetail', ctrlMain.eventDetail);

/*Get 'Post Event' page */
router.get('/post', ctrlMain.postEvent);

/*GET 'Contact' page */
router.get('/contact', ctrlMain.contact);

router
 .route('/events')
 .get(ctrlEvent.eventsGetAll);
    
router
  .route('/events/:venueName')
  .get(ctrlEvent.eventGetOne);


/*POST db*/
router.post('/viewevent/', postevents.eventsCreate);
/*GET db*/
router.get('/viewevent', postevents.getEvents);
/*Del db*/
router.delete('/viewevent/:eventid', postevents.deleteEvent);
/*PUT db aka UPDATE*/
router.put('/viewevent/:eventid', postevents.eventsUpdateOne);

router.get('/events', ctrlEvent.eventsGetAll);
router.get('/events/:venueName', ctrlEvent.eventGetOne);
module.exports = router;