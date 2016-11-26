var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    date:{
        type: Date,
        required: true
    },
    moderator:{
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    room: {
        type: ObjectId,
        required: true
    },
    host: {
        type: ObjectId,
        required: true
    },
    eventType: {
        type: String,
        required: true
    },
    recurring: {
        type: Number,
    },
    subscribed:{
        type: Array
    },
    classes:{
        type: Array
    },
    category:{
        type: String
    },
    instances:{
        type: Array
    }

});

module.exports = mongoose.model('Event', eventSchema, 'event');