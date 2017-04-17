var express = require('express');
var router = express.Router();

var ctrlEvent = require('../controllers/eventscontrollers');
var postevent = require('../controllers/postevent');
var postComment = require('../controllers/postcomment');

router.route('/events').get(ctrlEvent.eventsGetAll);
//changed in iteration 7
router.route('/events/:eventid').get(ctrlEvent.eventGetOne);
var ctrlUsers = require('../controllers/usercontroller');

//eventcontrollers mongo-db routes
router.get('/events', ctrlEvent.eventsGetAll);
//changed in iteration 7
router.get('/events/:eventid', ctrlEvent.eventGetOne);

//post event CRUD routes
router.post('/viewevent', postevent.eventsCreate);
router.get('/viewevent', postevent.getEvents);
router.put('/viewevent/:eventid', postevent.eventsUpdateOne);
router.delete('/viewevent/:eventid', postevent.deleteEvent);

//post comment CRUD routes
//router.put('/eventDetail/comments/:commentid', postComment.commentUpdateOne);
router.get('/viewevent/:eventid/comments', postComment.getComments);
router.post('/viewevent/:eventid/comments', postComment.commentCreate);
router.delete('/viewevent/:eventid/comments/:commentid', postComment.deleteComment);

/*USER PROFILES db*/
/*POST users db*/
router.post('/users/createuser', ctrlUsers.userCreate);
/*GET users db*/
router.get('/users', ctrlUsers.getUsers);
/*GET one user*/
router.get('/users/:userid', ctrlUsers.getOneUser);
/*PUT user db aka UPDATE*/
router.put('/users/:userid', ctrlUsers.usersUpdateOne);

module.exports = router;