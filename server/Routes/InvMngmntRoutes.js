const express = require ('express');
const { Employeedb } = require('../model/EmployeeModel');
const InvHistoryModel = require('../model/InvHistory');
const app = express();
const InvMngmntModel = require('../model/InvMngmnt')
    //////Create//////
    app.post("/insert", async(req, res) => {
        const fullName = req.body.fullName
        const email = req.body.email
        const department = req.body.department
        const deviceNum = req.body.deviceNum
        const specs = req.body.specs
        const devices = req.body.devices
        const date = req.body.date
        const position = req.body.position

        const InventoryManagement = new InvMngmntModel({devices: devices, 
        deviceNum:deviceNum, position:position,
        specs:specs, fullName:fullName,
        date:date ,email:email, department:department });
        try{
            let deviceNumbers = InvMngmntModel.find({deviceNum:deviceNum})
            if(deviceNumbers){
                res.send("device number already exists");
            }else{
            await InventoryManagement.save(); 
            res.send("inserted data");  
            }
            
        }catch (err) {
            console.log(err);
        }
    });
    //////Read//////
    app.get("/read", async(req, res) => {
        
        InvMngmntModel.find({},(err,result)=> {
            if (err) {
                res.send(err);
            }
               res.send(result); 
            
    
        })
        
    });

    //////update//////
    app.put("/update/name/:id",async(req, res) => {
        const newName = req.body.newName;
        const id = req.body.id;
        try{
            
          await InvMngmntModel.findById(id,(err, updatedName)=>{
            updatedName.fullName = newName;
            updatedName.save();
            res.send("update");
                
        });
        }catch (err) {
            console.log(err);
        }
        }
    );

    app.put("/update/Devices/:id",async(req, res) => {
        const newDevices = req.body.newDevices;
        const id = req.body.id;
        try{ 
            
          await InvMngmntModel.findById(id,(err, updatedDevice)=>{
            updatedDevice.devices = newDevices;
            updatedDevice.save();
            res.send("update");
                
        });
        }catch (err) {
            console.log(err);
        }
        }
    );

    app.put("/update/email/:id",async(req, res) => {
        const newEmail = req.body.newEmail;
        const id = req.body.id;
        try{
            
          await InvMngmntModel.findById(id,(err, updatedEmail)=>{
            updatedEmail.email = newEmail;
            updatedEmail.save();
            res.send("update");
                
        });
        }catch (err) {
            console.log(err);
        }
        }
    );

    app.put("/update/position/:id",async(req, res) => {
        const newPosition = req.body.newPosition;
        const id = req.body.id;
        try{
            
          await InvMngmntModel.findById(id,(err, updatedPosition)=>{
            updatedPosition.position = newPosition;
            updatedPosition.save();
            res.send("update");
                
        });
        }catch (err) {
            console.log(err);
        }
        }
    );

    app.put("/update/deviceNums/:id",async(req, res) => {
        const newDeviceNum = req.body.newDeviceNum;
        const id = req.body.id;
        try{
            
          await InvMngmntModel.findById(id,(err, updatedDeviceNum)=>{
            updatedDeviceNum.deviceNum = newDeviceNum;
            updatedDeviceNum.save();
            res.send("update");
                
        });
        }catch (err) {
            console.log(err);
        }
        }
    );

    app.put("/update/specs/:id",async(req, res) => {
        const newSpecs = req.body.newSpecs;
        const id = req.body.id;
        try{
            
          await InvMngmntModel.findById(id,(err, updatedSpecs)=>{
            updatedSpecs.specs = newSpecs;
            updatedSpecs.save();
            res.send("update");
                
        });
        }catch (err) {
            console.log(err);
        }
        }
    );

    app.put("/update/dept/:id",async(req, res) => {
        const newDept = req.body.newDept;
        const id = req.body.id;
        try{
            
          await InvMngmntModel.findById(id,(err, updatedDept)=>{
            updatedDept.department = newDept;
            updatedDept.save();
            res.send("update");
                
        });
        }catch (err) {
            console.log(err);
        }
        }
    );
    app.put("/update/date/:id",async(req, res) => {
        const newDate = req.body.newDate;
        const id = req.body.id;
        try{
            
          await InvMngmntModel.findById(id,(err, updatedDate)=>{
            updatedDate.date = newDate;
            updatedDate.save();
            res.send("update");
                
        });
        }catch (err) {
            console.log(err);
        }
        }
    );
    //////delete//////
    app.delete('/delete/:id' ,async(req, res) => {
        const id = req.params.id;
        await InvMngmntModel.findByIdAndRemove(id).exec();
        res.send("deleted");
        });
///////////tracking delete///////////
        app.post("/delete/:id", async(req, res) => {
            const id = req.params.id;
            const fullName= req.body.fullName
            const date = req.body.date
            InvMngmntModel.findById(id,(err,result)=> {
                if (err) {
                    res.send(err);
                }
                else{
                let deviceName = result.fullName;
                let deviceNumber = result.position;
        
                const InventoryHistory = new InvHistoryModel({
                    date:date ,fullName:fullName, method:"deleted:"+deviceName+" Position:"+deviceNumber });
                    try {
                        InventoryHistory.save(); 
                        res.send("inserted data");  
                    } catch (err) {
                        console.log(err)
                    }
                }
                
            })
            
        });

/////////////////////////////
app.get("/suggestion",(req,res)=> {
    
    Employeedb.find({},function(err,result){
        if(err) return res.json({success:false, error:err})
        return res.json({result,});
           
        })})

    module.exports = app;