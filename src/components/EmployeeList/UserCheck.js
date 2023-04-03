import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBInput,
    MDBCardTitle,
    MDBTabs,
    MDBTabsContent,
    MDBTabsItem,
    MDBTabsLink,
    MDBTable,
    MDBTableBody
  
  } from 'mdb-react-ui-kit';
  import React, { useState, useEffect } from 'react';
  import Axios from 'axios'
  import{Link, useLocation,} from 'react-router-dom';
import SidebarV2 from '../Sidebar/SidebarV2';
import Salary from './Salary';
import axios from 'axios';


const UserCheck=()=>{
///////////////////////////////
const [equipment, setEquipment] = useState(false)
const [getEquipment, setGetEquipment] = useState([])
function getEquip(){
  axios.get("http://13.228.71.195:3001/api/getEquip?email="+Emailad).then((response)=>{
  setGetEquipment(response.data)
  })
}
 ///UseStates for Updates///
 const[profile, setProfile] = useState([])
 ////useState for update////
 const[department,setDepartment]= useState('')
 const[position, setposition] = useState('')
 const[immSuperior,setImmSuperior] = useState('')
 const[EmPerContact,setEmPerContact ] = useState('')
 const[sSS, setSSS] = useState('')
 const[pagIbig, setPagIbig]= useState('')
 const[tinId, setTinID] = useState('')
 const[Status, setStatus] = useState('')
 ////////////////
 const hEmail = localStorage.getItem('emailId')
 const current = new Date();
      const hdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
/// axios update///
 const UpdateDepartment = (id)=>{
   
   Axios.put("http://13.228.71.195:3001/api/update/department/:id",{
     id:id,
     newDepartment : department
    
   }).then(res =>{
     findProfile()
   })}
  async function UpdateDeptHistory(id, dev){
    Axios.post(`http://13.228.71.195:3001/UserMngmnt/updateDept/:id`,{
      devbefore:dev,
      fullName:hEmail,
      date:hdate,
      method:department,
    })
   .then(res=>{
      UpdateDepartment(id)
    })
  }
//////
   const UpdatePosition = (id)=>{
   
     Axios.put("http://13.228.71.195:3001/api/update/position/:id",{
       id:id,
       newPosition : position
      
     }).then(res =>{
       findProfile()
     })}

     async function UpdatePositionHistory(id, dev){
      Axios.post(`http://13.228.71.195:3001/UserMngmnt/updatePosition/:id`,{
        devbefore:dev,
        fullName:hEmail,
        date:hdate,
        method:position,
      })
     .then(res=>{
        UpdatePosition(id)
      })
    }
  ///////
     const UpdateImmSuperior = (id)=>{
   
       Axios.put("http://13.228.71.195:3001/api/update/immSuperior/:id",{
         id:id,
         newSuperior : immSuperior
        
       }).then(res =>{
         findProfile()
       })}

       async function UpdateImmSuperiorHistory(id, dev){
        Axios.post(`http://13.228.71.195:3001/UserMngmnt/updateSuperior/:id`,{
          devbefore:dev,
          fullName:hEmail,
          date:hdate,
          method:immSuperior,
        })
       .then(res=>{
        UpdateImmSuperior(id)
        })
      }
      ////////////
 
       const EmPerToContact = (id)=>{
   
         Axios.put("http://13.228.71.195:3001/api/update/EmPerToContact/:id",{
           id:id,
           newPerContact : EmPerContact
          
         }).then(res =>{
           findProfile()
         })}
         async function UpdateEmPerToContactHistory(id, dev){
          Axios.post(`http://13.228.71.195:3001/UserMngmnt/updateEmPerToContact/:id`,{
            devbefore:dev,
            fullName:hEmail,
            date:hdate,
            method:EmPerContact,
          })
         .then(res=>{
          EmPerToContact(id)
          })
        }
        /////////////
         const UpdateSSS = (id)=>{
   
           Axios.put("http://13.228.71.195:3001/api/update/SSS/:id",{
             id:id,
             newSSS : sSS
            
           }).then(res =>{
             findProfile()
           })}

           async function UpdateSSSHistory(id, dev){
            Axios.post(`http://13.228.71.195:3001/UserMngmnt/updateSSS/:id`,{
              devbefore:dev,
              fullName:hEmail,
              date:hdate,
              method:sSS,
            })
           .then(res=>{
            UpdateSSS(id)
            })
          }
          ///////////
           const UpdatePagIbig = (id)=>{
   
             Axios.put("http://13.228.71.195:3001/api/update/pagIbig/:id",{
               id:id,
               newPagIbig : pagIbig
              
             }).then(res =>{
               findProfile()
             })} 
       
             async function UpdatePagIbigHistory(id, dev){
              Axios.post(`http://13.228.71.195:3001/UserMngmnt/updatePagibig/:id`,{
                devbefore:dev,
                fullName:hEmail,
                date:hdate,
                method:pagIbig,
              })
             .then(res=>{
              UpdatePagIbig(id)
              })
            }
            /////////
             const UpdateTinID = (id)=>{
   
               Axios.put("http://13.228.71.195:3001/api/update/tinId/:id",{
                 id:id,
                 newTinID : tinId
                
               }).then(res =>{
                 findProfile()
               })}  
              
               async function UpdateTinIDHistory(id, dev){
                Axios.post(`http://13.228.71.195:3001/UserMngmnt/updateTinID/:id`,{
                  devbefore:dev,
                  fullName:hEmail,
                  date:hdate,
                  method:tinId,
                })
               .then(res=>{
                UpdateTinID(id)
                })
              }
            //////////
               const UpdateEmpStatus = (id)=>{
   
                Axios.put("http://13.228.71.195:3001/api/update/empStatus/:id",{
                  id:id,
                  newEmpStatus : Status
                 
                }).then(res =>{
                  findProfile()
                })}   

                async function UpdateStatusHistory(id, dev){
                  Axios.post(`http://13.228.71.195:3001/UserMngmnt/updateStatus/:id`,{
                    devbefore:dev,
                    fullName:hEmail,
                    date:hdate,
                    method:Status,
                  })
                 .then(res=>{
                  UpdateEmpStatus(id)
                  })
                }
//id
const location = useLocation()
const Emailad = location.state

const [showSalary, setShowSalary]=useState(false)
  const findProfile = ( )=>{
    Axios.get('http://13.228.71.195:3001/api/EmpProf/?Emailad='+Emailad).then((response)=>{
      console.log(response.data.result)
      setProfile(response.data.result)
      
    })
  }
const [showBtn, setShowBtn] = useState(false)
const [showChangeRole, setShowChangeRole] = useState(false)
const admin = localStorage.getItem('role')

useEffect(()=>{
findProfile()
getEquip()
},[])
useEffect(()=>{
 if (admin == "Admin") {
  setShowChangeRole(true)
} else {
  setShowChangeRole(false)
}
  
},[])


    return(

    
    <div>
      {showSalary&&admin&&<Salary modalClose={setShowSalary}/>}
      <SidebarV2/>
      {profile.map((result, i)=>{

       return<div style={{backgroundColor:"white", width:"100vw", height:"100vh" }} key={i}>
        
         <section style={{ backgroundColor: 'white' }}>
        <MDBContainer className="py-5">
        <MDBRow start>
          <MDBCol md='5' style={{
            fontSize:"60px",
            marginLeft:"15",
            marginBottom:"45px",
            color:"#757575"
          }}>
            Employee Profile
          <div style={{fontSize:"20px", width:"300px", height:"40px"}}>
           <span style={{marginLeft:"0px"}}><Link to ='/EmployeeList'>Employee List</Link></span>/Employee Profile
          </div>
          </MDBCol>
        </MDBRow>
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  <MDBRow>
                    <MDBCol md='12'>
                      <div
                  style={{fontSize:"30px", padding:"0px"}}
                  >{result.FirstName}</div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <div style={{color:"#9E9E9E", fontSize:"18px"}}>
                      {result.MiddleName}
                    </div>
                  </MDBRow>
                  <MDBRow center>
                    <div style={{
                      fontSize:"30px"
                    }}>
                      {result.LastName}
                    </div>
                  </MDBRow>
                  
                  <p className="text-muted mb-4" style={{
                    fontSize:"15px", marginTop:"15px"
                  }}>{result.role}</p>
                 
                  {showChangeRole&&showBtn&&<form>
                  <select required
                  >
                    
                     <option value=''>Select...</option>
                    <option value='Admin'>Admin</option>
                    <option value='Employee'>Employee</option>
                    </select>
                    <br/>
                    <button
                    style={{
                      outline:"none",
                      border:"0px",
                      backgroundColor:"#66BB6A",
                      borderRadius:"5px",
                      marginTop:"5px"
                    }}
                    >
                      Change Role
                    </button>
                    </form>
                    }
                  <p className="text-muted mb-4"><span >Employee Status: </span>
                  {result.empStatus}</p>
                  <div className="d-flex justify-content-center mb-2">
                  {showBtn&&<form onSubmit={()=>UpdateStatusHistory(result._id, result.empStatus)}>
                  <select
                  required
                  onChange={(event) => {
                    setStatus(event.target.value);
                    }}
                  >
                    <option value=''>Select...</option>
                    <option value='Active'>Activate</option>
                    <option value='Deactivated'>Deactivate</option>
                    </select>
                    <button>Update</button>
                    </form>
                    }
                  </div>
                </MDBCardBody>
              </MDBCard>
  
              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText>{result.Emailad}</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab class="fas fa-phone" style={{ color: '#333333' }} />
                      <MDBCardText>{result.ContactNo}</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <MDBBtn onClick={()=>setShowSalary(true)}>Salary</MDBBtn>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody >
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBTabs>
                <MDBTabsContent>
                  <MDBTabsItem>
                  <MDBTabsLink onClick={()=>setEquipment(false)} active={equipment==false}>
                        Profile
                  </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabsContent>
                <MDBTabsContent>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={()=>setEquipment(true)} active={equipment==true}>
                      Equipments
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabsContent>
              </MDBTabs>
              {!equipment&&<MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                  <MDBCol style={{display:"flex"}}>
                    <MDBCardText style={{alignContent:"inherit"}}>Department:</MDBCardText>
                  </MDBCol>
                  <MDBCol style={{alignItems:"center"}}>
                  <MDBCardText >{result.department}</MDBCardText>
                    {showBtn&&<MDBInput label={result.department}  
                    onChange={(event) => {
                    setDepartment(event.target.value);
                    }} >
              </MDBInput>}
              {showBtn&&<MDBBtn onClick={()=>UpdateDeptHistory(result._id, result.department)}><i class="fas fa-check"></i></MDBBtn>}
                  </MDBCol>
                </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol style={{display:"flex"}}>
                    <MDBCardText>Position:</MDBCardText>
                    </MDBCol>
                    <MDBCol  style={{alignItems:"center"}}>
                    <MDBCardText >{result.position}</MDBCardText>
                    {showBtn&&<MDBInput label={result.position}  
                    onChange={(event) => {
                    setposition(event.target.value);
                    }}></MDBInput>}
                     {showBtn&&<MDBBtn onClick={()=>UpdatePositionHistory(result._id, result.position)}><i class="fas fa-check"></i></MDBBtn>}
                    
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol style={{display:"flex"}}>
                    <MDBCardText>Immidiate Superior:</MDBCardText>
                    </MDBCol>
                    <MDBCol style={{alignItems:"center"}}>
                    <MDBCardText  >{result.immSuperior}</MDBCardText>
                    {showBtn&&<MDBInput label={result.immSuperior}  
                    onChange={(event) => {
                    setImmSuperior(event.target.value);
                    }}></MDBInput>}
                    {showBtn&&<MDBBtn onClick={()=>UpdateImmSuperiorHistory(result._id, result.immSuperior)}><i class="fas fa-check"></i></MDBBtn>}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol style={{display:"flex"}}>
                    <MDBCardText>Emergency Person To Contact:</MDBCardText>
                    </MDBCol>
                    <MDBCol style={{alignItems:"center"}}>
                    <MDBCardText >{result.EmPerToContact}</MDBCardText>
                    {showBtn&&<MDBInput label={result.EmPerToContact}  
                    onChange={(event) => {
                    setEmPerContact(event.target.value);
                    }}></MDBInput>}
                    {showBtn&&<MDBBtn onClick={()=>UpdateEmPerToContactHistory(result._id, result.EmPerToContact)}><i class="fas fa-check"></i></MDBBtn>}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol style={{display:"flex"}}>
                    <MDBCardText>SSS:</MDBCardText>
                    </MDBCol>
                    <MDBCol style={{alignItems:"center"}}>
                    <MDBCardText>{result.sSS}</MDBCardText>
                    {showBtn&&<MDBInput label={result.sSS}  
                    onChange={(event) => {
                    setSSS(event.target.value);
                    }}></MDBInput>}
                    {showBtn&&<MDBBtn onClick={()=>UpdateSSSHistory(result._id, result.sSS)}><i class="fas fa-check"></i></MDBBtn>}
                    </MDBCol>
                  </MDBRow>
                  <hr/>
                  <MDBRow>
                    <MDBCol style={{display:"flex"}}>
                    <MDBCardText>Pag Ibig:</MDBCardText>
                    </MDBCol>
                    <MDBCol style={{alignItems:"center"}}>
                    <MDBCardText>{result.pagIbig}</MDBCardText>
                    {showBtn&&<MDBInput label={result.pagIbig}  
                    onChange={(event) => {
                    setPagIbig(event.target.value);
                    }}></MDBInput>}
                    {showBtn&&<span><MDBBtn onClick={()=>UpdatePagIbigHistory(result._id, result.pagIbig)}><i class="fas fa-check"></i></MDBBtn></span>}
                    </MDBCol>
                  </MDBRow>
                  <hr/>
                  <MDBRow>
                    <MDBCol style={{display:"flex"}}>
                    <MDBCardText>Tin ID:</MDBCardText>
                    </MDBCol>
                    <MDBCol style={{alignItems:"center"}}>
                    <MDBCardText>{result.tinId}</MDBCardText>
                    {showBtn&&<MDBInput label={result.tinId}  
                    onChange={(event) => {
                    setTinID(event.target.value);
                    }}></MDBInput>}
                    {showBtn&&<span><MDBBtn onClick={()=>UpdateTinIDHistory(result._id, result.tinId)}><i class="fas fa-check"></i></MDBBtn></span>}
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
                <MDBBtn onClick={()=>setShowBtn(!showBtn)}><i class="far fa-edit"></i></MDBBtn>
              </MDBCard>}
              {equipment&&<MDBCard>
                <MDBCardTitle>
                  <MDBCardBody>Equipments:</MDBCardBody>
                 </MDBCardTitle>
                 <MDBTable>
                 {getEquipment.length<=0?"No Equipment":
                 getEquipment.map((val, key)=>{
                  return<MDBTableBody key={key}>
                    <tr>
                     <td>{val.devices} </td>
                     <td>{val.deviceNum} </td>
                     <td>{val.specs}</td>
                    </tr>
                  </MDBTableBody>
                 })}
                 </MDBTable>
                </MDBCard>}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

        </div>
      })}

    </div>
    )
    
    }

    export default UserCheck;