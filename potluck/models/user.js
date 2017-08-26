const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('dotenv').config();
let eventSchema = new Schema({
    name:{type:String},
    location:{type:String},
    time:{type:Date}
})

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