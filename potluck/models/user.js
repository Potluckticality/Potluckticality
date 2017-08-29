const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('dotenv').config();

let eventSchema = new Schema({
    title: String,
    location: String,
    time: String,
    description: String,
    date: Date,
    category:String,
    photo:String
}, {
    timestamps: true
});

let userSchema = new Schema({
    name: String,
    firstName:String,
    lastName:String,
    email: String,
    googleId: String,
    photo: String,
    events:[eventSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);