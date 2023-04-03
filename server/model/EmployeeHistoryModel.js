const mongoose = require('mongoose')

const UserMngmntHistorySchema = new mongoose.Schema({
fullName: {
    type: String,
    
},
method:{
    type:String,
    
},
date:{
    type:String,
},


});

const UserMngmntHistoryModel = mongoose.model("User History", UserMngmntHistorySchema);
module.exports = UserMngmntHistoryModel