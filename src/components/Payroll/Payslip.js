import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import {Page, Text, Image, Document, StyleSheet, View } from '@react-pdf/renderer'
import icon from '../Icon/AIQue Logo.png'

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      border:1,
    },
    subtitle: {
      fontSize: 18,

    },
    icon:{
      width:40
    },
    title:{
      marginBottom:10,
      fontSize:25,
      margin:10
    },
    sect2:{
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    rowing:{
      flexDirection:"row"
    },
    deduction:{
      color:"red",
      marginBottom:10,
      fontSize:20
    },
    payslip:{
      textAlign:"center",
      fontSize:24,
      margin:15
    },
    subtitle:{
      margin: 2
    },
    final:{
      border:1,
      borderWidth:1,
      padding:10,
      marginTop:15,
    },
    finalTitle:{
      color:"#039BE5",
      fontSize:22,
      marginBottom:7,
    }
  });

  
  // Create Document Component
  function MyDocument ({employeeNum}){
  const[payMap, setPayMap] = useState([])
     function payslips(){
     axios.get('http://13.229.91.120:3001/Payroll/read?employeeNum='+employeeNum,{
      }).then(response=>{
        console.log(response.data)
        setPayMap(response.data.result)
      })
    }

    useEffect(()=>{
      payslips()
    },[employeeNum])
  
    return(
    
      <Document>
      <Page size="A4" orientation='portrait' style={styles.page}>
         <View style={styles.section}>
          <View style={styles.rowing}>
            
           <Image 
           style={styles.icon}
           src={icon}
           />
           <Text style={styles.title}>AIQUE</Text>
           </View>
           <View style={styles.payslip}>
            <Text>
              Payslip
            </Text>
           </View>
           <View style={styles.rowing}>
           <View>
           <View style={styles.rowing}>
           <Text style={styles.subtitle}>
            Employee:
           </Text>
          <Text style={styles.subtitle}>
             {payMap.employee}
             </Text>
             </View>

          <Text style={styles.subtitle}>
             Employee number:
             {payMap.employeeNum}
           </Text>
           <Text style={styles.subtitle}> 
             Position:{payMap.position} 
           </Text>
           <Text style={styles.subtitle}>
           Hired Date:{payMap.hiredDate}
           </Text>
           <Text style={styles.subtitle}>
            Date Release:{payMap.dateRelease}
           </Text>
           <Text style={styles.subtitle}>
             Payment Mode:{payMap.paymentMode}
           </Text>
           <Text style={styles.subtitle}>
             Employee Status:{payMap.empStatus}
           </Text>
           <Text style={styles.subtitle}>
             Cut Off Days:{payMap.cutoffDay}
           </Text>
           <Text style={styles.subtitle}>
             Gross Salary:{payMap.grossSalary}
           </Text>
           <Text style={styles.subtitle}>
            Monthly Basic:{payMap.monthlyBasic}
           </Text>
           <Text style={styles.subtitle}>
           Allowance:{payMap.allowance}
           </Text>
           <Text style={styles.subtitle}>
             Semi monthly Pay:{payMap.semiMonthlyPay}
           </Text>
           <Text style={styles.subtitle}>
           daily Rate Pay:{payMap.dailyRatePay}
           </Text>
           <Text style={styles.subtitle}>
           regular Hours Pay:{payMap.regularHoursPay}
           </Text>
           <Text style={styles.subtitle}>
           Daily Allowance:{payMap.dailyAllowance}
           </Text>
           <Text style={styles.subtitle}>
           Hourly Allowance:{payMap.hourlyAllowance}
           </Text>
           <Text>
           Semi Allowance:{payMap.semiAllowance}
           </Text>

           <Text style={styles.subtitle}>
            absences(days):{payMap.absencesDays}
           </Text>
            <Text style={styles.subtitle}>
              Tardiness(minutes):{payMap.tardinessMin}
            </Text>
            <Text style={styles.subtitle}>
              Days Paid:{payMap.daysPaid}
            </Text>
            <Text style={styles.subtitle}>
              VLredit:{payMap.vlCredit}
            </Text>
            <Text style={styles.subtitle}>
              SL Credit:{payMap.slCredit}
            </Text>

            <Text style={styles.subtitle}>
              Regular OT:{payMap.regularOT}
            </Text>
            <Text style={styles.subtitle}>
              Restday OT:{payMap.restdayOT}
            </Text>
            <Text style={styles.subtitle}>
              Special Holiday:{payMap.specialHoliday}
            </Text>
            <Text style={styles.subtitle}>
              Night Differential:{payMap.nightDiff}
            </Text>
            <Text style={styles.subtitle}>
              Basic Salary:{payMap.basicSalary}
            </Text> 
                
        </View> 
         <View style={styles.sect2}>
          <Text style={styles.deduction}>
          DEDUCTIONS  
          </Text>
         <Text style={styles.subtitle}>
              SSS Contribution:{payMap.sssContribution}
            </Text>
            <Text style={styles.subtitle}>
              HDMF Contribution:{payMap.hdmfContribution}
            </Text>
            <Text style={styles.subtitle}>
              PhilHealth Contribution:{payMap.philHealth}
            </Text>
            <Text style={styles.subtitle}>
              Tax Deduction:{payMap.taxDeduction}
            </Text>
            <Text style={styles.subtitle}>
              absences:{payMap.absences}
            </Text>
            <Text style={styles.subtitle}>
              Tardiness:{payMap.tardiness}
            </Text>
            <Text style={styles.subtitle}>
              SSS-SAL.LOAN:{payMap.SSSSALLOAN}
            </Text>
            <Text style={styles.subtitle}>
              SSS-CAL.LOAN:{payMap.SSSCALLOAN}
            </Text>
            <Text style={styles.subtitle}>
              SSS-INV.LOAN:{payMap.SSSINVLOAN}
            </Text>
            <Text style={styles.subtitle}>
              HDMF-CAL.LOAN:{payMap.HDMFCALLOAN}
            </Text>
            <Text style={styles.subtitle}>
              HDMF-SAL.LOAN:{payMap.HDMFSALLOAN}
            </Text>
            <Text style={styles.subtitle}>
              HDMF-HSE.LOAN:{payMap.HDMFHSELOAN}
            </Text>
            <Text style={styles.subtitle}>
              Personal Loan:{payMap.personalLoan}
            </Text>
            <Text style={styles.subtitle}>
              Charges:{payMap.charges}
            </Text>
            <Text style={styles.subtitle}>
              Other Deductions:{payMap.otherDeductions}
            </Text>
            <Text style={styles.subtitle}>
              Adjustments:{payMap.adjustments}
            </Text>
            <Text style={styles.subtitle}>
              Remarks:{payMap.remarks}
            </Text>
            <View style={styles.final}>
              <Text style={styles.finalTitle}>Final:</Text>
              <Text style={styles.subtitle}>
                Basic:{payMap.finalBasic}
              </Text>
              <Text style={styles.subtitle}>
                Allowance:{payMap.finalAllowance}
              </Text>
              <Text style={styles.subtitle}>
                Gross Total:{payMap.finalGrossTotal}
              </Text>
              <Text style={styles.subtitle}>
                Contribution:{payMap.finalContribution}
              </Text>
              <Text style={styles.subtitle}>
                Netpay:{payMap.netpay}
              </Text>
            </View>
            </View>     
            </View>
         </View>
       </Page>
     
     </Document>
    
    
    )
   
    };

 export default MyDocument
