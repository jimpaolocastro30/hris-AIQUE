import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { MDBCard, MDBContainer, MDBInput } from "mdbreact";
import { MDBBtn, MDBCardBody, MDBCardImage, MDBCardText, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Calendar from 'react-calendar'
import TypeIt from "typeit-react";
import SidebarV2 from "../Sidebar/SidebarV2";

const AttendancePage=()=>{
    const [date, setDate] = useState(new Date());



    return(
<div className="attendance" >

<SidebarV2/>
<MDBContainer >
    <MDBCardBody>
    <MDBCard>
    <MDBCard style={{marginTop:"40px", marginLeft:"15px", marginRight:"15px"}}>
        <MDBCardBody>
            <MDBCol>
                <MDBRow>
                <MDBCardText>Attendance</MDBCardText>
                <div >
                <Calendar onChange={setDate} value={date}
                style={{borderRadius:'15px'}}
                />
                </div>
                <span className='text-center'>
                <p >Selected Date:</p>{' '}
                {date.toDateString()}
                </span>
                </MDBRow>
            </MDBCol>
        </MDBCardBody>
    </MDBCard>
<MDBRow>
    <MDBCol>
        <MDBCard style={{marginTop:"20px", marginLeft:"15px",
        marginBottom:"40px",
        marginRight:"15px"}}>
            <MDBCardBody>
                <MDBCardImage
                src="https://cdn-icons-png.flaticon.com/512/3475/3475318.png"
                alt="Avatar add icon"
                style={{width:'150px'}}
                fluid 
                />
                <MDBCardText style={{marginTop:'20px'}}>
                    Employee Attendance
                    <TypeIt
                    options={{
                        speed:40
                    }}
                    >
                        This is where you sign to indicate
                        you've arrived at the work and
                        this is also the page where you will
                        be signing out before you leave.
                    </TypeIt>
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard style={{marginTop:"20px",marginLeft:"15px", marginRight:"15px"}}>
        <MDBCardBody >
                    <MDBInput type='date'></MDBInput>
                        <MDBBtn>
                        Time In
                        <i style={{marginLeft:'7px'}} class="fas fa-stopwatch"></i>
                        </MDBBtn>
            </MDBCardBody>
         </MDBCard>
        </MDBCol>
    </MDBRow>
    </MDBCard>
    </MDBCardBody>
</MDBContainer>

</div>

    )
}
export default AttendancePage;