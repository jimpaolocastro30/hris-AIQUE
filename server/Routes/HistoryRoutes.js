const express = require ('express');
const app = express();
const InvHistoryModel = require('../model/InvHistory');
const {InventoryModel} = require('../model/InventoryModel');
const InvMngmntModel = require('../model/InvMngmnt');
app.post("/insert", async(req, res) => {
    const fullName = req.body.fullName
    const method = req.body.method
    const date = req.body.date
    

    const InventoryHistory = new InvHistoryModel({
    date:date ,fullName:fullName, method:method });
    try{
        await InventoryHistory.save(); 
        res.send("inserted data");  
    }catch (err) {
        console.log(err);
    }
});

app.get("/read", async(req, res) => {
        
    InvHistoryModel.find({},(err,result)=> {
        if (err) {
            res.send(err);
        }
           res.send(result); 
        

    })
    
});
///device update
app.post("/Updatedev/:id", async(req, res) => {
    const id = req.params.id
    const fullName= req.body.fullName
    const method = req.body.method
    const date = req.body.date
    const devbefore = req.body.devbefore
    const condition = req.body.condition
    InventoryModel.findById(id,(err,result)=> {
        if (err) {
            res.send(err);
        }else{
        let upDevice = result.device
        const InventoryHistory = new InvHistoryModel({
            date:date ,fullName:fullName, method:"Update Device:"+devbefore+" to:"+method });
        try {
            InventoryHistory.save(); 
            res.send("inserted data"); 
        } catch (error) {
            console.log(err) 
        }
        }
    
        
    })
    
});
///update device number
app.post("/UpdateDevNum/:id", async(req, res) => {
    const id = req.params.id
    const fullName= req.body.fullName
    const method = req.body.method
    const date = req.body.date
    const devbefore = req.body.devbefore

    InventoryModel.findById(id,(err,result)=> {
        if (err) {
            res.send(err);
        }else{
        let upDevice = result.deviceNum
        const InventoryHistory = new InvHistoryModel({
            date:date ,fullName:fullName, method:"Update Device Number:"+devbefore+" to:"+method });
        try {
            InventoryHistory.save(); 
            res.send("inserted data"); 
        } catch (error) {
            console.log(err) 
        }
        }
    
        
    })
    
});

app.post("/UpdateStatus/:id", async(req, res) => {
    const id = req.params.id
    const fullName= req.body.fullName
    const method = req.body.method
    const date = req.body.date
    const devbefore = req.body.devbefore

    InventoryModel.findById(id,(err,result)=> {
        if (err) {
            res.send(err);
        }else{
        let upDevice = result.Status
        const InventoryHistory = new InvHistoryModel({
            date:date ,fullName:fullName, method:"Update Status:"+devbefore+" to:"+method });
        try {
            InventoryHistory.save(); 
            res.send("inserted data"); 
        } catch (error) {
            console.log(err) 
        }
        }
    
        
    })
    
});
app.post("/UpdateSpec/:id", async(req, res) => {
    const id = req.params.id
    const fullName= req.body.fullName
    const method = req.body.method
    const date = req.body.date
    const devbefore = req.body.devbefore

    InventoryModel.findById(id,(err,result)=> {
        if (err) {
            res.send(err);
        }else{
        let upDevice = result.spec
        const InventoryHistory = new InvHistoryModel({
            date:date ,fullName:fullName, method:"Update Specifications:"+devbefore+" to:"+method });
        try {
            InventoryHistory.save(); 
            res.send("inserted data"); 
        } catch (error) {
            console.log(err) 
        }
        }
    
        
    })
    
});

app.post("/UpdateProvider/:id", async(req, res) => {
    const id = req.params.id
    const fullName= req.body.fullName
    const method = req.body.method
    const date = req.body.date
    const devbefore = req.body.devbefore

    InventoryModel.findById(id,(err,result)=> {
        if (err) {
            res.send(err);
        }else{
        let upDevice = result.provider
        const InventoryHistory = new InvHistoryModel({
            date:date ,fullName:fullName, method:"Update provider:"+devbefore+" to:"+method });
        try {
            InventoryHistory.save(); 
            res.send("inserted data"); 
        } catch (error) {
            console.log(err) 
        }
        }
        
    })
    
});

app.post("/UpdatePrice/:id", async(req, res) => {
    const id = req.params.id
    const fullName= req.body.fullName
    const method = req.body.method
    const date = req.body.date
    const devbefore = req.body.devbefore

    InventoryModel.findById(id,(err,result)=> {
        if (err) {
            res.send(err);
        }else{
        let upDevice = result.price
        const InventoryHistory = new InvHistoryModel({
            date:date ,fullName:fullName, method:"Update Price:"+devbefore+" to:"+method });
        try {
            InventoryHistory.save(); 
            res.send("inserted data"); 
        } catch (error) {
            console.log(err) 
        }
        }
        
    })
    
});
app.post("/UpdateDate/:id", async(req, res) => {
    const id = req.params.id
    const fullName= req.body.fullName
    const method = req.body.method
    const date = req.body.date
    const devbefore = req.body.devbefore

    InventoryModel.findById(id,(err,result)=> {
        if (err) {
            res.send(err);
        }else{
        let upDevice = result.date
        const InventoryHistory = new InvHistoryModel({
            date:date ,fullName:fullName, method:"Update Date:"+devbefore+" to:"+method });
        try {
            InventoryHistory.save(); 
            res.send("inserted data"); 
        } catch (error) {
            console.log(err) 
        }
        }
        
    })
    
});

