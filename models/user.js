const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var ObjectId = Schema.Types.ObjectId;
<<<<<<< HEAD
=======


>>>>>>> 453e77004bbb6daff3b440193756f1d6a793c1a9

let userSchema = new Schema({
    name: String,
    firstName:String,
    lastName:String,
    email: String,
    googleId: String,
    photo: String,
    events: [{
        type: Schema.Types.ObjectId, 
        ref: "Event"
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);