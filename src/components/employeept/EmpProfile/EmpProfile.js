import  Axios  from "axios";
import React, { useState, useEffect } from "react";
import{Link, useLocation} from 'react-router-dom';
import Swal from "sweetalert2";
import styles from './styles.module.css'

const EmpProfile = ()=>{

const[position, setPosition] = useState ("")
const[department, setDepartment] = useState ([])
const[immSuperior, setImmSuperior] = useState ("")
const[EmPerToContact, setEmPerToContact] = useState ("")
const[sSS, setSSS] = useState ("")
const[pagIbig, setPagIbig] = useState ("")
const[tinId, setTinId] = useState ("")
const[empStatus, setEmpStatus] = useState ("")

const [profile , setProfile] = useState([])

const email = localStorage.getItem("emailId")
console.log(email)

const findProfile = ( )=>{
    Axios.get('http://13.228.71.195:3001/api/EmpProf/?Emailad='+email).then((response)=>{
      console.log(response.data.result)
      setProfile(response.data.result)
      
    })
  }
  
  const UpdateDepartment = (id)=>{
    
    Axios.put("http://13.228.71.195:3001/api/update/department/" + id,{
      id:id,
      newDepartment: department

     
    }).then(res =>{
      findProfile()
    }).catch(err=>{
      console.log(err)
    })
  }   

useEffect(()=>{
findProfile();

},[])

useEffect(()=>{
    
    console.log(setDepartment)
    })
    return(
       <div className="detail">
        {profile.map((val,key)=>{
            return <div key={key}>




<div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
            <div className={styles.left}>
                <h1>HRIS</h1>
                <Link to="/dash">
                    <button type="button" className={styles.white_btn}>
                        Home
                    </button>
                </Link>
            </div>
            <div className={styles.right}>
                <form className={styles.form_container}>
                    <h1>hello {val.FirstName} {val.LastName}</h1>
                <div>Email: {val.Emailad}  Contact No: {val.ContactNo}
                    department: {val.department} immidiate Superior: {val.immSuperior}
                    Emergency person to contact: {val.EmPerToContact} SSS:{val.sSS}
                    Pag-ibig:{val.pagIbig} TIN ID:{val.tinId} Employee Status:{val.empStatus}
                </div>
        <hr/>


        <input type="text" placeholder="position..."
        
        onChange={(event) => {
            setDepartment(event.target.value)
            }}/>
        <input type="text" placeholder="department..."
        required
        onChange={(event) => {
            setDepartment(event.target.value)
            }}/>
        <br/>
        <input type="text" placeholder="immediate Superior..."
        required
        onChange={(event) => {
            setImmSuperior(event.target.value)
            }}/>
        <input type="text" placeholder="Emergency Person to Contact..."
        required
        onChange={(event) => {
            setEmPerToContact(event.target.value)
            }}/>
        <input type="text" placeholder="SSS..."
        required
        onChange={(event) => {
            setSSS(event.target.value)
            }}/>
        <input type="text" placeholder="pagIbig..."
        required
        onChange={(event) => {
            setPagIbig(event.target.value)
            }}/>
        <br/>
        <input type="text" placeholder="Tin ID..."
        required
        onChange={(event) => {
            setTinId(event.target.value)
            }}/>
        <input type="text" placeholder="Employee Status..."
        required
        onChange={(event) => {
            setEmpStatus(event.target.value)
            }}/>
                    {/*error && <div className={styles.error_msg}>{error}</div>*/}
                    <button type="submit" className={styles.green_btn}>
                        Complete profile
                    </button>
                </form>
            </div>
        </div>
    </div>

                
                </div>
        })}
        
    </div>
        
    )
}

export default EmpProfile;

