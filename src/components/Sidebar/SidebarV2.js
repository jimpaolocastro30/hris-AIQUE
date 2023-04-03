import { MDBBtn, MDBCard, MDBCol, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import swal from 'sweetalert2'
import '../Sidebar/Sidebar.css'
import Icon from '../Icon/AIQue Logo.png'
export default function SidebarV2() {
//Active background button when clicked react hooks
const[user, setUser] = useState([])
const [role, setRole]=useState([])
const[authorization, setAuthorization]= useState(false)
const [isOpen, setIsOpen] = useState(true)

const email = localStorage.getItem("emailId")
localStorage.setItem('role',role)
    const findProfile = ( )=>{
        Axios.get('http://13.228.71.195:3001/api/EmpProf/?Emailad='+email).then((response)=>{
          setUser(response.data.result)
          //setRole(response.data.role)
          setRole(response.data.result[0].role)
        })
      }
      const logout=()=>{
        localStorage.removeItem("Bearer")
        localStorage.removeItem("emailId")
        localStorage.removeItem("role")
        window.location.href="/"
      }
      const conflogout =()=>{
        swal.fire({
          title: 'Are you sure?',
          text: "you will be back to \n login page",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then(function(dismiss) {
       if(dismiss.isConfirmed === false){
            swal.fire("you will return")
            console.log('cancelled')
          }
          
          else{
            logout()
            
          }
        })
      }
    const admin = localStorage.getItem('role')
      useEffect(()=>{
        
         if (admin =="Employee") {
          setAuthorization(false)
          }
          if(admin=="Admin") {
            setAuthorization(true)
          }
          })

    useEffect(()=>{
    findProfile()
        
      })
  return (

    <div className={isOpen?'':"background"} onClick={()=>setIsOpen(!isOpen)}>
   <div>
    <MDBCard style={{position:"fixed",  width: isOpen ? "70px":"200px",
    top:"0px", Left:"0px", height:"100vh", zIndex:"999", transition:"ease-in 200ms",
    gap:"15px"
}}>
    <MDBCol center>
        <MDBRow >
        <MDBCol style={{gap:"15px"}} >
            <MDBRow className='open-close' onClick={()=>setIsOpen(!isOpen)}>
                <MDBCol className='open-side'>
                {isOpen&&<MDBIcon fas icon="angle-double-right"style={{transition:"500ms"}} />}
                {!isOpen&&<MDBIcon className='fa-angle-double-left'/>}
                </MDBCol>
            </MDBRow>
            <MDBRow className='title'>
            <div className={isOpen?'tooltip1':"tooltip2"}><span>AIQUE</span></div>
                <div className='HRIS' style={{fontSize:"50px", color:"#616161", transition:"500ms",display: isOpen ? "none": "block" }}>
            HRIS
                </div>
                {isOpen&&<div> 
                    <img src={Icon} className='aicon'/>
                </div>}
            </MDBRow>
            {authorization?<div>
                <Link to = '/dash'>
                <MDBRow className='Sidelinks' style={{justifyContent: isOpen?"center":"start", marginTop:isOpen?"150px":"5px"}}>
                <div className={isOpen?'tooltip1':"tooltip2"}><span>Home</span></div>
                <MDBCol md={isOpen?"4":"2"} style={{padding:isOpen?"0px":""}}>
                <MDBIcon className='fa-home' size='lg' style={{color:"#007bff", margin:'0px',}}/></MDBCol>
                {!isOpen&&<MDBCol md='5'>
                <span style={{
                    fontSize:'16px', display: isOpen ? "none": "block"
                }}>Home</span>
                </MDBCol>}
            </MDBRow>
            </Link>
            <Link to = '/Home'>
            <MDBRow className='Sidelinks' style={{justifyContent: isOpen?"center":"start"}}>
            <div className={isOpen?'tooltip1':"tooltip2"}>Inventory</div>
                <MDBCol md={isOpen?"4":"2"} style={{padding:isOpen?"0px":""}}>
                    <MDBIcon fas icon="box-open" size='lg' style={{color:"#007bff"}}/></MDBCol>
                {!isOpen&&<MDBCol md='6'>
                <span style={{
                    fontSize:'16px', display: isOpen ? "none": "block"
                }}>Inventory</span>
                </MDBCol>}
            </MDBRow>
            </Link>
            <Link to = '/EmployeeList'>
            <MDBRow className='Sidelinks' style={{justifyContent: isOpen?"center":"start"}}>
            <div className={isOpen?'tooltip1':"tooltip2"}><span>Employee List</span></div>
                <MDBCol md={isOpen?"4":"2"} style={{padding:isOpen?"0px":""}}>
                    <MDBIcon fas icon="users" size='lg' style={{color:"#007bff"}}/></MDBCol>
                {!isOpen&&<MDBCol md='8'>
                <span style={{
                    fontSize:'16px', display: isOpen ? "none": "block"
                }}>Employee List</span>
                </MDBCol>}
            </MDBRow>
            </Link>
            <Link to = '/AdminAddUser'>
                <MDBRow className='Sidelinks' style={{justifyContent: isOpen?"center":"start"}}>
                <div className={isOpen?'tooltip1':"tooltip2"}><span>Add User</span></div>
                 <MDBCol md={isOpen?"4":"2"} style={{padding:isOpen?"0px":""}}>
                    <MDBIcon fas icon="user-plus" size='lg'/></MDBCol>
                {!isOpen&&<MDBCol md='6'>
               <span style={{
                    fontSize:'16px', display: isOpen ? "none": "block"
                }}>Add User</span>
                </MDBCol>}
            </MDBRow>
            </Link>
            <Link to = '/Attendance' >
            <MDBRow className='Sidelinks' style={{justifyContent: isOpen?"center":"start"}}>
            <div className={isOpen?'tooltip1':"tooltip2"}><span>Attendance</span></div>
            <MDBCol md={isOpen?"4":"2"} style={{padding:isOpen?"0px":""}} >
                <MDBIcon fas icon="calendar-check" size='lg' style={{color:"#007bff"}}/></MDBCol>
            {!isOpen&&<MDBCol md='7'>
                <span style={{
                    fontSize:'16px', display: isOpen ? "none": "block"
                }}>Attendance</span>
            </MDBCol>}
            </MDBRow>
            </Link>
            <Link to = '/Payroll'>
            <MDBRow className='Sidelinks' style={{justifyContent: isOpen?"center":"start"}}>
            <div className={isOpen?'tooltip1':"tooltip2"}><span>Payroll</span></div>
            <MDBCol md={isOpen?"4":"2"} style={{padding:isOpen?"0px":""}} >
                <MDBIcon fas icon="hand-holding-usd" size='lg'/></MDBCol>
            {!isOpen&&<MDBCol md='6'>
            <span style={{
                    fontSize:'16px', display: isOpen ? "none": "block"
                }}>Payroll</span>
            </MDBCol>}
            </MDBRow>
            </Link>
            </div>:<div>
                {isOpen&&<div className='empup'>

                </div>}
            <Link to = '/dash' >
            <MDBRow className='Sidelinks' style={{justifyContent: isOpen?"center":"start"}}>
            <div className={isOpen?'tooltip1':"tooltip2"}><span>Home</span></div>
            <MDBCol md={isOpen?"4":"2"} style={{padding:isOpen?"0px":""}} >
                <MDBIcon className='fa-home' style={{color:"#007bff"}} size='lg'/></MDBCol>
            {!isOpen&&<MDBCol md='6'
            ><span style={{
                fontSize:'16px', display: isOpen ? "none": "block"
            }}>Home</span>
            </MDBCol>}
        </MDBRow>
        </Link>
        <Link to = '/Attendance'>
            <MDBRow  className='Sidelinks' style={{justifyContent: isOpen?"center":"start"}}>
            <div className={isOpen?'tooltip1':"tooltip2"}><span>Attendance</span></div>
            <MDBCol md={isOpen?"4":"2"} style={{padding:isOpen?"0px":""}} >
            <MDBIcon fas icon="calendar-check" size='lg' style={{color:"#007bff"}}/></MDBCol>
           {!isOpen&&<MDBCol md='8'>
                <span style={{
                    fontSize:'16px', display: isOpen ? "none": "block"
                }}>Attendance</span>
            </MDBCol>}
            </MDBRow>
            </Link>
        </div>
            }
        </MDBCol>
        </MDBRow>
       {isOpen&&<MDBRow className='icon-out' style={{position:"absolute", bottom:"5px", paddingLeft:"8px", cursor:"pointer"}}>
            <MDBIcon onClick={()=>conflogout()}  className='fa-sign-out' size='2x'/>
        </MDBRow>}
        <MDBRow style={{position:"absolute", bottom:"5px",left:"30px",  display:isOpen ? "none":"block"}}>
            {user.map((val, key)=>{
                return<div style={{alignItems:"center"}} key={key}>
                <MDBCol center>
                    <MDBRow  center style={{color:"#9E9E9E",}}>
                        {val.role}</MDBRow>
                                <MDBRow center>
                                    <MDBCol md='12'>
                                        Not {val.FirstName} {val.LastName}?
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow center>
                                    <MDBCol md='12'>
                                    <MDBBtn onClick={()=>conflogout()} style={{padding:"5px"}}>
                                        <span>Log out</span>
                                    </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </div>
            })}
           
        </MDBRow>
        </MDBCol>   
    </MDBCard>
    </div>
    </div>
  )
}
