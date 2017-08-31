const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var ObjectId = Schema.Types.ObjectId;

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