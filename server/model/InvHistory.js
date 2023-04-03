const mongoose = require('mongoose')

const invHistorySchema = new mongoose.Schema({
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

const InvHistoryModel = mongoose.model("Inventory History", invHistorySchema);
module.exports = InvHistoryModel

