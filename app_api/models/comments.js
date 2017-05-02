var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    author: {type: String, required: true},
    body: {type: String, required: true},
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event'}, 
    created: { type: Date, default: Date.now }
});

mongoose.model('Comment', commentSchema);