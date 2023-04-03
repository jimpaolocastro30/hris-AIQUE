const express = require ('express');
const payrollModel = require('../model/PayrollModel');
const employeeDB = require('../model/EmployeeModel')
const app = express();
const PDFDocument = require('pdfkit');
const fs = require('fs')
    //////Create//////
    app.post("/insert", async(req, res) => {
        
        const employee = req.body.employee
        const employeeNum  = req.body.employeeNum
        const position  = req.body.position
        const grossSalary = req.body.grossSalary
        const monthlyBasic = req.body.monthlyBasic
        const allowance = req.body.allowance
        const semiMonthlyPay = req.body.semiMonthlyPay
        const dailyRatePay = req.body.dailyRatePay
        const regularHoursPay = req.body.regularHoursPay
        const dailyAllowance = req.body.dailyAllowance
        const hourlyAllowance = req.body.hourlyAllowance
        const semiAllowance = req.body.semiAllowance
        const dateRelease = req.body.dateRelease
        const cutoff = req.body.cutoff
        const cutoffDay = req.body.cutoffDay
        const paymentMode = req.body.paymentMode
        const absencesDays = req.body.absencesDays
        const tardinessMin = req.body.tardinessMin
        const daysPaid = req.body.daysPaid
        const vlCredit = req.body.vlCredit
        const slCredit = req.body.slCredit
        const regularOT = req.body.regularOT
        const restdayOT = req.body.restdayOT
        const specialHoliday = req.body.specialHoliday
        const nightDiff = req.body.nightDiff
        const basicSalary = req.body.restdayOT
        const sssContribution = req.body.sssContribution
        const hdmfContribution = req.body.hdmfContribution
        const philHealth = req.body.philHealth
        const taxDeduction = req.body.taxDeduction
        const absences = req.body.absences
        const tardiness = req.body.tardiness
        const charges = req.body.charges
        const SSSSALLOAN = req.body.SSSSALLOAN
        const SSSCALLOAN = req.body.SSSCALLOAN
        const SSSINVLOAN = req.body.SSSINVLOAN
        const SSSHSELOAN = req.body.SSSHSELOAN
        const HDMFSALLOAN = req.body.HDMFSALLOAN
        const SSSEDULOAN = req.body.SSSEDULOAN
        const HDMFCALLOAN = req.body.HDMFCALLOAN
        const HDMFHSELOAN = req.body.HDMFHSELOAN
        const finalBasic = req.body.finalBasic
        const finalAllowance = req.body.finalAllowance
        const finalGrossTotal = req.body.finalGrossTotal
        const finalContribution = req.body.finalContribution
        const finalDeduction = req.body.finalDeduction
        const netpay = req.body.netpay
        const remarks = req.body.remarks
        const empStatus = req.body.empStatus
        const hiredDate= req.body.hiredDate
        const personalLoan= req.body.personalLoan
        const vlCreditPast = req.body.vlCreditPast
        const slCreditPast = req.body.slCreditPast
        const finalAdjusments = req.body.finalAdjusments
        const refunds = req.body.refunds
        let trueVl = vlCredit+vlCreditPast
        let trueSl = slCredit+slCreditPast
        
        const Payroll = new payrollModel({ employee:employee, employeeNum:employeeNum,
        grossSalary: grossSalary, position:position,
        monthlyBasic:monthlyBasic, allowance:allowance,
        semiMonthlyPay:semiMonthlyPay, dailyRatePay:dailyRatePay,
        regularHoursPay:regularHoursPay ,dailyAllowance:dailyAllowance, hourlyAllowance:hourlyAllowance,
        semiAllowance:semiAllowance, dateRelease:dateRelease, cutoff:cutoff, cutoffDay:cutoffDay,
        paymentMode:paymentMode, absencesDays:absencesDays, tardinessMin:tardinessMin, daysPaid:daysPaid,
        vlCredit:trueVl, slCredit:trueSl, regularOT:regularOT, restdayOT:restdayOT,
        specialHoliday:specialHoliday, nightDiff:nightDiff, basicSalary:finalBasic,
        sssContribution:sssContribution, hdmfContribution:hdmfContribution, philHealth:philHealth,
        taxDeduction:taxDeduction, absences:absences, tardiness:tardiness, 
        charges:charges, SSSSALLOAN:SSSSALLOAN, SSSCALLOAN:SSSCALLOAN,
        SSSINVLOAN:SSSINVLOAN, SSSHSELOAN:SSSHSELOAN, HDMFSALLOAN:HDMFSALLOAN,
        SSSEDULOAN:SSSEDULOAN, HDMFCALLOAN:HDMFCALLOAN, HDMFHSELOAN:HDMFHSELOAN,
        finalBasic:finalBasic, finalAllowance:finalAllowance, finalGrossTotal:finalGrossTotal,
        finalContribution:finalContribution, finalDeduction:finalDeduction, netpay:netpay,
        remarks:remarks, empStatus:empStatus, hiredDate:hiredDate, personalLoan:personalLoan, adjusments:finalAdjusments,
        refunds:refunds

    });
        try{
            await Payroll.save(); 
            res.send("inserted data");  
        }catch (err) {
            console.log(err);
        }
    });

    app.get("/read",(req,res)=> {
        let employeeNum = req.query.employeeNum;
                   
       payrollModel.findOne({employeeNum:employeeNum},function(err,result){
          if(err) return res.json({success:false, error:err})
            return res.json({result});
                          
                       }).sort({$natural:-1})
                    })

    app.get('/VlCred/', async(req, res)=>{
        let employeeNum = req.query.employeeNum
        
        payrollModel.findOne({employeeNum:employeeNum}, (err, result)=>{
            if (err) {
                console.log(err)
            }else{
              res.send({result})
            }
        }).sort({$natural:-1})
    })

    /*app.post('/pdf',async(req, res)=>{
        
        payrollModel.find({employeeNum:employeeNum}, (err, result)=>{
            if (err) {
                console.log(err)
            }else{
              res.send({result})
            
              
            }
        }).limit(1).sort({$natural:-1})

    })*/
    app.post('/pdf',async(req, res)=>{
       
        const doc = new PDFDocument();
  
        // Saving the pdf file in root directory.
        doc.pipe(fs.createWriteStream('example.pdf'));
          
        // Adding functionality
        doc
           
          .fontSize(27)
          .text('This the article for GeeksforGeeks', 100, 100);
          
        // Adding an image in the pdf.
          
         
          
          doc
          .addPage()
          .fontSize(15)
          .text('Generating PDF with the help of pdfkit', 100, 100);
           
          
           
        // Apply some transforms and render an SVG path with the 
        // 'even-odd' fill rule
        doc
          .scale(0.6)
          .translate(470, -380)
          .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
          .fill('red', 'even-odd')
          .restore();
           
        // Add some text with annotations
        doc
          .addPage()
          .fillColor('blue')
          .text('The link for GeeksforGeeks website', 100, 100)
            
          .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');
           
        // Finalize PDF file
        doc.end();
    })
   /* app.get("/SSS", async(req, res)=>{
        let monthly = req.body.monthly;
        console.log()
         await payrollModel.aggregate([{$project:{
            range:{
            "basicMonth":{
                $switch:{
                    branches:[
                            {case:{$lte:[monthly, 4248]}, then:570},
                            {case:{$and:[{$gte:[monthly,4250]},{ $lte: [ monthly, 4749 ] }]}, then:640},
                            {case:{$and:[{$gte:[monthly,4750]},{$lte: [ monthly, 5249 ] }]}, then:710},
                            {case:{$and:[{$gte:[monthly,5250]},{$lte: [ monthly, 5749 ] }]}, then:780},
                            {case:{$and:[{$gte:[monthly,5750]},{$lte: [ monthly, 6249 ] }]}, then:850},
                            {case:{$and:[{$gte:[monthly,6250]},{$lte: [ monthly, 6749 ] }]}, then:920},
                            {case:{$and:[{$gte:[monthly,6750]},{$lte: [ monthly, 7249 ] }]}, then:990},
                            {case:{$and:[{$gte:[monthly,7250]},{$lte: [ monthly, 7749 ] }]}, then:1060},
                            {case:{$and:[{$gte:[monthly,7750]},{$lte: [ monthly, 8249 ] }]}, then:1130},
                            {case:{$and:[{$gte:[monthly,8250]},{$lte: [ monthly, 8749 ] }]}, then:1200},
                            {case:{$and:[{$gte:[monthly,8750]},{$lte: [ monthly, 9249 ] }]}, then:1270},
                            {case:{$and:[{$gte:[monthly,9250]},{$lte: [ monthly, 9749 ] }]}, then:1340},
                            {case:{$and:[{$gte:[monthly,9750]},{$lte: [ monthly, 10249 ] }]}, then:1410},
                            {case:{$and:[{$gte:[monthly,10250]},{$lte: [ monthly, 10749 ] }]}, then:1480},
                            {case:{$and:[{$gte:[monthly,10750]},{$lte: [ monthly, 11249 ] }]}, then:1550},
                            {case:{$and:[{$gte:[monthly,11250]},{$lte: [ monthly, 11749 ] }]}, then:1620},
                            {case:{$and:[{$gte:[monthly,11750]},{$lte: [ monthly, 12249 ] }]}, then:1690},
                            {case:{$and:[{$gte:[monthly,12250]},{$lte: [ monthly, 12749 ] }]}, then:1760},
                            {case:{$and:[{$gte:[monthly,12750]},{$lte: [ monthly, 13249 ] }]}, then:1830},
                            {case:{$and:[{$gte:[monthly,13250]},{$lte: [ monthly, 13749 ] }]}, then:1900},
                            {case:{$and:[{$gte:[monthly,13750]},{$lte: [ monthly, 14249 ] }]}, then:1970},
                            {case:{$and:[{$gte:[monthly,14250]},{$lte: [ monthly, 14749 ] }]}, then:2040},
                            {case:{$and:[{$gte:[monthly,14750]},{$lte: [ monthly, 15249 ] }]}, then:2130},
                            {case:{$and:[{$gte:[monthly,15250]},{$lte: [ monthly, 15749 ] }]}, then:2200},
                            {case:{$and:[{$gte:[monthly,15750]},{$lte: [ monthly, 16249 ] }]}, then:2270},
                            {case:{$and:[{$gte:[monthly,16250]},{$lte: [ monthly, 16749 ] }]}, then:2340},
                            {case:{$and:[{$gte:[monthly,16750]},{$lte: [ monthly, 17249 ] }]}, then:2410},
                            {case:{$and:[{$gte:[monthly,17250]},{$lte: [ monthly, 17749 ] }]}, then:2480},
                            {case:{$and:[{$gte:[monthly,17750]},{$lte: [ monthly, 18249 ] }]}, then:2550},
                            {case:{$and:[{$gte:[monthly,18250]},{$lte: [ monthly, 18749 ] }]}, then:2620},
                            {case:{$and:[{$gte:[monthly,18750]},{$lte: [ monthly, 19249 ] }]}, then:2690},
                            {case:{$and:[{$gte:[monthly,19250]},{$lte: [ monthly, 19749 ] }]}, then:2760},
                            {case:{$and:[{$gte:[monthly,19750]},{$lte: [ monthly, 20249 ] }]}, then:2830},
                            {case:{$and:[{$gte:[monthly,20250]},{$lte: [ monthly, 20749 ] }]}, then:2900},
                            {case:{$and:[{$gte:[monthly,20750]},{$lte: [ monthly, 21249 ] }]}, then:2970},
                            {case:{$and:[{$gte:[monthly,21250]},{$lte: [ monthly, 21749 ] }]}, then:3040},
                            {case:{$and:[{$gte:[monthly,21750]},{$lte: [ monthly, 22249 ] }]}, then:3110},
                            {case:{$and:[{$gte:[monthly,22250]},{$lte: [ monthly, 22749 ] }]}, then:3180},
                            {case:{$and:[{$gte:[monthly,22750]},{$lte: [ monthly, 23249 ] }]}, then:3250},
                            {case:{$and:[{$gte:[monthly,23250]},{$lte: [ monthly, 23749 ] }]}, then:3320},
                            {case:{$and:[{$gte:[monthly,23750]},{$lte: [ monthly, 24249 ] }]}, then:3390},
                            {case:{$and:[{$gte:[monthly,24250]},{$lte: [ monthly, 24749 ] }]}, then:3460},
                            {case:{$and:[{$gte:[monthly,24750]},{$lte: [ monthly, 25249 ] }]}, then:3530},
                            {case:{$and:[{$gte:[monthly,25250]},{$lte: [ monthly, 25749 ] }]}, then:3600},
                            {case:{$and:[{$gte:[monthly,25750]},{$lte: [ monthly, 26249 ] }]}, then:3670},
                            {case:{$and:[{$gte:[monthly,26250]},{$lte: [ monthly, 26749 ] }]}, then:3740},
                            {case:{$and:[{$gte:[monthly,26750]},{$lte: [ monthly, 27249 ] }]}, then:3810},
                            {case:{$and:[{$gte:[monthly,27250]},{$lte: [ monthly, 27749 ] }]}, then:3880},
                            {case:{$and:[{$gte:[monthly,27750]},{$lte: [ monthly, 28249 ] }]}, then:3950},
                            {case:{$and:[{$gte:[monthly,28250]},{$lte: [ monthly, 28749 ] }]}, then:4020},
                            {case:{$and:[{$gte:[monthly,28750]},{$lte: [ monthly, 29249 ] }]}, then:4090},
                            {case:{$and:[{$gte:[monthly,29250]},{$lte: [ monthly, 29749 ] }]}, then:4160},
                            {case:{$and:[{$gte:[monthly,29750]}]}, then:4230},
                    ]
                }}
        }}}],
        function(err,result){
            if(err) return res.json({success:false, error:err})
              return res.json({result});}
        )
        });*/
        


module.exports = app