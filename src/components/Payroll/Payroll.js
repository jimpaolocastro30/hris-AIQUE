import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBInput, MDBRow, MDBTable, MDBTableBody, MDBTableHead, MDBTextArea } from 'mdb-react-ui-kit'
import Auth from '../auth/Auth';
import Blink from 'react-blink-text'
import SidebarV2 from '../Sidebar/SidebarV2';
import Axios from'axios'
import {useEffect, useState }from 'react'
import'./Payroll.css'
import axios from 'axios';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Payslip from './Payslip';
import MyDocument from './Payslip';
import { Link } from 'react-router-dom';
//import {Page, Text, Image, Document, StyleSheet, View } from '@react-pdf/renderer'

const PayrollPage=()=>{
const [isSaved, setIsSaved] = useState(false)

const[sugg, setSugg] = useState([])
const [users, setUsers]= useState('')
const[suggText, setSuggText] = useState('')
const[email, setEmail] = useState('')
const handleSuggestion=(suggText)=>{
    let matches = []
    if(suggText.length>0){
      matches = users.filter(user=>{
        const regex = new RegExp(`${suggText}`,"gi");
        return user.Emailad.match(regex)
      })
    }
      setSugg(matches)
      setSuggText(suggText)
  }
  function handleSelected(email, name, position,hiredDate,
     employeeNum, allowance, monthlyBasic, empStatus
     ){
    setSuggText(email)
    setEmail(email)
    setEmployeeName(name)
    setPosition(position)
    setHiredDate(hiredDate)
    setEmployeeNum(employeeNum)
    setGrossSalary(grossSalary)
    setMonthlyBasic(monthlyBasic)
    setAllowance(allowance)
    setEmpStatus(empStatus)
    setSugg([])
  }
   
///////////////////////////////////////////////////////
const [employeeName, setEmployeeName] = useState('')
const [Position, setPosition] = useState('')
const [hiredDate, setHiredDate] = useState('')
const [employeeNum, setEmployeeNum] = useState('')
const [empStatus, setEmpStatus] = useState('')
let [grossSalary, setGrossSalary] = useState(0)
let [monthlyBasic, setMonthlyBasic] = useState(0)
let [allowance, setAllowance] = useState(0)
let [semiMonthlyPay,setSemiMonthlyPay] = useState(0)
let [dailyRatePay, setDailyRatePay] = useState(0)
let [regularHoursPay, setRegularHoursPay] = useState(0)
let [dailyAllowance, setDailyAllowance] = useState(0)
let [hourlyAllowance, setHourlyAllowance] = useState('')
let [semiAllowance, setSemiAllowance] = useState(0)
////////////////////////
const [dateRelease, setDateRelease] = useState('')
let [cutoff, setCuttoff] = useState(0)
let [cutoffDay, setCuttoffDay] = useState(0)
let [paymentMode, setPaymentMode] = useState('')
let [absencesDays, setAbsencesDays] = useState(0)
let [tardinessMin, setTardinessMin] = useState(0)
let [daysPaid, setDaysPaid] = useState(0)
let [vlCredit, setVLCredit] = useState(0)
let[vlCreditPast, setVLCreditPast] = useState(0)
let [slCredit, setSLCredit] = useState(0)
let[slCreditPast, setSLCreditPast] = useState(0)
/////////////////////////
let [regularOT, setRegularOT] = useState(0)
let [sundayOT, setSundayOT] = useState(0)
let [restdayOT, setRestDayOT] = useState(0)
let [specialHoliday, setSpecialHoliday] = useState(0)
let [regularHoliday, setRegularHoliday] = useState(0)
let [nightDiff, setNightDiff] = useState(0)
//////////
let [regularOTRes, setRegularOTRes] = useState(0)
let [sundayOTRes, setSundayOTRes] = useState(0)
let [restdayOTRes, setRestDayOTRes] = useState(0)
let [specialHolidayRes, setSpecialHolidayRes] = useState(0)
let [regularHolidayRes, setRegularHolidayRes] = useState(0)
let [nightDiffRes, setNightDiffRes] = useState(0)
//////////
let [basicSalary, setBasicSalary] = useState(0)
///////////////////DEDUCTIONS/////////////////////
let [sssContribution, setSSSContribution] = useState(0)
let [sssMinus, setSSSMinus] = useState(0)
let [hdmfContribution, setHDMFContribution] = useState(50)
let [philHealth, setPhilHealth] = useState(0)
let [taxDeduction, setTaxDeduction] = useState(0)
let [absences, setAbsences] = useState(0)
let [tardiness, setTardiness] = useState(0)
const [charges, setCharges] = useState(0)
/////////////////////////////////////////////////////////////

//////////////////////Processes/////////////////////////////
grossSalary = parseInt(monthlyBasic)+parseInt(allowance)
semiAllowance = parseInt(allowance)/2
semiMonthlyPay = parseInt(monthlyBasic)/2
dailyRatePay = semiMonthlyPay/cutoffDay
regularHoursPay = parseInt(dailyRatePay)/8
dailyAllowance = parseInt(semiAllowance)/parseInt(cutoffDay)
hourlyAllowance = parseInt(dailyAllowance)/8
/////////////////////OT Proccess////////////////////////////

daysPaid = cutoffDay - absencesDays 
let regularOTS = ((regularHoursPay)*1.2500)
regularOTRes = regularOTS*parseInt(regularOT)
let sundayOTS = ((regularHoursPay)*1.3)
sundayOTRes = sundayOTS*sundayOT
let restdayOTS = ((regularHoursPay)*1.3)
restdayOTRes = restdayOTS*restdayOT
let specialHolidayS = ((regularHoursPay)*1.3)
specialHolidayRes = specialHolidayS*specialHoliday
let regularHolidayS = ((regularHoursPay)*2)
regularHolidayRes = regularHolidayS*regularHoliday
let nightDiffS = (parseInt(regularOTRes)*1.35)
nightDiffRes = nightDiffS*nightDiff
basicSalary =  (dailyRatePay)*daysPaid
dailyRatePay = dailyRatePay.toFixed(2)
basicSalary = basicSalary.toFixed(2)
dailyAllowance= dailyAllowance.toFixed(2)
regularOTRes = regularOTRes.toFixed(2)
sundayOTRes = sundayOTRes.toFixed(2)
restdayOTRes = restdayOTRes.toFixed(2)
specialHolidayRes = specialHolidayRes.toFixed(2)
regularHolidayRes = regularHolidayRes.toFixed(2)
nightDiffRes = nightDiffRes.toFixed(2)
////////////////////DEDUCTIONS/////////////////////////////
let tardinessS = (regularHoursPay/60)
tardiness = tardinessS*tardinessMin
let [SSSSALLOAN, setSSSSALLOAN] = useState(0)
let [SSSCALLOAN, setSSSCALLOAN] = useState(0)
let [SSSINVLOAN, setSSSINVLOAN] = useState(0)
let [SSSHSELOAN, setSSSHSELOAN] = useState(0)
let [HDMFSALLOAN, setHDMFSALLOAN] = useState(0)
let [SSSEDULOAN, setSSSEDULOAN] = useState(0)
let [HDMFCALLOAN, setHDMFCALLOAN] = useState(0)
let [HDMFHSELOAN, setHDMFHSELOAN] = useState(0)
let [personalLoan, setPersonalLoan] = useState(0)
philHealth =( monthlyBasic*0.04)/2
////////////////////////////////////////////////////
/////////////////Final/////////////////////////////
let [finalBasic, setFinalBasic] = useState(0)
let [finalTardiness, setFinalTardiness] = useState(0)
let [finalAllowance, setFinalAllowance] = useState(0)
let [finalOvertime, setFinalOvertime] = useState(0)
let [finalGrossTotal, setFinalGrossTotal] = useState(0)
let [finalContribution, setFinalContribution] = useState(0)
let [finalDeduction, setFinalDeduction] = useState(0)
let [netpay, setNetpay] = useState(0)
///////////////
 finalBasic = basicSalary
 finalTardiness = tardiness
 finalAllowance = dailyAllowance*daysPaid
 finalOvertime = parseInt(regularOTRes)+parseInt(sundayOTRes)+parseInt(regularOTRes)+parseInt(specialHolidayRes)+parseInt(regularHolidayRes)
 finalGrossTotal = parseInt(finalBasic)+parseInt(finalAllowance)+parseInt(finalOvertime)
 finalContribution = parseInt(sssContribution)+parseInt(hdmfContribution)+parseInt(philHealth)+parseInt(taxDeduction)+parseInt(tardiness)+parseInt(absences)+parseInt(charges)
 finalDeduction = parseInt(sssContribution)+parseInt(hdmfContribution)+parseInt(philHealth)+parseInt(taxDeduction)+parseInt(finalTardiness)+parseInt(SSSCALLOAN)
 +parseInt(SSSEDULOAN)+parseInt(SSSHSELOAN)+parseInt(SSSINVLOAN)
 +parseInt(SSSSALLOAN)+parseInt(HDMFCALLOAN)+parseInt(HDMFHSELOAN)
 +parseInt(HDMFSALLOAN)+parseInt(personalLoan)
netpay = finalGrossTotal - finalDeduction
finalAllowance = finalAllowance.toFixed(2)
////////////////////////////////////////////////////


function SSSContri(){
    if(monthlyBasic<4249){
        setSSSContribution(570)
    } 

    if(monthlyBasic>= 4250 ){
        setSSSContribution(640)
    }   

    if(monthlyBasic>=4750){
        setSSSContribution(710)
    }
    if(monthlyBasic>=5250){
        setSSSContribution(780)
    }
    if(monthlyBasic>=5750){
        setSSSContribution(850)
    }
    if(monthlyBasic>=6250){
        setSSSContribution(920)
    }
    if(monthlyBasic>=6750){
        setSSSContribution(990)
    }
    if(monthlyBasic>=7250){
        setSSSContribution(1060)
    }
    if(monthlyBasic>=7750){
        setSSSContribution(1130)
    }
    if(monthlyBasic>=8250){
        setSSSContribution(1200)
    }
    if(monthlyBasic>=8750){
        setSSSContribution(1270)
    }
    if(monthlyBasic>=9250){
        setSSSContribution(1340)
    }
    if(monthlyBasic>=9750){
        setSSSContribution(1410)
    }
    if(monthlyBasic>=10250){
        setSSSContribution(1480)
    }
    if(monthlyBasic>=10750){
        setSSSContribution(1550)
    }
    if(monthlyBasic>=11250){
        setSSSContribution(1620)
    }
    if(monthlyBasic>=11750){
        setSSSContribution(1690)
    }
    if(monthlyBasic>=12250){
        setSSSContribution(1760)
    }
    if(monthlyBasic>=12750){
        setSSSContribution(1830)
    }
    if(monthlyBasic>=13250){
        setSSSContribution(1900)
    }
    if(monthlyBasic>=13750){
        setSSSContribution(1970)
    }
    if(monthlyBasic>=14250){
        setSSSContribution(2040)
    }
    if(monthlyBasic>=14750){
        setSSSContribution(2130)
    }
    if(monthlyBasic>=15250){
        setSSSContribution(2200)
    }
    if(monthlyBasic>=15750){
        setSSSContribution(2270)
    }
    if(monthlyBasic>=16250){
        setSSSContribution(2340)
    }
    if(monthlyBasic>=16750){
        setSSSContribution(2410)
    }
    if(monthlyBasic>=17250){
        setSSSContribution(2480)
    }
    if(monthlyBasic>=17750){
        setSSSContribution(2550)
    }
    if(monthlyBasic>=18250){
        setSSSContribution(2620)
    }
    if(monthlyBasic>=18750){
        setSSSContribution(2690)
    }
    if(monthlyBasic>=19250){
        setSSSContribution(2760)
    }
    if(monthlyBasic>=19750){
        setSSSContribution(2830)
    }
    if(monthlyBasic>=20250){
        setSSSContribution(2900)
    }
    if(monthlyBasic>=20750){
        setSSSContribution(2970)
    }
    if(monthlyBasic>=21250){
        setSSSContribution(3040)
    }
    if(monthlyBasic>=21750){
        setSSSContribution(3110)
    }
    if(monthlyBasic>=22250){
        setSSSContribution(3180)
    }
    if(monthlyBasic>=22750){
        setSSSContribution(3250)
    }
    if(monthlyBasic>=23250){
        setSSSContribution(3320)
    }
    if(monthlyBasic>=23750){
        setSSSContribution(3390)
    }
    if(monthlyBasic>=24250){
        setSSSContribution(3460)
    }
    if(monthlyBasic>=24750){
        setSSSContribution(3530)
    }
    if(monthlyBasic>=25250){
        setSSSContribution(3600)
    }
    if(monthlyBasic>=25750){
        setSSSContribution(3670)
    }
    if(monthlyBasic>=26250){
        setSSSContribution(3740)
    }
    if(monthlyBasic>=26750){
        setSSSContribution(3810)
    }
    if(monthlyBasic>=27250){
        setSSSContribution(3880)
    }
    if(monthlyBasic>=27750){
        setSSSContribution(3950)
    }
    if(monthlyBasic>=28250){
        setSSSContribution(4020)
    }
    if(monthlyBasic>=28750){
        setSSSContribution(4090)
    }
    if(monthlyBasic>=29250){
        setSSSContribution(4160)
    }
    if(monthlyBasic>29750){
        setSSSContribution(4230)
    }
}

/////////////////////
const[remarks, setRemarks] = useState("")
const [adjustments, setAdjustments] = useState('')
const [refunds, setRefunds] = useState('')
////////////////////////////////////////////////////

///////////////////////////////////////////////////

////////////SSS get/////////////////
function VlCred(){
    axios.get('http://13.229.91.120:3001/Payroll/VlCred/?employeeNum='+employeeNum,{
    }).then((response)=>{
        console.log(response.data)
        setVLCreditPast(response.data.result.vlCredit)
        setSLCreditPast(response.data.result.slCredit)
    })
}
 




useEffect(() => {
        async function fetchUser(){
          const response = await Axios.get('http://13.229.91.120:3001/InvMngmnt/suggestion')
          setUsers(response.data.result)
      }
      fetchUser()
    })
    function SLFormulae(){
        slCredit = 5/12
       setSLCredit(slCreditPast+slCredit)
}
function VLFormulae(){
    try {
       if (empStatus=='not Regular') {
           
       }else{
           if (empStatus=='Associate') {
               vlCredit = 10/12
               setVLCredit(vlCreditPast+vlCredit) 
               
           }
           if(empStatus == 'Senior'){
               vlCredit = 13/12
               setVLCredit(vlCreditPast+vlCredit)
           }
           if(empStatus == 'Manager'){
               vlCredit = 16/12
               setVLCredit(vlCreditPast+vlCredit)
           
           }
       }
    } catch (error) {
       console.log(error)
    }
   }
useEffect(()=>{
    SSSContri()
    VlCred()
    VLFormulae()
    SLFormulae()
  
})
function addPayroll(){
    Axios.post("http://13.229.91.120:3001/Payroll/insert",{
        email:email,
        employee: employeeName,
        employeeNum:employeeNum,
        position:Position,
        grossSalary:grossSalary,
        monthlyBasic:monthlyBasic,
        allowance:allowance,
        semiMonthlyPay:semiMonthlyPay,
        dailyRatePay:dailyRatePay,
        regularHoursPay:regularHoursPay,
        dailyAllowance:dailyAllowance,
        hourlyAllowance:hourlyAllowance,
        semiAllowance:semiAllowance,
        dateRelease:dateRelease,
        cutoff:cutoff,
        cutoffDay:cutoffDay,
        paymentMode:paymentMode,
        absencesDays:absencesDays,
        tardinessMin:tardinessMin,
        daysPaid:daysPaid,
        vlCredit:vlCredit,
        slCredit:slCredit,
        regularOT:regularOT,
        restdayOT:restdayOT,
        specialHoliday:specialHoliday,
        nightDiff:nightDiff,
        basicSalary:basicSalary,
        sssContribution:sssContribution,
        hdmfContribution:hdmfContribution,
        philHealth:philHealth,
        taxDeduction:taxDeduction,
        absences:absences,
        tardiness:tardiness,
        charges:charges,
        SSSSALLOAN:SSSSALLOAN,
        SSSCALLOAN:SSSCALLOAN,
        SSSINVLOAN:SSSINVLOAN,
        HDMFSALLOAN:HDMFSALLOAN,
        SSSEDULOAN:SSSEDULOAN,
        HDMFCALLOAN:HDMFCALLOAN,
        HDMFHSELOAN:HDMFHSELOAN,
        finalBasic:finalBasic,
        finalAllowance:finalAllowance,
        finalGrossTotal:finalGrossTotal,
        finalContribution:finalContribution,
        netpay:netpay,
        remarks:remarks,
        adjustments:adjustments,
        refunds:refunds,
        empStatus:empStatus,
        hiredDate:hiredDate,
        vlCreditPast:vlCreditPast,
        slCreditPast:slCreditPast
    })
}
function removeInputs(){
    setSuggText("")
    setEmployeeName("")
    setEmployeeNum("")
    setPosition("")
    setEmail('')
    setGrossSalary(0)
    setMonthlyBasic(0)
    setAllowance(0)
    setSemiMonthlyPay(0)
    setDailyRatePay(0)
    setRegularHoursPay(0)
    setDailyAllowance(0)
    setHourlyAllowance(0)
    setSemiAllowance(0)
    setDateRelease(0)
    setCuttoff('')
    setCuttoffDay(0)
    setPaymentMode("")
    setAbsencesDays(0)
    setTardinessMin(0)
    setDaysPaid(0)
    setRegularOT(0)
    setRestDayOT(0)
    setSpecialHoliday(0)
    setNightDiff(0)
    setBasicSalary(0)
    setSSSContribution(0)
    setHDMFContribution(0)
    setPhilHealth(0)
    setTaxDeduction(0)
    setAbsences(0)
    setTardiness(0)
    setCharges(0)
    setSSSSALLOAN(0)
    setFinalContribution(0)
    setFinalBasic(0)
    setFinalTardiness(0)
    setFinalAllowance(0)
    setFinalOvertime(0)
    setFinalGrossTotal(0)
    setFinalDeduction(0)
    setNetpay(0)
    setNightDiffRes(0)
    
}

    return(
        <div>
            <SidebarV2/>
            <Auth/>
            <MDBContainer style={{width:"100vw", marginLeft:"100px"}}>
                <MDBRow style={{marginTop:"25px", width:"100vw"}}>

                    <MDBCol md='8'>
                    <MDBCard style={{padding:"15px"}}>
                        <MDBRow>
                        <MDBCardText style={{
                            fontSize:"25px", color:"#757575"
                        }}>
                            Payroll
                        </MDBCardText>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <MDBInput
                                label="Employee Email"
                                onChange={(event)=>{handleSuggestion(event.target.value)}}
                                value={suggText}
                                />
                                {sugg&&<div  className='select'>{sugg.map((val, key)=>{
                                    return<div className='select-items'
                                    onClick={()=>handleSelected(val.Emailad, val.FirstName+" "+val.MiddleName+" "+val.LastName,
                                     val.position, val.hiredDate, val.employeeNum, val.allowance, val.monthlyBasic, val.empStatus
                                     )}
                                    key={key}>
                                    {val.Emailad}
                                    </div>
                                })}</div>}
                                
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                            <MDBCol>
                                <MDBInput
                                label="Employee Name"
                                onChange={(e)=>{setEmployeeName(e.target.value)}}
                                value={employeeName}
                                />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput
                                value={employeeNum}
                                onChange={(e)=>{setEmployeeNum(e.target.value)}}
                                label="Employee Number"
                                />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput
                                value={Position}
                                onChange={(e)=>{setPosition(e.target.value)}}
                                label="Postion/Department"
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"25px"}}>
                            <MDBCol md='2'>
                                <MDBInput
                                onChange={(e)=>{setHiredDate(e.target.value)}}
                                value={hiredDate}
                                label="Hired Date"
                                type='date'
                                />
                            </MDBCol>
                            <MDBCol md='2'>
                                <MDBInput
                                onChange={(e)=>{setDateRelease(e.target.value)}}
                                label="Date Release"
                                type='date'
                                />
                            </MDBCol>
                            <MDBCol md='3'>
                                <MDBInput
                                onChange={(e)=>{setCuttoff(e.target.value)}}
                                label='Cut Off'
                                type='date'
                                />
                            </MDBCol>
                            <MDBCol center md='3'>
                                <span>Payment mode: </span>
                                <select
                                onChange={(e)=>{setPaymentMode(e.target.value)}}
                                >   
                                    <option value=''>Select...</option>
                                    <option value='Card'>Card</option>
                                </select>
                            </MDBCol>
                            <MDBCol center md='2'>
                                <MDBInput
                                label='Employee Status'
                                value={empStatus}
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"25px"}}>
                            <MDBCol md='2'>
                                <MDBInput
                                onChange={(e)=>{setCuttoffDay(e.target.value)}}
                                label='Cut off Days'
                                type='number'
                                />
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                            <MDBCol md='4'>
                                <MDBInput
                                onChange={(e)=>{setGrossSalary(e.target.value)}}
                                label='Gross salary'
                                value={grossSalary}
                                type='number'
                                />
                            </MDBCol>
                            <MDBCol md='4'>
                                <MDBInput
                                onChange={(e)=>{setMonthlyBasic(e.target.value); }}
                                value={monthlyBasic}
                                label='Monthly Basic'
                                type='number'
                                />
                            </MDBCol>
                            <MDBCol md='4'>
                                <MDBInput
                                onChange={(e)=>{setAllowance(e.target.value)}}
                                value={allowance}
                                label='Allowances'
                                type='number'
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                        <MDBCol md='4'>
                                <MDBInput
                                onChange={(e)=>{setSemiMonthlyPay(e.target.value)}}
                                value={semiMonthlyPay}
                                label='Semi Monthly Pay'
                                type='number'
                                />
                        </MDBCol>
                        <MDBCol md='4'>
                                <MDBInput
                                value={dailyRatePay}
                                onChange={(e)=>{setDailyRatePay(e.target.value)}}
                                label='Daily Rate pay'
                                type='number'
                                />


                            </MDBCol>
                            <MDBCol md='4'>
                                <MDBInput
                                value={regularHoursPay}
                                onChange={(e)=>{setRegularHoursPay(e.target.value)}}
                                label='Regular Hours Pay'
                                type='number'
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                            <MDBCol md='4'>
                                <MDBInput
                                value={dailyAllowance}
                                onChange={(e)=>{setDailyAllowance(e.target.value)}}
                                label='Daily Allowance'
                                type='number'
                                />
                            </MDBCol>
                            <MDBCol md='4'>
                                <MDBInput
                                value={hourlyAllowance}
                                onChange={(e)=>{setHourlyAllowance(e.target.value)}}
                                label='Hourly Allowance'
                                type='number'
                                />
                            </MDBCol>
                            <MDBCol md='4'>
                                <MDBInput
                                value={semiAllowance}
                                onChange={(e)=>{setSemiAllowance(e.target.value)}}
                                label='Semi Allowance'
                                type='number'
                                />
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                        <MDBCol>
                            <MDBInput 
                            label='Absences(days)'
                            onChange={(e)=>{setAbsencesDays(e.target.value)}}
                            value={absencesDays}
                            type='number'
                            />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput 
                            label='Tardiness(Minutes)'
                            onChange={(e)=>{setTardinessMin(e.target.value)}}
                            type='number'
                            />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput
                            onChange={(e)=>{setDaysPaid(e.target.value)}} 
                            label='Days Paid'
                            value={daysPaid}
                            type='number'
                            />
                        </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                            <MDBCol md='4'>
                            <MDBInput 
                            onChange={(e)=>{setVLCredit(e.target.value)}}
                            label='VL Credit'
                            value={vlCredit.toFixed(2)}
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            onChange={(e)=>{setSLCredit(e.target.value)}}
                            label='SL Credit'
                            value={slCredit.toFixed(2)}
                            type='number'
                            />
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                        <MDBCol md='4'>
                            <MDBInput 
                            onChange={(e)=>{setRegularOT(e.target.value)}}
                            label='Regular OT'
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            label='Sunday OT'
                            onChange={(e)=>{setSundayOT(e.target.value)}}
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            onChange={(e)=>{setRestDayOT(e.target.value)}}
                            label='RestDay OT'
                            type='number'
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                        <MDBCol md='4'>
                            <MDBInput 
                            onChange={(e)=>{setRegularOTRes(e.target.value)}}
                            value={regularOTRes}
                            label='Regular OT(125%)'
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            label='Sunday OT(130%)'
                            onChange={(e)=>{setSundayOTRes(e.target.value)}}
                            value={sundayOTRes}
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            onChange={(e)=>{setRestDayOTRes(e.target.value)}}
                            value={restdayOTRes}
                            label='RestDay OT(130%)'
                            type='number'
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                        <MDBCol md='4'>
                            <MDBInput 
                            onChange={(e)=>{setSpecialHoliday(e.target.value)}}
                            label='Special Holiday(130%)'
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            onChange={(e)=>{setRegularHoliday(e.target.value)}}
                            label='Regular Holiday(200%)'
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            onChange={(e)=>{setNightDiff(e.target.value)}}
                            label='Night Diff'
                            type='number'
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                        <MDBCol md='4'>
                            <MDBInput 
                            onChange={(e)=>{setSpecialHolidayRes(e.target.value)}}
                            label='Special Holiday(130%)'
                            value={specialHolidayRes}
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            onChange={(e)=>{setRegularHolidayRes(e.target.value)}}
                            label='Regular Holiday(200%)'
                            value={regularHolidayRes}
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            onChange={(e)=>{setNightDiffRes(e.target.value)}}
                            label='Night Diff'
                            value={nightDiffRes}
                            type='number'
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                            <MDBCol md='3'>
                                <MDBInput 
                                onChange={(e)=>{setBasicSalary(e.target.value)}}
                                label='Basic Salary'
                                value={basicSalary}
                                type='number'
                                />
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow style={{marginTop:"15px"}}>
                            <MDBRow>
                                <Blink color='red' text='Deductions' style={{
                                    fontSize:"15px"
                                }}>
                                    Deductions
                                </Blink>
                            </MDBRow>
                        <MDBRow style={{marginTop:"25px"}}>
                            <MDBCol md='4'>
                            <MDBInput 
                            label='SSS Contribution'
                            type='number'
                            onChange={(e)=>setSSSContribution(e.target.value)}
                            value={sssContribution}
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            label='HDMF Contribution'
                            onChange={(e)=>{setHDMFContribution(e.target.value)}}
                            value={hdmfContribution}
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                             onChange={(e)=>{setPhilHealth(e.target.value)}}
                            label='PhilHealth Contribution'
                            value={philHealth}
                            type='number'
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                            <MDBCol md='4'>
                            <MDBInput 
                             onChange={(e)=>{setTaxDeduction(e.target.value)}}
                            label='Tax Deduction'
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            label='Absences'
                            onChange={(e)=>{setAbsences(e.target.value)}}
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            label='Tardiness'
                            onChange={(e)=>{setTardiness(e.target.value)}}
                            value={tardiness}
                            type='number'
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                            <MDBCol md='4'>
                            <MDBInput 
                             onChange={(e)=>{setSSSSALLOAN(e.target.value)}}
                            label='SSS-SAL. LOAN'
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            label='SSS-CAL. LOAN'
                            onChange={(e)=>{setSSSCALLOAN(e.target.value)}}
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            label='SSS-INV. LOAN'
                            onChange={(e)=>{setSSSINVLOAN(e.target.value)}}
                            type='number'
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                            <MDBCol md='4'>
                            <MDBInput 
                             onChange={(e)=>{setSSSHSELOAN(e.target.value)}}
                            label='SSS-HSE. LOAN'
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            label='SSS-EDU. LOAN'
                            onChange={(e)=>{setSSSEDULOAN(e.target.value)}}
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            label='HDMF-SAL. LOAN'
                            onChange={(e)=>{setHDMFSALLOAN(e.target.value)}}
                            type='number'
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                            <MDBCol md='4'>
                            <MDBInput 
                             onChange={(e)=>{setHDMFCALLOAN(e.target.value)}}
                            label='HDMF-CAL. LOAN'
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            label='HDMF-HSE. LOAN'
                            onChange={(e)=>{setHDMFHSELOAN(e.target.value)}}
                            type='number'
                            />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput 
                            label='Personal Loan'
                            onChange={(e)=>{setPersonalLoan(e.target.value)}}
                            type='number'
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                            <MDBCol md='3'>
                                <MDBInput 
                                onChange={(e)=>{setCharges(e.target.value)}}
                                label='Charges'
                                type='number'
                                />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput
                                label="Other Deductions"
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                            <MDBCol>
                                <MDBInput
                                label="adjustments"
                                value={adjustments}
                                onChange={(e)=>setAdjustments(e.target.value)}
                                />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput
                                label="refunds"
                                onChange={(e)=>setRefunds(e.target.value)}
                                value={refunds}
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow style={{marginTop:"15px"}}>
                            <MDBCol>
                                <MDBTextArea
                                label="Remarks"
                                value={remarks}
                                onChange={(e)=>setRemarks(e.target.value)}
                                />
                            </MDBCol>
                        </MDBRow>
                         </MDBRow>
                    </MDBCard>
                    </MDBCol>
                    <MDBCol md='3' style={{ padding:"0px"}}>
                        <MDBCard style={{width:"220px"}}>
                            <MDBRow center> 
                                <span style={{
                                    fontSize:'40px',
                                    fontFamily:"poppins"
                                }}>
                                    Final
                                </span>
                            </MDBRow>
                            <MDBTable hover style={{ width:"150px"}}>
                                <MDBTableBody>
                                    <th style={{paddingLeft:"13px",paddingTop:"0px", borderRadius:"15px"}}>
                                        <tr >
                                            <td>Basic</td>
                                        <td>{isNaN(finalBasic)?"none":finalBasic}</td>
                                        </tr>
                                        <tr>
                                            <td >Allowance</td>
                                            <td>{isNaN(finalAllowance)?"none":finalAllowance}</td>
                                        </tr>
                                        <tr>
                                            <td>Overtime</td>
                                            <td>{isNaN(finalOvertime)?"none":finalOvertime}</td>
                                        </tr>
                                        <tr>
                                            <td>Night Diff</td>
                                            <td>{isNaN(nightDiffRes)?"none":nightDiffRes}</td>
                                        </tr>
                                        <tr>
                                            <td>Adjustments</td>
                                            <td>{adjustments}</td>
                                        </tr>
                                        <tr>
                                            <td>refunds</td>
                                            <td>{refunds}</td>
                                        </tr>
                                        <tr>
                                            <td>Gross</td>
                                            <td>{isNaN(finalGrossTotal)?"none":finalGrossTotal}</td>
                                        </tr>
                                        <tr>
                                            <td>Contribution</td>
                                            <td>{isNaN(finalContribution)?"none":finalContribution}</td>
                                        </tr>
                                        <tr>
                                            <td>Deduction</td>
                                            <td>{isNaN(finalDeduction)?"none":finalDeduction}</td>
                                        </tr>
                                        <tr>
                                            <td>Netpay</td>
                                            <td>{isNaN(netpay)?"none":netpay}</td>
                                        </tr>
                                    </th>
                                </MDBTableBody>
                            </MDBTable>
                            <MDBRow center>
                                <MDBCol>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>                            
                             <MDBCol>
                                    {/*!employeeNum?"please input Details":<Link to="/payslip" state={employeeNum}>
                                    <PDFViewer children={<MyDocument/>}>
                                        {({loading})=>(loading?"loading Document":<MDBBtn>preview</MDBBtn>)}
                                    </PDFViewer>
                                    </Link>*/}
                                    {!isSaved&&employeeNum&&<MDBBtn onClick={()=>{addPayroll(); setIsSaved(!isSaved)}}>Save to payroll</MDBBtn>}
                                      {employeeNum&&isSaved&&<PDFDownloadLink document={<MyDocument employeeNum={employeeNum}/>} fileName={`payslip-${employeeName}-${dateRelease}`}>
                                        {({loading})=>(loading?"loading Document":
                                       <MDBBtn>download</MDBBtn>)}
                                        </PDFDownloadLink>}
                                    {isSaved&&empStatus&&<MDBBtn
                                    onClick={()=>{removeInputs(); setIsSaved(!isSaved)}}
                                    >
                                        ReEnter Cred
                                        </MDBBtn>}
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default PayrollPage;