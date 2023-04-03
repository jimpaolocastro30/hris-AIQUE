import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBContainer } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import SidebarV2 from '../Sidebar/SidebarV2'
import axios from 'axios'

export default function Requests() {
  const [requests, setRequests] = useState([])
  const obj = "options={display:true}"
  function fetchRequests(){
    axios.get('http://13.228.71.195/3001/request/show').then((response)=>{
      setRequests(response.data)
    })
  }

  useEffect(()=>{
    fetchRequests()
  },[])
  
  return (
    <div>
      <SidebarV2/>
      <MDBContainer> 
        Requests
        <MDBCardBody>
          <MDBCard>
            <MDBCardBody>
              <MDBCard>
               {(requests.length<=0)?<MDBCardTitle>
                   no Requests
                </MDBCardTitle>:
                <MDBCard>
                  
                  </MDBCard>}
                </MDBCard>
            </MDBCardBody>
          </MDBCard>
        </MDBCardBody>
        </MDBContainer>
    </div>
  )
}


