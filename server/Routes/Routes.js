const express = require ('express')
const app = express();
const {InventoryModel} = require('../model/InventoryModel')
const InvHistoryModel = require('../model/InvHistory')
const bcrypt = require("bcrypt");
const{protect} = require('../Routes/RouteSec')
//const roleCheck = require('../Routes/RoleCheck')

    app.post("/insert", async(req, res) => {
        const device = req.body.device
        const date = req.body.date
        const Status = req.body.Status
        const deviceNum = req.body.deviceNum
        const spec = req.body.spec
        const provider = req.body.provider
        const price = req.body.price
        

        const Inventory = new InventoryModel({device: device, deviceNum:deviceNum, date:date, Status:Status, spec:spec, provider:provider, price:price, });
        try{
        const deviceNumAuth = await InventoryModel.findOne({ deviceNum: req.body.deviceNum });
            if (deviceNumAuth) {
                     res.status(401)
                     res.send({ message: "You can't Duplicate the Device Number" });
        } else {
             await Inventory.save(); 
            res.send("inserted data");  
        }
           
        }catch (err) {
            console.log(err);
        }
    });
    
    
    app.get("/read",protect, async(req, res) => {
        
        InventoryModel.find({},(err,result)=> {
            if (err) {
                res.send(err);
            }
    
            res.send(result);
    
        })
        
    });

    




    /*app.get("/read/:id", async(req, res, next) => {
        const filters = req.query;
        const filteredDevice = InventoryModel.filters(device =>{
            let isValid = true;
            for (key in filters) {
                console.log(key,device[key], filters[key]);
                isValid = isValid&&device[key] == filters[key];
            }
            return isValid;

        });
        res.send(filteredDevice);

    });*/
    
        //Device Category
    app.get("/read/device",(req,res)=> {
        let device = req.query.device;
        
        InventoryModel.find({device:device},function(err,result){
            if(err) return res.json({success:false, error:err})
            return res.json({result});
        })
    })
//Read one data/device
    app.get("/read/device/:id",(req,res)=> {
        const id = req.params.id;
        InventoryModel.findById(id,function(err,idresult){
            if(err) return res.json({success:false, error:err})
            return res.json({Success:true, idresult});
            
        })
    })
    app.get("/read/DeviceNum",(req,res)=> {
        let deviceNum = req.query.deviceNum;
        
        InventoryModel.find({deviceNum:deviceNum},function(err,result){
            if(err) return res.json({success:false, error:err})
            return res.json({result});
        })
    })

    //update routesz
        app.put("/update/updevice/:id",async(req, res) => {
        const newDevice = req.body.newDevice;
        const id = req.body.id;
        
        try{
         
          await InventoryModel.findById(id,(err, updatedDevice)=>{
            updatedDevice.device = newDevice;
            updatedDevice.save();
            res.send("update");      
        }
        
        );
        }catch (err) {
            console.log(err);
        }
        }
);
app.put("/update/status/:id", async(req, res) => {
    const newStatus = req.body.newStatus;
    const id = req.body.id;

    try{
        
      await InventoryModel.findById(id,(err, UpdatedStatus)=>{
        UpdatedStatus.Status = newStatus;
        UpdatedStatus.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);
app.put("/update/deviceNum/:id", async(req, res) => {
    const newDeviceNum = req.body.newDeviceNum;
    const id = req.body.id;

    try{
        
      await InventoryModel.findById(id,(err, UpdatedDeviceNum)=>{
        UpdatedDeviceNum.deviceNum = newDeviceNum;
        UpdatedDeviceNum.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);
app.put("/update/spec/:id",async(req, res) => {
    const newSpec = req.body.newSpec;
    const id = req.body.id;

    try{
        
      await InventoryModel.findById(id,(err, UpdatedSpec)=>{
        UpdatedSpec.spec = newSpec;
        UpdatedSpec.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.put("/update/provider/:id", async(req, res) => {
    const newProvider = req.body.newProvider;
    const id = req.body.id;

    try{
        
      await InventoryModel.findById(id,(err, UpdatedProvider)=>{
        UpdatedProvider.provider = newProvider;
        UpdatedProvider.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);
app.put("/update/price/:id", async(req, res) => {
    const newPrice = req.body.newPrice;
    const id = req.body.id;

    try{
        
      await InventoryModel.findById(id,(err, UpdatedPrice)=>{
        UpdatedPrice.price = newPrice;
        UpdatedPrice.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);
app.put("/update/date/:id", async(req, res) => {
    const newDate = req.body.newDate;
    const id = req.body.id;

    try{
        
      await InventoryModel.findById(id,(err, UpdatedDate)=>{
        UpdatedDate.date = newDate;
        UpdatedDate.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

//delete data//

app.post("/delete/:id", async(req, res) => {
    const id = req.params.id;
    const fullName= req.body.fullName
    const date = req.body.date
    InventoryModel.findById(id,(err,result)=> {
        if (err) {
            res.send(err);
        }
        else{
        let deviceName = result.device;
        let deviceNumber = result.deviceNum;

        const InventoryHistory = new InvHistoryModel({
            date:date ,fullName:fullName, method:"deleted:"+deviceName+" Device Number:"+deviceNumber });
            try {
                InventoryHistory.save(); 
                res.send("inserted data");  
            } catch (err) {
                console.log(err)
            }
        }
        
    })
    
});


app.delete('/delete/:id' ,protect,async(req, res) => {
    const id = req.params.id;
    await InventoryModel.findByIdAndRemove(id).exec();
    res.send("deleted");
    });

///////////////
app.put("/update/device/", async(req, res) => {
    const newDevice = req.body.newDevice;
    const deptid = req.query.deptid;
    
    try{
        
      await InventoryModel.updateOne(deptid,(err, Updatedevice)=>{
        Updatedevice.department = newDevice;
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.get("/stock",(req,res)=> {
    let device = req.query.device;
    
    InventoryModel.count({device:device},function(err,result){
        if(err) return res.json({success:false, error:err})
        return res.json({result,});
           
        })})

 app.get("/Status",(req,res)=> {
 let Status = req.query.Status;
            
InventoryModel.count({Status:Status},function(err,result){
   if(err) return res.json({success:false, error:err})
     return res.json({result});
                   
                })})
        
    
 




module.exports = app;