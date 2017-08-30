const mongoose = require('mongoose');
const Schema = mongoose.Schema;
<<<<<<< HEAD:models/user.js
var ObjectId = Schema.Types.ObjectId;
=======
// var ObjectId = Schema.Types.ObjectId;
>>>>>>> 98ff028e38d593b78525a519efd816754983855e:potluck/models/user.js



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