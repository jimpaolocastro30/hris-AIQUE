import { MDBBtn, MDBCard, MDBContainer, MDBInput, MDBTextArea, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit'
import { MDBCol, MDBRow } from 'mdbreact'
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import Axios from 'axios'
import React from 'react'
import '../Announcement/Edit.css'

function EditAnnouncement({CloseModal, id}){
    ///////Update States////////
    const [upAnnouncement ,setUpAnnouncement] = useState('')
    const [upTag, setUpTag] = useState('')
    const [error, setError] = useState('')
    ///////Update Axios////////
    function updateAnnouncement(id){
        if (upAnnouncement=='')
        { const res = "please Input a Announcement"
            setError(res)
        }else{
        Axios.put('http://13.229.91.120:3001/Ann/update/Announcement/:id',{
            id:id,
            newAnnouncement:upAnnouncement 
   })
        }            

    }
    
    function updateTag(id){
        if (upTag=='') {
            const res = "please Input a Tag"
            setError(res)
        } else {
             Axios.put('http://13.229.91.120:3001/Ann/update/tag/:id',{
            id:id,
            newTag:upTag,   
            })
        }
       
    }
    return(
        <div className="back">
            <MDBContainer >
            <MDBCard style={{position:"fixed",
             left:"50%", top:"35%", zIndex:"9999",
             width:"500px", padding:"10px" 

             }}>
            <MDBValidation onSubmit={()=>updateAnnouncement(id)}>
            <MDBRow>
                <MDBCol>
                <MDBValidationItem className='mb-3 pb-1' feedback={error} invalid noValidate>
                    <MDBTextArea
                    onChange={(event) => {
                        setUpAnnouncement(event.target.value);
                        }}
                    required={true}
                    label='Update Announcement...'
                    />
                </MDBValidationItem>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <MDBBtn 
                    type='submit'
                    style={{
                        marginBottom:"15px"
                    }}>
                        Update Announcement
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
            </MDBValidation>
            <MDBValidation onSubmit={()=>updateTag(id)}>
            <MDBRow>
                <MDBCol>
                    <MDBValidationItem className='mb-3 pb-1' feedback={error} invalid>
                    <MDBInput
                    onChange={(event) => {
                        setUpTag(event.target.value);
                        }}
                    label='Update Tag...'
                    required
                    />
                    </MDBValidationItem>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <MDBBtn style={{
                        marginBottom:"15px"
                    }}>Update Tag</MDBBtn>
                </MDBCol>
            </MDBRow>
            </MDBValidation>
            <MDBRow>
                <MDBCol>
                    <MDBBtn color='#EF5350' style={{backgroundColor:"#EF5350"}} onClick={()=>CloseModal(false)} >
                        close
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
            </MDBCard>
            </MDBContainer>
        </div>
    )
}

export default EditAnnouncement;