////////////History Update for Inv Management///////////////

app.post("/UpdateDevices/:id", async(req, res) => {
    const id = req.params.id
    const fullName= req.body.fullName
    const method = req.body.method
    const date = req.body.date
    const devbefore = req.body.devbefore

        const InventoryHistory = new InvHistoryModel({
            date:date ,fullName:fullName, method:"Update Devices:"+devbefore+" to:"+method });
        try {
            InventoryHistory.save(); 
            res.send("inserted data"); 
        } catch (error) {
            console.log(err) 
        }
        
        
    })
    
    app.post("/UpdateInvName/:id", async(req, res) => {
        const id = req.params.id
        const fullName= req.body.fullName
        const method = req.body.method
        const date = req.body.date
        const devbefore = req.body.devbefore
    
            const InventoryHistory = new InvHistoryModel({
                date:date ,fullName:fullName, method:"Update Name:"+devbefore+" to:"+method });
            try {
                InventoryHistory.save(); 
                res.send("inserted data"); 
            } catch (error) {
                console.log(err) 
            }
            
            
        })
    
        app.post("/UpdateInvEmail/:id", async(req, res) => {
        const id = req.params.id
        const fullName= req.body.fullName
        const method = req.body.method
        const date = req.body.date
        const devbefore = req.body.devbefore
    
            const InventoryHistory = new InvHistoryModel({
                date:date ,fullName:fullName, method:"Update Email:"+devbefore+" to:"+method });
            try {
                InventoryHistory.save(); 
                res.send("inserted data"); 
            } catch (error) {
                console.log(err) 
            }
            
            
        })
    
    
        app.post("/UpdateInvSpecs/:id", async(req, res) => {
            const id = req.params.id
            const fullName= req.body.fullName
            const method = req.body.method
            const date = req.body.date
            const devbefore = req.body.devbefore
        
                const InventoryHistory = new InvHistoryModel({
                    date:date ,fullName:fullName, method:"Update Specs:"+devbefore+" to:"+method });
                try {
                    InventoryHistory.save(); 
                    res.send("inserted data"); 
                } catch (error) {
                    console.log(err) 
                }
                
                
            })
            app.post("/UpdateInvPosition/:id", async(req, res) => {
                const id = req.params.id
                const fullName= req.body.fullName
                const method = req.body.method
                const date = req.body.date
                const devbefore = req.body.devbefore
            
                    const InventoryHistory = new InvHistoryModel({
                        date:date ,fullName:fullName, method:"Update Position:"+devbefore+" to:"+method });
                    try {
                        InventoryHistory.save(); 
                        res.send("inserted data"); 
                    } catch (error) {
                        console.log(err) 
                    }
                    
                    
                })
                app.post("/UpdateInvDept/:id", async(req, res) => {
                    const id = req.params.id
                    const fullName= req.body.fullName
                    const method = req.body.method
                    const date = req.body.date
                    const devbefore = req.body.devbefore
                
                        const InventoryHistory = new InvHistoryModel({
                            date:date ,fullName:fullName, method:"Update Department:"+devbefore+" to:"+method });
                        try {
                            InventoryHistory.save(); 
                            res.send("inserted data"); 
                        } catch (error) {
                            console.log(err) 
                        }
                        
                        
                    })
                    app.post("/UpdateInvDevNums/:id", async(req, res) => {
                        const id = req.params.id
                        const fullName= req.body.fullName
                        const method = req.body.method
                        const date = req.body.date
                        const devbefore = req.body.devbefore
                    
                            const InventoryHistory = new InvHistoryModel({
                                date:date ,fullName:fullName, method:"Update device Numbers:"+devbefore+" to:"+method });
                            try {
                                InventoryHistory.save(); 
                                res.send("inserted data"); 
                            } catch (error) {
                                console.log(err) 
                            }
                            
                            
                        })

                        app.post("/UpdateInvDate/:id", async(req, res) => {
                            const id = req.params.id
                            const fullName= req.body.fullName
                            const method = req.body.method
                            const date = req.body.date
                            const devbefore = req.body.devbefore
                        
                                const InventoryHistory = new InvHistoryModel({
                                    date:date ,fullName:fullName, method:"Update date:"+devbefore+" to:"+method });
                                try {
                                    InventoryHistory.save(); 
                                    res.send("inserted data"); 
                                } catch (error) {
                                    console.log(err) 
                                }
                                
                                
                            })

module.exports = app;