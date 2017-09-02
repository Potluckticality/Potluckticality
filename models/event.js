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
    title: String,
    location: String,
    time: String,
    description: String,
    date: Date,
    category: String,
    photo: String,
    eventId:String,
    dishes: [dishesSchema],
    users: [{
        type: ObjectId, 
        ref: "User"
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);