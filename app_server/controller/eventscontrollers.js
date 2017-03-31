var mongoose = require('mongoose');
var Event = mongoose.model('Event');

// var apiOptions = {
//   server : "https://arts-in-town-diazjenn.c9users.io"
// };
// if (process.env.NODE_ENV === 'production') {
//   apiOptions.server = "https://still-cove-65449.herokuapp.com";
// }

module.exports.eventsGetAll = function(req, res) {
    console.log('Read All Events');
    
    Event
      .find()
      .exec(function(err, events) {
          console.log("Found events", events.length);
          
          res
            .json(events);
            
      });
};

module.exports.eventGetOne = function(req, res) {
    console.log('Read one event');

    var id = req.params.venueName;
    console.log('req.params', req.params);
    // console.log('GET venueName', id);
    
    Event
     .findOne({venueName: id})

     .exec(function(err, doc) {
         if(err) {
             console.log("can't get event", id);
             res
                .status(400)
                .json(err);
         } else {
             res
                .status(200)
                .json(doc);
         }
     });
};

var _splitArray = function(input) {
  var output;
  if (input && input.length > 0) {
    output = input.split(";");
  } else {
    output = [];
  }
  return output;
};

