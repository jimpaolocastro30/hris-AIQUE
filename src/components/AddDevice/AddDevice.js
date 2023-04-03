import { MDBCol,  MDBCard, MDBContainer,
MDBInput, MDBRow, MDBCardText, MDBBtn } 
from "mdb-react-ui-kit"
import swal from "sweetalert2";
import { useState, useEffect } from "react";
import Axios from 'axios'
import '../AddDevice/AddDevice.css'


const AddDevice=()=>{
    //input data/device variables
  const [Status, setStatus] = useState("")
  const [device, setNewDevice] = useState("")
  const [date, setDate] = useState("")
  const [deviceNum, setDeviceNumber] = useState("")
  const [spec, setSpec] = useState("")
  const [price, setPrice] = useState("")
  const [provider, setProvider] = useState("")
  const mHistory = ("Added a device: ")
  const mHistory2 = (" device Number: ")
///////
const [error, setError] = useState([])
//////
    const addToList = () => {
      try{
        InventoryHistory()
        Axios.post("http://13.228.71.195:3001/admin/insert", {
          device: device,
          deviceNum: deviceNum,
          spec: spec,
          price: price,
          provider: provider,
          Status: Status,
          date: date,
        })
          
       
      }catch(err){
        console.error("error");
      }
        
        };
      
      
      const dd = () => {
          swal.fire({
            position: "center",
            icon: "success",
            title: "Your Data has been \n saved",
            showConfirmButton: false,
            timer: 1000,
          });
          addToList();

        }
       
      useEffect(() => {
        
      }, []);
      
      const current = new Date();
      const hdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      const hEmail = localStorage.getItem('emailId');
      const full = mHistory+device+mHistory2+deviceNum
      
      console.log(full)
      const InventoryHistory = ()=>{
          Axios.post("http://13.228.71.195:3001/InvHistory/insert",{
          fullName:hEmail,
          method:full,
          date:hdate,
        })
      }

    return(
      <div className="Modal">
       <div style={{
            position:"fixed",
            right:"12px",
            marginTop:"12px",
            height:"45vh",
            width:"30vw",
            zIndex:"999",
        }}
        >
            <MDBContainer style={{
            }}>
                <MDBCard style={{
                    height:"400px",
                }}>
                    <MDBCardText style={{
                        marginTop:"15px"
                    }}>
                    <h5>Inventory Add Device:</h5>
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
                            type="text"
                            required
                            onChange={(event) => {
                              setNewDevice(event.target.value)
                            }}
                             style={{
                                marginBottom:"5px"
                            }}
                            label="Input Device"
                            />
                            </MDBCol>
                            </MDBRow>
                            <MDBRow>
                            <MDBCol>
                            <MDBInput
                            type="text"
                            required
                            onChange={(event) => {
                              setDeviceNumber(event.target.value);
                            }}
                             style={{
                                marginBottom:"5px"
                            }}
                            label="Set Device Number"
                            />
                            </MDBCol>
                            </MDBRow>
                            <MDBRow style={{
                              marginTop:"6px"
                             }}>
                            <MDBCol>
                            <MDBInput
                            type="text"
                            required
                            onChange={(event) => {
                              setProvider(event.target.value);
                            }}
                             style={{
                                marginBottom:"5px"
                            }}
                            label="Provider"
                            />
                                </MDBCol>
                                <MDBCol>
                            <MDBInput
                             style={{
                                marginBottom:"5px"
                            }}
                            type="Number"
                          required
                          onChange={(event) => {
                            setPrice(event.target.value);
                          }}
                            label="Price"
                            />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{
                              marginTop:"6px"
                             }}>
                                <MDBCol>
                            <MDBInput
                            type="text"
                            required
                            onChange={(event) => {
                              setSpec(event.target.value);
                            }}
                             style={{
                                marginBottom:"5px"
                            }}
                            label="Specifications"
                            />
                             <MDBRow style={{
                              marginTop:"20px"
                             }}>
                                <MDBCol center md='6'>     
                            <span>Status: </span>       
                            <select
                            required
                            onChange={(event) => {
                            setStatus(event.target.value);
                              }}
                             style={{
                                marginBottom:"5px"
                            }}
                            >
                            <option value=''>Select...</option>
                          <option value="Used">Used</option>
                          <option value="To Repair">To Repair</option>
                          <option value="New">New</option>
                          <option value="Reserved">Reserved</option>
                          <option value="Decommisioned">Decommisioned</option>
                            </select>
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
                            label="date"
                            />
                                </MDBCol>
                            </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{
                                marginTop:'15px'
                            }}>
                                <MDBCol>
                                 <MDBBtn type="submit">Add To List</MDBBtn>   
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

export default AddDevice;