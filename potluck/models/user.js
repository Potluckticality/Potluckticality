const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('dotenv').config();
let eventSchema = new Schema({
    title: String,
    location: String,
    time: Date,
    description: String,
    date:Date
}, {
    timestamps: true
});

let userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    photo: String,
    events:[eventSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);