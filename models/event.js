const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var ObjectId = Schema.Types.ObjectId;


let eventSchema = new Schema({
    title: String,
    location: String,
    time: String,
    description: String,
    date: Date,
    category: String,
    photo: String
    // users: [{
    //     type: ObjectId, 
    //     ref: "User"
    // }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);