const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const Joi = require("joi")
const passwordComplexity = require("joi-password-complexity");



const EmployeeSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required:true,
    },
    MiddleName:{
        type:String,
       required:true,
    
    },
    LastName:{
        type: String,
        required: true,
    },
    ContactNo:{
        type: Number,
        required:true,
    },
    Emailad:{
        type: String,
        require:true,
    },
    password: {
        type: String,
        require: true
    },
    position:{
        type: String,
        
    },
    department: {
        type: String,
        
    },
    immSuperior: {
        type: String,
        
    },
    EmPerToContact: {
        type: String,
        
    },
    sSS: {
        type: String,
        
    },
    pagIbig: {
        type: String,
        
    },
    tinId: {
        type: String,
        
    },
    empStatus: {
        type: String,
        default:"not Regular"
    },
    role: {
        type: String,
       default:"Employee"
    },
    grossSalary:{
        type:Number,
    
    },
    monthlyBasic:{
        type:Number,
    
    },
    allowance:{
        type:Number,
    
    },
    employeeNum:{
        type:String,
    
    },
    hiredDate:{
        type:String,
    
    },
    semiMonthlyPay:{
        type:Number,
    
    },
    dailyRatePay:{
        type:Number,
    
    },
    regularHoursPay:{
        type:Number,
    
    },
    dailyAllowance:{
        type:Number,
    
    },
    hourlyAllowance:{
        type:Number,
    
    },
    semiAllowance:{
        type:Number,
    
    },
    verified: { 
        type: Boolean,
         default: false 
        },
    },
    
    );

    EmployeeSchema.methods.generateAuthToken = function () {
        const token = jwt.sign({ _id: this._id, role: this.role }, process.env.JWTPRIVATEKEY, {
            expiresIn: "1d",
        });
        return token;
    };


const validate = (data) => {
	const schema = Joi.object({
		FirstName: Joi.string().required().label("First Name"),
        MiddleName: Joi.string().required().label("Middle Name"),
		LastName: Joi.string().required().label("Last Name"),
        ContactNo: Joi.string().required().label("Contact Number"),
		Emailad: Joi.string().email().required().label("Emailad"),
		password: passwordComplexity().required().label("password"),
        position: Joi.string().allow('').label("position"),
        department: Joi.string().allow('').label("department"),
        immSuperior: Joi.string().allow('').label("immidiate Superior"),
        EmPerToContact: Joi.string().allow('').label("Emergency person to Contact"),
        sSS: Joi.string().allow('').label("SSS"),
        pagIbig: Joi.string().allow('').label("Pag ibig"),
        tinId: Joi.string().allow('').label("TIN ID"),
        empStatus: Joi.string().allow('').label("Employee Status"),
        grossSalary:Joi.string().allow('').label("grossSalary"),
        monthlyBasic:Joi.string().allow('').label("monthlyBasic"),
        allowance:Joi.string().allow('').label("allowance"),
        role: Joi.string().allow('').label("role"),
        employeeNum:Joi.string().allow('').label("Employee Number"),
        hiredDate:Joi.string().allow('').label("Hired Date"),
        semiMonthlyPay:Joi.string().allow('').label("semiMonthlyPay"),
        dailyRatePay:Joi.string().allow('').label("dailyRatePay"),
        regularHoursPay:Joi.string().allow('').label("regularHoursPay"),
        dailyAllowance:Joi.string().allow('').label("dailyAllowance"),
        hourlyAllowance:Joi.string().allow('').label("hourlyAllowance"),
        semiAllowance:Joi.string().allow('').label("semiAllowance"),
	});
	return schema.validate(data);
};
    const Employeedb = mongoose.model("Employee", EmployeeSchema);
    const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
    module.exports = Employeedb
    
    module.exports = EmployeeModel

    module.exports= {Employeedb, validate};
    