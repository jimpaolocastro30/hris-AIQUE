

const mongoose = require('mongoose')

const InvSchema = new mongoose.Schema({
device: {
    type: String,
    
},
deviceNum:{
    type:String,
    

},
Status:{
    type: String,
    
},
spec:{
    type: String,
    
},
provider:{
    type: String,
    
},
price:{
    type: Number,
   
},
date: {
    type: String,
    
},

},


)

const InventoryModel = mongoose.model("Inventory", InvSchema)
module.exports= {InventoryModel}
