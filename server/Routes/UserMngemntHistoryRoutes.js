const express = require ('express');
const { populate } = require('../model/EmployeeHistoryModel');
const app = express();
const UserMngmntHistoryModel = require('../model/EmployeeHistoryModel');

app.post("/insert", async(req, res) => {
    const fullName = req.body.fullName
    const method = req.body.method
    const date = req.body.date
    

    const UserMngmntHistory = new UserMngmntHistoryModel({
    date:date ,fullName:fullName, method:method });
    try{
        await  UserMngmntHistory.save(); 
        res.send("inserted data");  
    }catch (err) {
        console.log(err);
    }
});

app.get("/read", async(req, res) => {
        
    UserMngmntHistoryModel.find({},(err,result)=> {
        if (err) {
            res.send(err);
        }
           res.send(result); 
        

    })
    
});

app.post("/delete/:id", async(req, res) => {
    const id = req.params.id
    const fullName= req.body.fullName
    const method = req.body.method
    const date = req.body.date
    const devbefore = req.body.devbefore
    
        const UserHistory = new UserMngmntHistoryModel({
            date:date ,fullName:fullName, method:"Deleted Name:"+method+" Email:"+devbefore });
        try {
            UserHistory.save(); 
            res.send("inserted data"); 
        } catch (error) {
            console.log(err) 
        }
        
        
    })

    app.post("/updateFirst/:id", async(req, res) => {
        const id = req.params.id
        const fullName= req.body.fullName
        const method = req.body.method
        const date = req.body.date
        const devbefore = req.body.devbefore
        
            const UserHistory = new UserMngmntHistoryModel({
                date:date ,fullName:fullName, method:"Deleted Name:"+method+" Email:"+devbefore });
            try {
                UserHistory.save(); 
                res.send("inserted data"); 
            } catch (error) {
                console.log(err) 
            }
            
            
        })
    
        app.post("/updateDept/:id", async(req, res) => {
            const id = req.params.id
            const fullName= req.body.fullName
            const method = req.body.method
            const date = req.body.date
            const devbefore = req.body.devbefore
            
                const UserHistory = new UserMngmntHistoryModel({
                    date:date ,fullName:fullName, method:"Update Department:"+devbefore+" to:"+method });
                try {
                    UserHistory.save(); 
                    res.send("inserted data"); 
                } catch (error) {
                    console.log(err) 
                }
                
                
            })

            app.post("/updatePosition/:id", async(req, res) => {
                const id = req.params.id
                const fullName= req.body.fullName
                const method = req.body.method
                const date = req.body.date
                const devbefore = req.body.devbefore
                
                    const UserHistory = new UserMngmntHistoryModel({
                        date:date ,fullName:fullName, method:"Update Position:"+devbefore+" to:"+method });
                    try {
                        UserHistory.save(); 
                        res.send("inserted data"); 
                    } catch (error) {
                        console.log(err) 
                    }
                    
                    
                })
    
                app.post("/updateSuperior/:id", async(req, res) => {
                    const id = req.params.id
                    const fullName= req.body.fullName
                    const method = req.body.method
                    const date = req.body.date
                    const devbefore = req.body.devbefore
                    
                        const UserHistory = new UserMngmntHistoryModel({
                            date:date ,fullName:fullName, method:"Update Immediate Superior:"+devbefore+" to:"+method });
                        try {
                            UserHistory.save(); 
                            res.send("inserted data"); 
                        } catch (error) {
                            console.log(err) 
                        }
                        
                        
                    })

                    app.post("/updateEmPerToContact/:id", async(req, res) => {
                        const id = req.params.id
                        const fullName= req.body.fullName
                        const method = req.body.method
                        const date = req.body.date
                        const devbefore = req.body.devbefore
                        
                            const UserHistory = new UserMngmntHistoryModel({
                                date:date ,fullName:fullName, method:"Update emergency person to contact:"+devbefore+" to:"+method });
                            try {
                                UserHistory.save(); 
                                res.send("inserted data"); 
                            } catch (error) {
                                console.log(err) 
                            }
                            
                            
                        })
                        app.post("/updateSSS/:id", async(req, res) => {
                            const id = req.params.id
                            const fullName= req.body.fullName
                            const method = req.body.method
                            const date = req.body.date
                            const devbefore = req.body.devbefore
                            
                                const UserHistory = new UserMngmntHistoryModel({
                                    date:date ,fullName:fullName, method:"Update SSS:"+devbefore+" to:"+method });
                                try {
                                    UserHistory.save(); 
                                    res.send("inserted data"); 
                                } catch (error) {
                                    console.log(err) 
                                }
                                
                                
                            })
                            app.post("/updatePagibig/:id", async(req, res) => {
                                const id = req.params.id
                                const fullName= req.body.fullName
                                const method = req.body.method
                                const date = req.body.date
                                const devbefore = req.body.devbefore
                                
                                    const UserHistory = new UserMngmntHistoryModel({
                                        date:date ,fullName:fullName, method:"Update Pag-Ibig:"+devbefore+" to:"+method });
                                    try {
                                        UserHistory.save(); 
                                        res.send("inserted data"); 
                                    } catch (error) {
                                        console.log(err) 
                                    }
                                    
                                    
                                })
                                app.post("/updateTinID/:id", async(req, res) => {
                                    const id = req.params.id
                                    const fullName= req.body.fullName
                                    const method = req.body.method
                                    const date = req.body.date
                                    const devbefore = req.body.devbefore
                                    
                                        const UserHistory = new UserMngmntHistoryModel({
                                            date:date ,fullName:fullName, method:"Update Tin ID:"+devbefore+" to:"+method });
                                        try {
                                            UserHistory.save(); 
                                            res.send("inserted data"); 
                                        } catch (error) {
                                            console.log(err) 
                                        }
                                        
                                        
                                    })
                                
                                    app.post("/updateStatus/:id", async(req, res) => {
                                        const id = req.params.id
                                        const fullName= req.body.fullName
                                        const method = req.body.method
                                        const date = req.body.date
                                        const devbefore = req.body.devbefore
                                        
                                            const UserHistory = new UserMngmntHistoryModel({
                                                date:date ,fullName:fullName, method:"Update Employee Status:"+devbefore+" to:"+method });
                                            try {
                                                UserHistory.save(); 
                                                res.send("inserted data"); 
                                            } catch (error) {
                                                console.log(err) 
                                            }
                                            
                                            
                                        })
                                    
        


module.exports = app;