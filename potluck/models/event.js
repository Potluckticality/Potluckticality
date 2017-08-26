var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var eventSchema = new eventSchema({
    name:{type:String, required:true},
    location:{type:String, require:true},
    time:{type:Date, require:true},
    owner:[{ref}]
})
module.exports= mongoose.model('Event', eventSchema )