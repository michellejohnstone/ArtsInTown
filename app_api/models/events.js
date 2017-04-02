var mongoose = require('mongoose');

// nested schema,
// declare before parent schema
var locationSchema = new mongoose.Schema({
    venueName:String,

    streetAddress: { 
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    
    //[Number] looks like  [longitude, latitude]
    coords: {type: [Number], index: '2dsphere'}, 
});


// parent schema
var eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    organizer: String,
    details: { 
        type: String,
        required: true
    },
    tags: {
        type:[String],
        required: true
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    
    // Add nested schema, reference as an array 
    location:  [locationSchema], 
    
});

var commentSchema = new mongoose.Schema({
    commentAuthor: {
        type: String,
        required: true
    },
    commentContent: {
        type: String,
        required: true
    },
    //needs to be autogen, for now wil have String as placeholder
    commentTimeStamp: String,
});
// model name, schema name, collection name (optional)
// collection name will be events by default 
mongoose.model('Event', eventSchema);
mongoose.model('Comment', commentSchema);