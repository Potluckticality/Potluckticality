const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('dotenv').config();

let userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    photo: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);