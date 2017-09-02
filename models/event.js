const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

let dishesSchema = new Schema({
    dish: String,
    userName: String,
    dishId:String

}, {
    timestamps: true
});

let eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    photo: String,
    eventId: String,
    dishes: [dishesSchema],
    users: [{
        type: ObjectId, 
        ref: "User"
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);