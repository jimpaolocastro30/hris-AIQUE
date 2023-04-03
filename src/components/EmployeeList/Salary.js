import { MDBBtn, MDBCard, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

export default function Salary({modalClose}) {

  return (
    <div>
        <MDBContainer style={{position:'absolute', right:"0px", top:"300px", width:'350px', zIndex:'999'}}>
            <MDBCard style={{padding:"10px"}}>
                <MDBCol>
                <MDBRow style={{height:'30px'}}>
                    <MDBCol md='2'>
                    </MDBCol>
                    <MDBCol md='8'>
                    </MDBCol>
                        <MDBCol md='2'>
                            <MDBBtn
                            onClick={()=>modalClose(false)}
                            color='muted'
                            style={{padding:"5px", borderRadius:"40px", boxShadow:'none'}}>
                                <MDBIcon className='fa-close' size='lg'/>
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                <MDBRow style={{padding:"10px", paddingTop:'0px'}}>
                    <MDBCol md='2'>
                    </MDBCol>
                    <MDBCol md='8'>
                        Salary:
                    </MDBCol>
                        <MDBCol md='2'>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            Gross Salary:
                        </MDBCol>
                        <MDBCol>
                            dawdawdadwa    
                        </MDBCol>   
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            Monthly Basic:
                        </MDBCol>
                        <MDBCol>
                            dawdawdadwa    
                        </MDBCol>   
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            Allowance:
                        </MDBCol>
                        <MDBCol>
                            dawdawdadwa    
                        </MDBCol>   
                    </MDBRow>
                </MDBCol>
            </MDBCard>
        </MDBContainer>
    </div>
  )
}
