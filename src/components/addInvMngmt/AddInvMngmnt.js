import { MDBCol,  MDBCard, MDBContainer,
    MDBInput, MDBRow, MDBCardText, MDBBtn } 
from "mdb-react-ui-kit"
import swal from "sweetalert2";
import { useState, useEffect } from "react";
import Axios from 'axios'
import * as AiIcons from 'react-icons/ai'
import './AddInvMngmnt.css'
    
    
    const AddInvMngmnt=()=>{

    const[sugg, setSugg] = useState([])
    const[suggText, setSuggText] = useState('')
    const [users, setUsers] = useState([])
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
    function handleSelected(email, position, name, department){
      setSuggText(email)
      setEmail(email)
      setPosition(position)
      setFullName(name)
      setDepartment(department)
      setSugg([])
    }
    const[invSugg, setInvSugg] = useState([])
    const[InvsuggText, setInvSuggText] = useState('')
    const [InvDevices, setInvDevices] = useState([])
    function InvHandleSuggestion(InvSuggText){
      let devMatches = []
      if(InvSuggText.length>0){
        devMatches = InvDevices.filter(devices=>{
          const regex = new RegExp(`${InvSuggText}`,"gi");
          return devices.deviceNum.match(regex)
        })
      }
      setInvSugg(devMatches)
      setInvSuggText(InvSuggText)
    }
    function handleSelectedInvDevice(devNum, device, spec){
      setInvSuggText(devNum)
      setDeviceNumber(devNum)
      setNewDevices(device)
      setSpec(spec)
      setInvSugg([])
    }
        //input data/device variables//
      const [fullName, setFullName] = useState("");
      const [devices, setNewDevices] = useState("");
      const [date, setDate] = useState("");
      const [deviceNum, setDeviceNumber] = useState("");
      const [specs, setSpec] = useState("");
      const [email, setEmail] = useState("");
      const [department, setDepartment] = useState("");
      const [position, setPosition] = useState("");
    ///////
        const addToInv = () => {
            Axios.post("http://13.228.71.195:3001/InvMngmnt/insert", {
              fullName: fullName,
              deviceNum: deviceNum,
              specs: specs,
              devices:devices,
              email:email,
              date: date,
              department:department,
              position:position,
            })
             
          };
    
          const dd = () => {
            if (console.error[404]) {
              swal.fire({
                icon: "info",
                text: "Unauthorized access, \n Admin only",
                confirmButtonText: "ok",
              });
            } else {
              swal.fire({
                position: "center",
                icon: "success",
                title: "Your Data has been \n saved",
                showConfirmButton: false,
                timer: 1000,
              });
              addToInv();
              InventoryHistory();
            }
            return console.error;
          };
          const current = new Date();
          const hdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
          const hEmail = localStorage.getItem('emailId');
          const full = ("Invmanagement added:"+fullName+"Position:"+position)
          const InventoryHistory = ()=>{
            Axios.post("http://13.228.71.195:3001/InvHistory/insert",{
            fullName:hEmail,
            method:full,
            date:hdate,
          })
        }
       
          useEffect(() => {
            async function fetchUser(){
              const response = await Axios.get('http://13.228.71.195:3001/InvMngmnt/suggestion')
              setUsers(response.data.result)
          }
          fetchUser()

          async function fetchDevices(){
            const options = {
              headers: {
                authorization: "Bearer " + localStorage.getItem("Bearer"),
                "content-type": "application/json",
                accept: "application/json",
              },
            };
            const response = await Axios.get('http://13.228.71.195:3001/admin/read',options)
            setInvDevices(response.data)
          }
          fetchDevices()
          },[])
         
        return(
          <div>
           <div style={{
                position:"fixed",
                right:"12px",
                marginTop:"12px",
                height:"45vh",
                width:"30vw",
                zIndex:"15",
                transition:" 350ms",
                animationFillMode:"forwards"
                
            }}
            >
                <MDBContainer style={{
                }}>
                    <MDBCard style={{
                        height:"465px",
                    }}>
                        <MDBCardText style={{
                            marginTop:"15px"
                        }}>
                        <h5>Inventory Management:</h5>
                    </MDBCardText>
                    <form onSubmit={dd}>
                        <MDBCol style={{
                          
                        }}>
                                <MDBRow
                                style={{
                                    marginTop:"10px",
                                    marginBottom:"5px"
                                }}
                                center
                                >
                                <MDBCol>
                                <MDBInput
                                type="email"
                                required
                                value={suggText}
                                onChange={(event) => {
                                  setEmail(event.target.value);
                                  handleSuggestion(event.target.value);
                                }}
                                
                                 style={{
                                    marginBottom:"5px"
                                }}
                                label="Input Email"
                                />
                              {sugg&&<div className="select">{sugg.map((val, key)=>{
                                return<div key={key} className='selection'
                                onClick={()=>handleSelected(val.Emailad, val.position, val.FirstName+val.MiddleName+val.LastName, val.department )}
                                >{val.Emailad}</div>
                              })}</div>}
                                </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                <MDBCol>
                                <MDBInput
                                type="text"
                                required
                                onChange={(event) => {
                                  setDeviceNumber(event.target.value);
                                  InvHandleSuggestion(event.target.value);
                                }}
                                value={InvsuggText}
                                 style={{
                                    marginBottom:"5px"
                                }}
                                label="Set Device Number"
                                />
                                {invSugg&&<div className="device-select">
                                {invSugg.map((val, key)=>{
                                  return<div key={key} className='inv-selection'
                                   onClick={()=>handleSelectedInvDevice(val.deviceNum, val.device, val.spec)}
                                  >{val.deviceNum}
                                  </div>
                                })
                                }</div>}
                                </MDBCol>
                                </MDBRow>
                                <MDBRow style={{
                                  marginTop:"6px"
                                 }}>
                                <MDBCol>
                                <MDBInput
                                type='text'
                                required
                                value={devices}
                                onChange={(event) => {
                                  setNewDevices(event.target.value);
                                }}
                                 style={{
                                    marginBottom:"5px"
                                }}
                                label="Set Device"
                                />
                                    </MDBCol>
                                    <MDBCol>
                                <MDBInput
                                 style={{
                                    marginBottom:"5px"
                                }}
                                type='text'
                              required
                              value={fullName}
                              onChange={(event) => {
                                setFullName(event.target.value);
                              }}
                                label="FullName"
                                />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow style={{
                                  marginTop:"6px",
                                 
                                 }}>
                                    <MDBCol>
                                <MDBInput
                                type="text"
                                required
                                value={specs}
                                onChange={(event) => {
                                  setSpec(event.target.value);
                                }}
                                 style={{
                                    marginBottom:"5px"
                                }}
                                label="Specifications"
                                />
                                </MDBCol>
                                </MDBRow>
                                <MDBRow style={{
                                  marginTop:"6px",
                                 
                                 }}>
                                    <MDBCol>
                                <MDBInput
                                type="text"
                                required
                                value={department}
                                onChange={(event) => {
                                  setDepartment(event.target.value);
                                }}
                                 style={{
                                    marginBottom:"5px"
                                }}
                                label="Department"
                                />
                                </MDBCol>
                                </MDBRow>
                                <MDBRow style={{
                                  marginTop:"20px",
                                  marginLeft:"1px"
                                 }}>
                                <MDBCol md='5'>
                                <MDBInput
                                 style={{
                                    marginBottom:"5px"
                                }}
                                required
                                value={position}
                                onChange={(event) => {
                                setPosition(event.target.value);
                              }}
                                type='text'
                                label="Position"
                                />
                                </MDBCol>
                                    <MDBCol md='6'>
                                <MDBInput
                                 style={{
                                    marginBottom:"5px"
                                }}
                                required
                                onChange={(event) => {
                                setDate(event.target.value);
                              }}
                                type='date'
                                label="Date"
                                />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow style={{
                                    marginTop:'15px',
                                   
                                }}>
                                    <MDBCol>
                                     <MDBBtn type="submit">
                                    <AiIcons.AiOutlinePlus
                                    size='18'
                                    style={{
                                    display:'inline',
                                    marginRight:'5px',
                                    marginBottom:"2px"

                                    }}
                                    />
                                        Add To List
                                     </MDBBtn>   
                                    </MDBCol>
                                </MDBRow>
                        </MDBCol>
                        </form>
                    </MDBCard>
                </MDBContainer>
            </div>
            </div>
        )
    }
    
    export default AddInvMngmnt;