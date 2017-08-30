const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var Event = require('./event');

require('dotenv').config();

// let eventSchema = new Schema({
//     title: String,
//     location: String,
//     time: String,
//     description: String,
//     date: Date,
//     category:String,
//     photo:String
// }, {
//     timestamps: true
// });

let userSchema = new Schema({
    name: String,
    firstName:String,
    lastName:String,
    email: String,
    googleId: String,
    photo: String,
    events: [{
        type: ObjectId, 
        ref: "Event"
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);