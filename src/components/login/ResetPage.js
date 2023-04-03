import { MDBCard, MDBContainer, MDBRow, MDBCol, MDBInput, MDBCardBody, MDBCardImage, MDBValidation, MDBValidationItem, MDBBtn, MDBCardTitle} from 'mdb-react-ui-kit'
import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
export default function ResetPage() {
    const [validUrl, setValidUrl] = useState(false);
	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const param = useParams();
	const url = `http://localhost:3001/signIn/forgotPass/${param.id}/${param.token}`;

	useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(url, { password });
			setMsg(data.message);
			setError("");
			window.location = "/";
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


  return (
    <div>
        <Fragment>
        {validUrl?(<MDBContainer>
            <MDBCardBody style={{paddingTop:"170px"}}>
            <MDBCol center>
                <MDBRow center>
                    <MDBCardImage
                    src='https://cdn-icons-png.flaticon.com/512/1636/1636145.png'
                    style={{
                        width:'350px',
                        marginRight:"65px"
                    }}
                    />
                </MDBRow>
                <MDBRow middle>
                        <MDBCol>
                    <MDBRow center style={{marginTop:"15px"}}>
                        <MDBCol md='8'>
                            <MDBValidation onSubmit={handleSubmit()}>
                                <MDBValidationItem feedback={error?error:msg?msg:"Enter a password"}>
                        <MDBInput
                        label="new Password?"
                        />
                                </MDBValidationItem>
                                <MDBBtn>
                                    Reset Password
                                </MDBBtn>
                            </MDBValidation>
                        </MDBCol>
                    </MDBRow>
                        </MDBCol>                  
                </MDBRow>
            </MDBCol>
            </MDBCardBody>
        </MDBContainer>):<MDBContainer>
            <MDBCardBody>
                <MDBCard>
                    <MDBRow center>
                        <MDBCardImage
                        src='https://cdn-icons-png.flaticon.com/512/6844/6844008.png'
                        style={{width:"150px"}}
                        />
                    </MDBRow>
                    <MDBRow>
                        <MDBCardTitle>
                          404 Not a Valid Url
                        </MDBCardTitle>
                    </MDBRow>
                </MDBCard>
            </MDBCardBody>
            </MDBContainer>}
        </Fragment>
    </div>
  )
}

