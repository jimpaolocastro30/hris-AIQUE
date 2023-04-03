const express = require ('express')
const app = express();
const {AnnouncementModel} = require('../model/AnnouncementModel')

app.post("/insert", async(req, res) => {
    const user = req.body.user
    const date = req.body.date
    const tag = req.body.tag
    const announcement = req.body.announcement
    

    const Announcement = new AnnouncementModel({date:date, user:user,
         tag:tag, announcement:announcement });
         try {
            await Announcement.save(); 
         res.send("inserted data");  
         } catch (error) {
            console.log(error)
         }
        
       
});

app.get("/Announcement", async(req, res) => {
        
    AnnouncementModel.find({},(err,result)=> {
        if (err) {
            res.send(err);
        }

        res.send(result);

    })
    
});

app.delete('/delete/:id' ,async(req, res) => {
    const id = req.params.id;
    await AnnouncementModel.findByIdAndRemove(id).exec();
    res.send("deleted");
    });


app.put("/update/Announcement/:id", async(req, res) => {
    const newAnnouncement = req.body.newAnnouncement;
    const id = req.body.id;

    try{
        
      await AnnouncementModel.findById(id,(err, UpdatedAnnouncement)=>{
        UpdatedAnnouncement.announcement = newAnnouncement;
        UpdatedAnnouncement.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);


app.put("/update/Tag/:id", async(req, res) => {
    const newTag = req.body.newTag;
    const id = req.body.id;

    try{
        
      await AnnouncementModel.findById(id,(err, UpdatedTag)=>{
        UpdatedTag.tag = newTag;
        UpdatedTag.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);


module.exports = app;
