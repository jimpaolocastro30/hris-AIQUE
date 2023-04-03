import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTabsItem,
  MDBTabsLink,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
  MDBTabs

} from 'mdb-react-ui-kit';
import SidebarV2 from '../../Sidebar/SidebarV2';


export default function ProfilePage() {
const [showBtn, setShowBtn] = useState(true)
  
/////
const [equipment, setEquipment] = useState(false)

  ////useState for update////
  const[department,setDepartment]= useState('')
  const[position, setposition] = useState('')
  const[immSuperior,setImmSuperior] = useState('')
  const[EmPerContact,setEmPerContact ] = useState('')
  const[sSS, setSSS] = useState('')
  const[pagIbig, setPagIbig]= useState('')
  const[tinId, setTinID] = useState('')

/// axios update///
  const UpdateDepartment = (id)=>{
    
    Axios.put("http://13.229.91.120:3001/api/update/department/:id",{
      id:id,
      newDepartment : department
     
    }).then(res =>{
      findProfile()
    })}

    const UpdatePosition = (id)=>{
    
      Axios.put("http://13.229.91.120:3001/api/update/position/:id",{
        id:id,
        newPosition : position
       
      }).then(res =>{
        findProfile()
      })}

      const UpdateImmSuperior = (id)=>{
    
        Axios.put("http://13.229.91.120:3001/api/update/immSuperior/:id",{
          id:id,
          newSuperior : immSuperior
         
        }).then(res =>{
          findProfile()
        })}
  
        const EmPerToContact = (id)=>{
    
          Axios.put("http://13.229.91.120:3001/api/update/EmPerToContact/:id",{
            id:id,
            newPerContact : EmPerContact
           
          }).then(res =>{
            findProfile()
          })}

          const UpdateSSS = (id)=>{
    
            Axios.put("http://13.229.91.120:3001/api/update/SSS/:id",{
              id:id,
              newSSS : sSS
             
            }).then(res =>{
              findProfile()
            })}
            const UpdatePagIbig = (id)=>{
    
              Axios.put("http://13.229.91.120:3001/api/update/pagIbig/:id",{
                id:id,
                newPagIbig : pagIbig
               
              }).then(res =>{
                findProfile()
              })} 
        
              const UpdateTinID = (id)=>{
    
                Axios.put("http://13.229.91.120:3001/api/update/tinId/:id",{
                  id:id,
                  newTinID : tinId
                 
                }).then(res =>{
                  findProfile()
                })}   

  ///UseStates for Updates///
  const[profile, setProfile] = useState([])
  //const[department, setDepartment] = useState(" ")
  
  ///getting Data by Emailad query in backend///
  const email = localStorage.getItem("emailId")
  console.log(email)

  const findProfile = ( )=>{
    Axios.get('http://13.229.91.120:3001/api/EmpProf/?Emailad='+email).then((response)=>{
      console.log(response.data.result)
      setProfile(response.data.result)
    })
  }
  
  useEffect(()=>{
    findProfile();
    
    },[])

    useEffect(()=>{
      console.log(department)
      console.log(position)
    });
   

useEffect(() => {
    setTimeout(function () {
      setShowBtn(false);
    }, );
  }, []);


  return (
    <div className="logins">
    <SidebarV2/>

      {profile.map((val, key)=>{

       return<div style={{backgroundColor:"white", width:"100vw", height:"100vh" }} key={key}>
         <section style={{ backgroundColor: 'white' }}>
        <MDBContainer className="py-5">
          <MDBRow start>
            <MDBCol md='4' start style={{
              fontSize:"50px", color:"#757575", marginBottom:"40px", 
            }}>
            
              Your Profile

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
                    
                  <p className="text-muted mb-1">{val.FirstName} {val.MiddleName} {val.LastName}</p>
                  <p className="text-muted mb-4">{val.role}</p>
                  <p className="text-muted mb-4"><span >Employee Status: </span>
                  {val.empStatus}</p>
                  <div className="d-flex justify-content-center mb-2">
                    
                  </div>
                </MDBCardBody>
              </MDBCard>
  
              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText>{val.Emailad}</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab class="fas fa-phone" style={{ color: '#333333' }} />
                      <MDBCardText>{val.ContactNo}</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody >
              </MDBCard>
            </MDBCol>
            <MDBTabs>
            <MDBTabsItem>
          <MDBTabsLink>
            Tab 1
          </MDBTabsLink>
        </MDBTabsItem>
            </MDBTabs>
            {equipment&&<MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                  <MDBCol style={{display:"flex"}}>
                    <MDBCardText style={{alignContent:"inherit"}}>Department:</MDBCardText>
                  </MDBCol>
                  <MDBCol style={{alignItems:"center"}}>
                  <MDBCardText >{val.department}</MDBCardText>
                    {showBtn&&<MDBInput label={val.department}  
                    onChange={(event) => {
                    setDepartment(event.target.value);
                    }} >
              </MDBInput>}
              {showBtn&&<MDBBtn onClick={()=>UpdateDepartment(val._id)}><i class="fas fa-check"></i></MDBBtn>}
                  </MDBCol>
                </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol style={{display:"flex"}}>
                    <MDBCardText>Position:</MDBCardText>
                    </MDBCol>
                    <MDBCol  style={{alignItems:"center"}}>
                    <MDBCardText >{val.position}</MDBCardText>
                    {showBtn&&<MDBInput label={val.position}  
                    onChange={(event) => {
                    setposition(event.target.value);
                    }}></MDBInput>}
                     {showBtn&&<MDBBtn onClick={()=>UpdatePosition(val._id)}><i class="fas fa-check"></i></MDBBtn>}
                    
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol style={{display:"flex"}}>
                    <MDBCardText>Immidiate Superior:</MDBCardText>
                    </MDBCol>
                    <MDBCol style={{alignItems:"center"}}>
                    <MDBCardText  >{val.immSuperior}</MDBCardText>
                    {showBtn&&<MDBInput label={val.immSuperior}  
                    onChange={(event) => {
                    setImmSuperior(event.target.value);
                    }}></MDBInput>}
                    {showBtn&&<MDBBtn onClick={()=>UpdateImmSuperior(val._id)}><i class="fas fa-check"></i></MDBBtn>}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol style={{display:"flex"}}>
                    <MDBCardText>Emergency Person To Contact:</MDBCardText>
                    </MDBCol>
                    <MDBCol style={{alignItems:"center"}}>
                    <MDBCardText >{val.EmPerToContact}</MDBCardText>
                    {showBtn&&<MDBInput label={val.EmPerToContact}  
                    onChange={(event) => {
                    setEmPerContact(event.target.value);
                    }}></MDBInput>}
                    {showBtn&&<MDBBtn onClick={()=>EmPerToContact(val._id)}><i class="fas fa-check"></i></MDBBtn>}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol style={{display:"flex"}}>
                    <MDBCardText>SSS:</MDBCardText>
                    </MDBCol>
                    <MDBCol style={{alignItems:"center"}}>
                    <MDBCardText>{val.sSS}</MDBCardText>
                    {showBtn&&<MDBInput label={val.sSS}  
                    onChange={(event) => {
                    setSSS(event.target.value);
                    }}></MDBInput>}
                    {showBtn&&<MDBBtn onClick={()=>UpdateSSS(val._id)}><i class="fas fa-check"></i></MDBBtn>}
                    </MDBCol>
                  </MDBRow>
                  <hr/>
                  <MDBRow>
                    <MDBCol style={{display:"flex"}}>
                    <MDBCardText>Pag Ibig:</MDBCardText>
                    </MDBCol>
                    <MDBCol style={{alignItems:"center"}}>
                    <MDBCardText>{val.pagIbig}</MDBCardText>
                    {showBtn&&<MDBInput label={val.pagIbig}  
                    onChange={(event) => {
                    setPagIbig(event.target.value);
                    }}></MDBInput>}
                    {showBtn&&<span><MDBBtn onClick={()=>UpdatePagIbig(val._id)}><i class="fas fa-check"></i></MDBBtn></span>}
                    </MDBCol>
                  </MDBRow>
                  <hr/>
                  <MDBRow>
                    <MDBCol style={{display:"flex"}}>
                    <MDBCardText>Tin ID:</MDBCardText>
                    </MDBCol>
                    <MDBCol style={{alignItems:"center"}}>
                    <MDBCardText>{val.tinId}</MDBCardText>
                    {showBtn&&<MDBInput label={val.tinId}  
                    onChange={(event) => {
                    setTinID(event.target.value);
                    }}></MDBInput>}
                    {showBtn&&<span><MDBBtn onClick={()=>UpdateTinID(val._id)}><i class="fas fa-check"></i></MDBBtn></span>}
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
                <MDBBtn onClick={()=>setShowBtn(!showBtn)}><i class="far fa-edit"></i></MDBBtn>
              </MDBCard>
            </MDBCol>}
          </MDBRow>
        </MDBContainer>
      </section>

        </div>
      })}
      
      
      
      
      
      
      
     
   
    
    </div>
  );
}