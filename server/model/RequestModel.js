const mongoose = require('mongoose');


const RequestSchema = new mongoose.Schema({
email: {
    type: String,
    
    
},
Request:{
    type:String,
    
},
date:{
    type:String,
},


});

const RequestModel = mongoose.model("Requests", RequestSchema);
module.exports = RequestModel
