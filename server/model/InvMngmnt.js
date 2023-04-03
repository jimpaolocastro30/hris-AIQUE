const mongoose = require('mongoose')

const InvMngmntSchema = new mongoose.Schema({
fullName: {
    type: String,
    
},
email:{
    type:String,
    
},
department:{
    type:String,
},
position:{
    type:String,
},
deviceNum:{
    type:String,
},
specs:{
    type:String,
},
devices:{
    type:String,
},
date:{
    type:String,
},



});

const InvMngmntModel = mongoose.model("InventoryManagement", InvMngmntSchema);
module.exports = InvMngmntModel