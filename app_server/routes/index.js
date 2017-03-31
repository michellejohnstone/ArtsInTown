var express = require('express');
var router = express.Router();
var ctrlMain = require('../controller/main');
var ctrlEvent = require('../controller/eventscontrollers');
var postevents = require('../controller/postevent');
var ctrlUsers = require('../controller/usercontroller');


/* GET home page. */
router.get('/', ctrlMain.index);


/* GET USER */
/* GET login page */
router.get('/login', ctrlMain.login);


// /*GET 'Find Events' page */
router.get('/eventList', ctrlMain.eventList);

/*GET 'Events Details' page */
router.get('/eventDetail', ctrlMain.eventDetail);

/*Get 'Post Event' page */
router.get('/post', ctrlMain.postEvent);

router.get('/events', ctrlEvent.eventsGetAll);
router.get('/events/:venueName', ctrlEvent.eventGetOne);


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

/*USER PROFILES db*/
/*POST users db*/
router.post('/users/createuser', ctrlUsers.userCreate);
/*GET users db*/
router.get('/users', ctrlUsers.getUsers);
/*GET one user*/
router.get('/users/:userid', ctrlUsers.getOneUser);
/*PUT user db aka UPDATE*/
router.put('/users/:userid', ctrlUsers.usersUpdateOne);


/* GET register page */
router.get('/register', ctrlMain.register);

router.get('/userProfile', ctrlMain.profile);

module.exports = router;