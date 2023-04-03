import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "../employeePreReg/styles.module.css";
import swal from "sweetalert2";
import Icon from '../employeePreReg/AIQue Logo.png'
import Video from '../employeePreReg/Video2.mp4'
import SidebarV2 from "../../Sidebar/SidebarV2";
const PreReg = () => {
	const confrm =()=>{
		swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Registered \n Successfully',
			showConfirmButton: false,
			timer: 1500
		  })
	}
	const [data, setData] = useState({
		FirstName: "",
		MiddleName:"",
		LastName: "",
		Emailad: "",
		password: "",
		ContactNo:"",
		position:"",
		department:"",
		immSuperior:"",
		EmPerToContact:"",
		sSS:"",
		pagIbig:"",
		tinId:"",
		empStatus:"",
		
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://13.228.71.195:3001/PreReg";
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
			confrm()

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
	useEffect(()=>{
		console.log(data)
	})

	return (
		<div className={styles.signup_container}>
		
			<video autoPlay muted loop className={styles.videobg}>
					<source src={Video}  />
				</video>
			<div className={styles.signup_form_container}>
			
				<div className={styles.left}>
					
				<div className={styles.Icon}>
					<img  src={Icon} alt="AIQUE ICON"/>	
					</div>
				
					<h1>Already got an Account?
						<span>
							<br/>
							
						</span>
						 </h1>
					<Link to="/">
						<button type="button" className={styles.whitebtn}>
							log in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
				
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create an Account

						</h1>
						
						<input
							type="text"
							placeholder="First Name"
							name="FirstName"
							onChange={handleChange}
							value={data.FirstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Middle Name"
							name="MiddleName"
							onChange={handleChange}
							value={data.MiddleName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="LastName"
							onChange={handleChange}
							value={data.LastName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Contact No."
							name="ContactNo"
							onChange={handleChange}
							value={data.ContactNo}
							required
							className={styles.input}
						/>
						
						<input
							type="email"
							placeholder="Email"
							name="Emailad"
							onChange={handleChange}
							value={data.Emailad}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default PreReg;