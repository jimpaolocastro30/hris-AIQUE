const express = require ('express')
const app = express();

const EmployeeModel = require('../model/EmployeeModel')
const {Employeedb } = require('../model/EmployeeModel');
const InvMngmntModel = require('../model/InvMngmnt');
//import roleCheck from '../Routes/RoleCheck'
const roleCheck = require('../Routes/RoleCheck')
const {protect} =require('../Routes/RouteSec')
/*app.post("/employeeReg/insert", async(req, res) => {
    
    const position = req.body.position
    const department = req.body.department
    const immSuperior = req.body.immSuperior
    const EmPerToContact = req.body.EmPerToContact
    const sSS = req.body.sSS
    const pagIbig = req.body.pagIbig
    const tinId = req.body.tinId
    const empStatus = req.body.empStatus

    const Employee = new EmployeeModel({ position:position, department:department,
      immSuperior:immSuperior, EmPerToContact:EmPerToContact, sSS:sSS, pagIbig:pagIbig, tinId:tinId,
       empStatus:empStatus});
    try{
        await Employee.save(); 
        res.send("inserted data");  
    }catch (err) {
        console.log(err);
    }
});*/
app.get("/read",protect, async(req, res) => {
        
    Employeedb.find({},(err,result)=> {
        if (err) {
            res.send(err);
        }

        res.send(result);

    })
    
});

app.put("/update/department/:id", async(req, res) => {
    const newDepartment = req.body.newDepartment;
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, UpdatedDepartment)=>{
        UpdatedDepartment.department = newDepartment;
        UpdatedDepartment.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.put("/update/position/:id", async(req, res) => {
    const newPosition = req.body.newPosition;
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedPosition)=>{
        updatedPosition.position = newPosition;
        updatedPosition.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.put("/update/immSuperior/:id", async(req, res) => {
    const newSuperior = req.body.newSuperior;
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedSuperior)=>{
        updatedSuperior.immSuperior = newSuperior;
        updatedSuperior.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.put("/update/EmPerToContact/:id", async(req, res) => {
    const newPerContact = req.body.newPerContact;
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedPerContact)=>{
        updatedPerContact.EmPerToContact = newPerContact;
        updatedPerContact.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.put("/update/SSS/:id", async(req, res) => {
    const newSSS = req.body.newSSS;
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedSSS)=>{
        updatedSSS.sSS = newSSS;
        updatedSSS.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.put("/update/pagIbig/:id", async(req, res) => {
    const newPagIbig = req.body.newPagIbig;
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedPagIbig)=>{
        updatedPagIbig.pagIbig = newPagIbig;
        updatedPagIbig.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.put("/update/tinId/:id", async(req, res) => {
    const newTinID = req.body.newTinID;
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedTinID)=>{
        updatedTinID.tinId = newTinID;
        updatedTinID.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.put("/update/tinId/:id", async(req, res) => {
    const newTinID = req.body.newTinID;
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedTinID)=>{
        updatedTinID.tinId = newTinID;
        updatedTinID.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.put("/update/empStatus/:id", async(req, res) => {
    const newEmpStatus = req.body.newEmpStatus;
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedEmpStatus)=>{
        updatedEmpStatus.empStatus = newEmpStatus;
        updatedEmpStatus.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);
////////////////////////
app.put("/update/grossSalary/:id", async(req, res) => {
    const newGrossSalary = req.body.newGrossSalary;
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedGrossSalary)=>{
        updatedGrossSalary.grossSalary = newGrossSalary;
        updatedGrossSalary.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);
app.put("/update/monthlyBasic/:id", async(req, res) => {
    const newMonthlyBasic = req.body.newMonthlyBasic;
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedMonthlyBasic)=>{
        updatedMonthlyBasic.monthlyBasic = newMonthlyBasic;
        updatedMonthlyBasic.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.put("/update/allowance/:id", async(req, res) => {
    const newAllowance = req.body.newAllowance;
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedAllowance)=>{
        updatedAllowance.allowance = newAllowance;
        updatedAllowance.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.put("/update/employeeNum/:id", async(req, res) => {
    const newEmployeeNum = req.body.newEmployeeNum
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedEmployeeNum)=>{
        updatedEmployeeNum.employeeNum = newEmployeeNum;
        updatedEmployeeNum.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);

app.put("/update/hiredDate/:id", async(req, res) => {
    const newHiredDate = req.body.newHiredDate
    const id = req.body.id;

    try{
        
      await Employeedb.findById(id,(err, updatedHiredDate)=>{
        updatedHiredDate.hiredDate = newHiredDate;
        updatedHiredDate.save();
        res.send("update");
            
    });
    }catch (err) {
        console.log(err);
    }
    }
);
//////////////////
app.get("/read", async(req, res) => {
        
    Employeedb.find({},(err,result)=> {
        if (err) {
            res.send(err);
        }

        res.send(result);

    })
    
});

app.get("/EmpProf",(req,res)=> {
    let Emailad = req.query.Emailad;
    
    Employeedb.find({Emailad:Emailad},function(err,result){
        if(err) return res.json({success:false, error:err})
        return res.json({result});
    })
})
//////
app.get("/role/:id",(req,res)=> {
    const id = req.params.id;
    Employeedb.findById(id,function(err,idresult){
        if(err) return res.json({success:false, error:err})
        return res.json({Success:true, idresult});
        
    })
})
    
app.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id;
    await Employeedb.findByIdAndDelete(id).exec()
    return res.send('delete')
})

app.get('/getEquip', async(req, res)=>{
    let email = req.query.email
     InvMngmntModel.find({email:email},function(err, result){
        if(err){
            console.log(err)
        }else{
            res.json(result)
        }
    })
})


module.exports = app;