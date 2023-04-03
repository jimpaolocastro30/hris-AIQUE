const express = require ('express')
const app = express();
const Joi = require('joi');
const { Employeedb } = require('../model/EmployeeModel');
const RequestModel = require('../model/RequestModel')

app.post("/append", async(req, res)=>{
    const email = req.body.email
    const request = req.body.request
    const date = req.body.date

    const requests = new RequestModel({
        request:request, email:email, date:date
    })
    await requests.save()
    res.send('Inserted Data')

})
app.post("/forgotpass", async(req, res)=>{
    const email = req.body.email
    const date = req.body.date
    try {
        const emailSchema = Joi.object({
            Emailad: Joi.string().email().required().label("Email"),
            date : Joi.string().allow("").label("date")
        });
        const { error } = emailSchema.validate(req.body);
        let user = await Employeedb.findOne({ Emailad: req.body.Emailad });
        if (!user)
            return res
                .status(409)
                .send({ message: "User with given email does not exist!" });  
    else{
    const requests = new RequestModel({
        request:"is requesting a Password reset.", email:email, date:date
    })
    requests.save()
    res.send('Inserted Data')
    }
    } catch (err) {
        console.log(err)
    }
    
    
})


app.get('/show', async(req, res)=>{

    RequestModel.find({}, (err,result)=>{
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = app;
