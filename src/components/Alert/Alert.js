import { MDBCard, MDBCardBody, MDBCardText, MDBContainer, MDBCol, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { MDBRow } from 'mdbreact';
import React, { Component } from 'react'
import { useState, useEffect,} from 'react';
import { Link } from 'react-router-dom';
import TypeIt from "typeit-react";

const Alert=()=>{

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
                                  This page is for the admin Only 
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
                               <Link path to="/dash"><MDBBtn className="btn btn-danger"
                               >
                                Go Back to dashboard
                               </MDBBtn></Link>
                                  
                          </MDBCol>
                         </MDBCardBody>  
                    </MDBRow>
                </MDBContainer>
            </div>
    )

}
export default Alert;