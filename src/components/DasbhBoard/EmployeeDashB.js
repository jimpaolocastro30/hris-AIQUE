import React, {useEffect, useState} from 'react'
import { Link,useHref,useLocation, useParams } from "react-router-dom";
import 'bootstrap'
import Axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCol,
     MDBRow, MDBTextArea, MDBContainer, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import TypeIt from 'typeit-react';
import ScrollToTop from 'react-scroll-to-top'
import Swal from 'sweetalert2';
import EditAnnouncement from '../Announcement/EditmModal';
import { FadeLoader } from 'react-spinners';
import '../DasbhBoard/EmployeeDash.css'
import SidebarV2 from '../Sidebar/SidebarV2';

const EmployeeDashB=()=> {
 ////hide/unhide///
 const [showEdit, setShowEdit] = useState(false)
 const[Role,setRole] = useState("")
const [auth, setAuth] = useState(false)
 const emailId = localStorage.getItem("emailId") 
function Auth(){
    try {
    if (Role ==="Admin") {
        setAuth(true)
    }
    if(Role==="Employee"){
        setAuth(false)
    } 
    if(emailId==null){
        window.location.href='/Error'
    }
    } catch (error) {
      console.log(error)  
    }
   
   
 }
 function arrayChecker(){
    if(announcementList.length>0){
    setDataChecker(true)
   }else{
    setDataChecker(false)
   }
 }

 const[loading, setLoading] = useState(false)
 const [AnnLoading, setAnnLoading] = useState(false)
 const[dataChecker, setDataChecker] = useState(false)
function loadingHandler(){
    try {
    if(profile===['']){
        setLoading(true)
    } 
    if(Role===null){
        setLoading(true)
    } 
   if(!announcementList){
    setAnnLoading(true)
   }
   
   
   
    } catch (error) {
        
    }
    
}


const [showBtn, setShowBtn] = useState(false)
useEffect(() => {
    setTimeout(function () {
      setShowBtn(false);
    } );
  }, []);

const [profile, setProfile] = useState([])

 const email = localStorage.getItem("emailId")   


const findProfile = ( )=>{
    Axios.get('http://localhost:3001/api/EmpProf/?Emailad='+email).then((response)=>{
      console.log(response.data.result)
      setProfile(response.data.result)
      setRole(response.data.result[0].role)
      
    })
  }
const fetchAnnouncement = ()=>{
Axios.get('http://localhost:3001/Ann/Announcement').then((response)=>{
    setAnnouncementList(response.data)
    console.log(response.data)
})
}
//////////////////////////////////////////////////
//Announcement UseStates//
const [announcement, setAnnouncement] = useState('')
const [tag, setTag] = useState('')
const [announcementList, setAnnouncementList] = useState([''])
//////Announcement Insert data////////////////////
const addAnnouncement = () => {
    try{

      Axios.post("http://localhost:3001/Ann/insert", {
        user:emailId,
        date:date,
        tag:tag,
        announcement:announcement
      })
    }catch(err){
      console.error("error");
    }
      
};


////////////Delete Announcement//////////////
async function DeleteAnnouncement(id){
    Axios.delete(`http://localhost:3001/Ann/delete/${id}`,{
        id:id
    }).then(res=>{
        Swal.fire({
            title:"Announcement has been deleted",
            icon:"info",
            timer:1000
        }).then(res=>{
            fetchAnnouncement()
        })
    })
}
function ddelete (id){
    Swal.fire({
        title:"Are You Sure??",
        text:"You are about to delete an Announcement...",
        icon:'warning',
        showCancelButton:true,
        cancelButtonText:"No, go back",
        cancelButtonColor:"red",
        showConfirmButton:true,
        confirmButtonText:"yes, delete",
        confirmButtonColor:"green"
    }).then(function(dismiss){
        if (dismiss.isConfirmed==false){
            Swal.fire({
                icon:"info",
                title:"Dismissed"
            })
        } else {
            DeleteAnnouncement(id)
        }
    })
}
const [editID,setEditID] = useState("")
async function getID (id){
    setEditID(id)
}
useEffect(() => 
{   
    findProfile()
},[])
useEffect(()=>{
    fetchAnnouncement()
})
useEffect(()=>{
    loadingHandler()
    arrayChecker()
    })
useEffect(() => 
    {  
     Auth()
    })
const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    return( 
        <div>
    <div className="EmpDash" style={{ backgroundColor:"#F5F5F5"}}>
   <SidebarV2/>
    { loading ? <div className='LoaderPg' style={{width:"100vw", height:"100vh",backgroundColor:"#BBDEFB"}}>
    <FadeLoader  
    color={"#1565C0"}
    loading={loading}
    className='Loader'
    width={20}
    height={5}
    radius={20}
    margin={19}
    cssOverride={{
        position:"absolute", top:"50%", left:"50%",
    }}
    />
    </div>:
    <MDBContainer style={{marginTop:"30px"}} >
    {showEdit&&<EditAnnouncement CloseModal={setShowEdit} id={editID}/>}  
        <MDBRow>
        
        <MDBCol md='4'>
            <MDBRow center>
               
            <MDBCard style={{width:"40vh",
            backgroundColor:"#FAFAFA", display:"fixed",
            marginRight:"5px"}}>
               
                     <MDBRow center>
                    <MDBCardText style={{display:'flex', marginTop:"20px",
                     }}>
                        <p
                        style={{
                            fontFamily:"poppins",
                            fontSize:"35px"
                            
                        }} 
                        >Hello and welcome to HRIS</p>
                    </MDBCardText>
                    <MDBRow start>
                    <hr style={{alignItems:"center", width:"93%",
                     height:'5px',marginBottom:"2px"
                     
                     }} />
                    <p style={{fontFamily:"monospace", margin:0, alignItems:'initial'}}>The Date today: {date}</p>
                    <hr style={{alignItems:"center", width:"93%",
                    MarginTop:"0px",marginBottom:'1px',
                    height:'5px'}} />
                    <hr style={{alignSelf:"center", width:"93%", marginTop:"1px"}} />
                    </MDBRow>
                    </MDBRow>
                    <MDBRow center >
                    <MDBCardImage
                    src='https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='sketch pic'
                    style={{width:"50vh", borderRadius:"25px",
                    height:"15vh"}}
                    fluid
                    >
                    
                    </MDBCardImage>
                    </MDBRow>
                    <MDBCardText style={{marginTop:"20px", marginBottom:"25px"}}>
                    <TypeIt
                    options={{
                        speed:10

                    }}
                    style={{
                        fontFamily:"poppins",
                        opacity:0.9
                        
                    }}
                    >
                        A human resources information system (HRIS) is a software solution that maintains, manages, 
                        and processes detailed employee information and human resources-related policies and procedures.
                         As an interactive system of information management, the HRIS standardizes human resources (HR) 
                         tasks and processes while facilitating accurate record keeping and reporting.
                        
                        </TypeIt>
                        </MDBCardText>
              
            </MDBCard>
            
            </MDBRow>
        </MDBCol>
        
        
      
        <MDBCol  style={{
            height:'800px',
        }}
        md='8'
        >
        <MDBCard style={{width:"78vh", height:'800px', backgroundColor:"#FAFAFA"}}>
        {profile.map((val, key)=>{
        
        return<div key={key}>
       
        
        <h1 style={{
               fontFamily:"poppins",
               fontSize:"35px",
               marginTop:"20px"
                  
             }}>
        Mr/Ms {val.FirstName} {val.LastName}
        </h1>
        
        </div>
            
        })}
        
            <MDBRow center>
            <hr style={{alignItems:"center", width:"36vw",
                    MarginTop:"0px",marginBottom:'1px', borderRadius:"5px",
                    height:'5px'}} />
            <MDBCol md='9'>
               
            <h2 style={{
               fontFamily:"poppins",
               fontSize:"35px"
                            
             }} >Announcement:</h2>
            
            {showBtn&&<form onSubmit={()=>addAnnouncement()}>
            <MDBTextArea
            onChange={(event) => {
                setAnnouncement(event.target.value);
              }} 
            required
            label="what`s on your mind"
            >
            </MDBTextArea>
            <MDBInput
            onChange={(event) => {
                setTag(event.target.value);
              }} 
            label="Tag"
            ></MDBInput>
            <MDBBtn>Add</MDBBtn>
            </form>
            
            }
            </MDBCol>
            </MDBRow>
            
                <MDBRow >
                   
                    <MDBCol start md='9'>
                    </MDBCol>
                    <MDBCol className='t' end md='1'>
           {auth&&<div className='role'>
           
            <MDBBtn color='White' 
            onClick={()=>setShowBtn(!showBtn)
            }
            style={{ color: '#8b8761' }}>
            <i className="fas fa-plus fa-lg"></i>
            </MDBBtn>
            </div>}
           
            </MDBCol>
            </MDBRow>
            {AnnLoading?<FadeLoader
            cssOverride={{
                marginLeft:"47%",
                marginTop:"10%"
                
            }}
            />: dataChecker?
            <MDBRow>
            {announcementList.map((val, key)=>{

                return<div key={key}>
                    <MDBCol md='12'>
                  
                        <MDBCard style={{marginTop:"30px"}}>
                            <MDBRow style={{
                                marginTop:"20px", width:"140%"
                            }} >
                                <MDBCol center md='9'>
                                   
                                        <MDBRow start>
                                        <MDBCol md='9'>
                                        <MDBRow start>
                                        <MDBCol style={{
                                            padding:"0px"
                                        }} md='1'>
                                    <MDBCardImage
                                    src='https://cdn-icons-png.flaticon.com/512/552/552721.png'
                                    style={{
                                        width:"40px",
                                        padding:"5px",
                                        marginLeft:"20px"
                                    }}
                                    />
                                    </MDBCol>
                                    <MDBCol center style={{
                                        padding:"0px", textAlign:"start", marginLeft:"28px"
                                    }} md='7'>
                                    {val.user} 
                                    </MDBCol>
                                    </MDBRow>
                                    </MDBCol>
                                    <MDBRow end>
                                        <MDBCol md='6'>

                                        </MDBCol>
                                        <MDBCol md='6'>

                                        </MDBCol>
                                   { auth&&<MDBCol style={{padding:"0px"}} md='2'>
                                    
                                   <button 
                                    onClick={()=>{setShowEdit(true); getID(val._id);}}
                                   style={{
                                        border:"none", backgroundColor:"white", alignSelf:"end"
                                    }}><MDBIcon  className='fa-edit'/></button> 
                                    <button
                                    style={{
                                        border:"none", backgroundColor:"white", padding:"6px",alignSelf:"end"
                                    }}
                                    onClick={()=>ddelete(val._id)}
                                    >
                                        <MDBIcon className='fa-trash-alt'/>
                                    </button>
                                  
                                   </MDBCol>}
                                   </MDBRow>
                                    </MDBRow>
                                    
                                   
                                </MDBCol>    
                            </MDBRow>
                            <MDBRow style={{
                                marginTop:'20px'
                            }}>
                                <MDBCol>
                                  {val.announcement}   
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{marginBottom:"25px"}}>
                                <MDBCol>
                                    Tags:
                                {val.tag} 
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{marginBottom:"15px"}}>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </div>
            })}
            </MDBRow>:
            <MDBRow center style={{height:'5px', marginTop:"40px"}}>
                <MDBCol center md='4' style={{backgroundColor:'#E57373', height:'50px'}}>
                    <div style={{
                        padding:"13px", color:"white", fontFamily:"poppins"
                    }}>
                No Data Detected 
                    </div>
                </MDBCol>
                </MDBRow>
                
            }
            
            </MDBCard>
            </MDBCol>
            </MDBRow>
        <ScrollToTop
        smooth
        width='40' height='40' style={{width:"60px", height:"60px",
       backgroundColor:"#42A5F5"
        }}/>
     
    </MDBContainer>
}
        </div>
        </div>




    )
    
}

export default EmployeeDashB;