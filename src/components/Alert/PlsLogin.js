import { MDBCard, MDBCardBody, MDBCardText,
     MDBContainer, MDBCol, MDBCardImage,
      MDBBtn, MDBRow } from 'mdb-react-ui-kit';
import TypeIt from 'typeit-react';
import { Link } from 'react-router-dom';


const PlsLogin=()=>{
    localStorage.getItem("role")
    const logOut = ()=>{
        localStorage.removeItem('Bearer')
          localStorage.removeItem('emailId')
          localStorage.removeItem('role')
          window.location.href = '/'
       }
    
        return(
                <div className='Alert'>
                   
                    <MDBContainer style={{marginTop:"10%"}}>
                        <MDBRow>
                        <MDBCard style={{}}>
                           
                        <MDBCardBody>
                            <MDBRow center>
                                <MDBCol>
                                <MDBCard>
                                <MDBCardImage
                                src='https://cdn-icons-png.flaticon.com/512/2460/2460562.png'
                                style={{
                                    width:"350px",
                                    alignSelf:"center"
                                }}
                                />
                                </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <MDBCard style={{backgroundColor:"grey"}}>
                                <MDBCardText>
                                    <TypeIt
                                    options={{
                                        speed:60
                                    }}
                                    style={{
                                        fontSize:"40px",
                                        color:"white"
                                    }}
                                    >
                                      Please Login, dont Bypass!!!
                                    </TypeIt>
                                </MDBCardText>
                                </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                        </MDBCard>
                        </MDBRow>
                        <MDBRow center>
                            <MDBCardBody style={{marginTop:"15px"}}>
                              <MDBCol>
                                  <MDBBtn className="btn btn-danger"
                                  onClick={()=>logOut()}
                                   >
                                    Login Page
                                   </MDBBtn>
                                      
                              </MDBCol>
                             </MDBCardBody>  
                        </MDBRow>
                    </MDBContainer>
                </div>
        )
    
    }
    export default PlsLogin;