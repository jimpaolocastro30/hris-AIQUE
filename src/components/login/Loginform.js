import React, { Component } from 'react'
import { useState, useEffect,} from 'react';
import swal from 'sweetalert2';
import Axios from 'axios'
import { Link, useParams, useNavigate} from "react-router-dom"
import styles from "../login/styles.module.css"
import icon from '../Icon/AIQue Logo.png'
  import { MDBInput } from 'mdb-react-ui-kit';
  import Video from '../login/video.mp4'
//import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete

function LoginForm () {

	const navigate = useNavigate();

    const [data, setData] = useState({ Emailad: "", password: ""});
	const [error, setError] = useState();
	const [emailId, setEmailId] = useState("");
	
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
		setEmailId(data.Emailad)
		
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://13.229.91.120:3001/signIn";
			const { data: res } = await Axios.post(url, data);
			localStorage.setItem('Bearer', res.data);
			localStorage.setItem('emailId',emailId)
			navigate("/dash");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

console.log(data)
useEffect(()=>{
	
},[])

    return(
        <div className='LoginPage'>
			
          <div>
		  
            <div className={styles.login_container}>
			<video autoPlay muted loop className={styles.videobg}>
					<source src={Video}  />
				</video>
			<div className={styles.login_form_container}>
			
				<div className={styles.left}>
			
					<img className={styles.Icon} src={icon} alt="AIQUE ICON"/>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1 style={{color:"black"}}>Login to Your Account</h1>
						<div className={styles.KEY}>
						<MDBInput
							
							type="email"
							label="Email"
							name="Emailad"
							onChange={handleChange}
							value={data.Emailad}
							required
							className={styles.input}
						/>
						</div>
						<div className={styles.KEY2}>
						<MDBInput
							type="password"
							label="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							className={styles.input}
						/>
						</div>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Log In
						</button>
						<Link to = "/ForgotPassword"><a>forgot Password?</a></Link>
					</form>
				</div>
				<div className={styles.right}>
					<h1><span>Human Resource </span><br/>Information System</h1>
					<span style={{color:"white"}}>Haven`t got an Account?</span>
					<Link to="/Signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
						
					</Link></div>
						
					
				</div>
			</div>
			
		</div>

        </div>
    )
}
export default LoginForm