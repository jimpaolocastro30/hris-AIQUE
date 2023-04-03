import  Axios  from "axios";
import React, { useState, useEffect } from "react";
import{Link, useLocation} from 'react-router-dom';
import Swal from "sweetalert2";



function EmployeeReg(){
//const[FirstName, setFirstName] = useState ("")
//const[MiddleName, setMiddleName] = useState ("")
//const[LastName, setLastName] = useState ("")
//const[contactNo, setContactNo] = useState ("")
//const[emailAd, setEmailAd] = useState ("")
//const[password, setPassword] = useState ("")
const[position, setPosition] = useState ("")
const[department, setDepartment] = useState ('')
const[immSuperior, setImmSuperior] = useState ("")
const[EmPerToContact, setEmPerToContact] = useState ("")
const[sSS, setSSS] = useState ("")
const[pagIbig, setPagIbig] = useState ("")
const[tinId, setTinId] = useState ("")
const[empStatus, setEmpStatus] = useState ("")


const addToReg = () => 
Axios.post("http://13.228.71.195:3001/employeeReg/insert",{
  //FirstName:FirstName,
  //MiddleName:MiddleName,
  //LastName:LastName,
  //ContactNo:contactNo,
  //Emailad:emailAd,
  //Password:password,
  position:position,
  department:department,
  immSuperior:immSuperior,
  EmPerToContact:EmPerToContact,
  sSS:sSS,
  pagIbig:pagIbig,
  tinId:tinId,
  empStatus:empStatus,

})


    return(
        <div className="Emreg">
        <h1>Welcome to Registration</h1>
            <hr/>
            <br/>
            
         {/*profile completion*/}   
        <input type="text" placeholder="position..."
        onChange={(event) => {
            setPosition(event.target.value)
            }}/>
            
        <input type="text" placeholder="department..."
        onChange={(event) => {
            setDepartment(event.target.value)
            }}/>
        <br/>
        <input type="text" placeholder="immediate Superior..."
        onChange={(event) => {
            setImmSuperior(event.target.value)
            }}/>
        <input type="text" placeholder="Emergency Person to Contact..."
        onChange={(event) => {
            setEmPerToContact(event.target.value)
            }}/>
        <input type="text" placeholder="SSS..."
        onChange={(event) => {
            setSSS(event.target.value)
            }}/>
        <input type="text" placeholder="pagIbig..."
        onChange={(event) => {
            setPagIbig(event.target.value)
            }}/>
        <br/>
        <input type="text" placeholder="Tin ID..."
        onChange={(event) => {
            setTinId(event.target.value)
            }}/>
        <input type="text" placeholder="Employee Status..."
        onChange={(event) => {
            setEmpStatus(event.target.value)
            }}/>
        <br/>
        <Link to ="/EmployeeDashB"><button onClick={addToReg}>Continue</button></Link>

        <br/>
        <Link to = "/"><button> go back </button></Link>
        </div>

    )

}

export default EmployeeReg;