const mongoose = require('mongoose')

const AnnounceSchema = new mongoose.Schema({
    user:{
        type: String,
    },
    announcement: {
        type: String,
        
    },
    date:{
        type:String,
        
    
    },
    tag:{
        type: String,
        
    },


    
})
const AnnouncementModel = mongoose.model("Annoncement", AnnounceSchema)
module.exports= {AnnouncementModel}