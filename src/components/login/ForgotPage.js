import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBInputGroup, MDBRow, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit'
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



export default function ForgotPage() {
    const [Emailad, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
    const [request, setRequest] = useState("")
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `http://13.228.71.195:3001/request/forgotpass`;
			const { data } = await axios.post(url, { email:Emailad, request:request,
            date:date
                });
			setMsg(data.message);
			setError("");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};

    useEffect(()=>{
        setRequest("is requesting a Password reset.")
    })
  return (
    <div>
        <MDBContainer breakpoint='lg'>
            <MDBCol center>
                <MDBRow style={{padding:"15%", width:"50%"}}/>
            <MDBRow center>
                <MDBCol center md='4'>
                 <MDBCard style={{width:"450px"}}>
                    <MDBCardBody>
                    <MDBRow>
                        <MDBCol  md='5'>
                            <MDBRow start>
                                <Link to ='/'><MDBCol md='7'>
                                <MDBIcon className='fa-arrow-left'/><span> Back</span>
                                </MDBCol></Link>
                            </MDBRow>
                            <MDBCardImage
                            src='https://cdn-icons-png.flaticon.com/512/6159/6159364.png'
                            style={{
                                width:"80px"
                            }}
                            />
                        </MDBCol>
                    <MDBCol md='7' style={{gap:'15px'}}>
                <MDBValidation onSubmit={handleSubmit}>
                <div>Please Enter your Email:</div>
                <MDBValidationItem invalid>
                <MDBInput
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={Emailad}
                required
                style={{marginBottom:"0px"}}
                 />
                 </MDBValidationItem>
                 {error&&<div>{error}</div>}
                 {msg&&<div>{msg}</div>}
                 <MDBRow center style={{marginTop:"20px"}}>
                    <MDBCol md='7'>
                    <MDBBtn style={{padding:"5px"}}>Enter Email</MDBBtn>
                    </MDBCol>
                 </MDBRow>
                 </MDBValidation>
                 <MDBRow>
                 </MDBRow>
                 </MDBCol>
                    </MDBRow>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
            </MDBCol>
        </MDBContainer>
    </div>
  )
}

