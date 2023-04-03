const mongoose = require('mongoose')

const payrollSchema = new mongoose.Schema({
employee:{
     type: String,
},
employeeNum:{
     type: String,
},
position:{
    type: String,
},
empStatus:{
    type: String,
},
hiredDate:{
    type: String
},

grossSalary: {
    type: Number,
    
},
monthlyBasic: {
    type: Number,
    
},
allowance: {
    type: Number,
    
},
semiMonthlyPay: {
    type: Number,
    
},
dailyRatePay: {
    type: Number,
    
},
regularHoursPay: {
    type: Number,
    
},
dailyAllowance: {
    type: Number,
    
},
hourlyAllowance: {
    type: Number,
    
},
semiAllowance: {
    type: Number,
    
},
dateRelease: {
    type: String,
    
},
cutoff: {
    type: Number,
    
},
cutoffDay: {
    type: String,
    
},
paymentMode: {
    type: String,
    
},
absencesDays: {
    type: Number,
    
},
tardinessMin: {
    type: Number,
    
},
daysPaid: {
    type: Number,
    
},
vlCredit: {
   
    type: Number,
    default:0
},
slCredit: {
    type: Number,
    default:0
},
regularOT: {
    type: Number,
    
},
restdayOT: {
    type: Number,
    
},
specialHoliday: {
    type: Number,
    
},
regularHoliday: {
    type: Number,
    
},
nightDiff: {
    type: Number,
    
},
basicSalary: {
    type: Number,
    
},
sssContribution: {
    type: Number,
    
},
hdmfContribution: {
    type: Number,
    
},
philHealth: {
    type: Number,
    
},
taxDeduction: {
    type: Number,
    
},
absences: {
    type: Number,
    
},
tardiness: {
    type: Number,
    
},
charges: {
    type: Number,
    
},
SSSSALLOAN: {
    type: Number,
    
},

SSSCALLOAN: {
    type: Number,
    
},
SSSINVLOAN: {
    type: Number,
    
},
HDMFSALLOAN: {
    type: Number,
    
},
HDMFCALLOAN: {
    type: Number,
    
},
HDMFHSELOAN: {
    type: Number,
    
},
finalBasic: {
    type: Number,
    
},
finalAllowance: {
    type: Number,
    
},
finalGrossTotal: {
    type: Number,
    
},
finalContribution: {
    type: Number,
    
},
netpay: {
    type: Number,
    
},
remarks: {
    type: String,
    
},
adjusments:{
    type:String,
},
refunds:{
    type:String,
},
personalLoan:{
    type:Number,
},
otherDeductions:{
    type:Number,
}


});

const payrollModel = mongoose.model("Payroll", payrollSchema);
module.exports = payrollModel
