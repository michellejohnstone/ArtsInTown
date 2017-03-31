var express = require('express');
var router = express.Router();
var ctrlEvent = require('../controllers/eventscontrollers');
var postevent = require('../controllers/postevent');
var postComment = require('../controllers/postcomment');

//eventcontrollers mongo-db routes??
router.route('/events').get(ctrlEvent.eventsGetAll);
router.route('/events/:venueName').get(ctrlEvent.eventGetOne);

//eventcontrollers mongo-db routes
router.get('/events', ctrlEvent.eventsGetAll);
router.get('/events/:venueName', ctrlEvent.eventGetOne);

//postevent CRUD routes
router.post('/viewevent/', postevent.eventsCreate);
router.get('/viewevent', postevent.getEvents);
router.put('/viewevent/:eventid', postevent.eventsUpdateOne);
router.delete('/viewevent/:eventid', postevent.deleteEvent);

//postComment CRUD routes
router.put('/viewevent/:eventid', postComment.commentUpdateOne);
router.get('/viewevent/:eventid', postComment.getComments);
router.post('/viewevent/:eventid', postComment.commentCreate);
router.delete('/viewevent/:eventid', postComment.deleteComment);


module.exports = router;