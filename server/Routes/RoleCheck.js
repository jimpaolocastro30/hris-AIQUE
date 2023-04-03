

const express = require ('express');
const app = express();
const {Employeedb} = require('../model/EmployeeModel');
const roleCheck =()=>{
app.post("/",(req,res,next)=> {
    let role = req.query.role;
    
    Employeedb.find({role:role},function(err,result){
        if(err) return res.json({success:false, error:err})
        if(role == "Employee"){
        return res.json({result,});
           
    }
    else(
       res.status(404).send("Not Authorized, Admin only")
    )

    })

    
    

})}





   

module.exports= app;