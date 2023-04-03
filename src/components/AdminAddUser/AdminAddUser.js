import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { MDBCard, MDBContainer, MDBInput } from "mdbreact";
import { MDBBtn, MDBCardBody, MDBCardImage, MDBCardText, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Select from 'react-select'
import TypeIt from "typeit-react";
import Auth from "../auth/Auth";
import Swal from "sweetalert2";
import UserMngmntHistory from "../EmployeeList/UserMngmntHistory";
import SidebarV2 from "../Sidebar/SidebarV2";

const AdminAddUser=()=>{
    
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
        employeeNum:"",
        hiredDate:"",
        grossSalary:"",
        monthlyBasic:"",
        allowance:"",
        semiMonthlyPay:"",
        dailyRatePay:"",
        regularHoursPay:"",
        dailyAllowance:"",
        hourlyAllowance:"",
        semiAllowance:"",
        
	});
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
        setEmail(data.Emailad);
        setPosition(data.position);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://13.229.91.120:3001/PreReg";
			const { data: res } = await axios.post(url, data);
			console.log(res.message);
            UserMngmntHistoryget()
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
    const [showHistory, setShowHistory]=useState(false)

    const [email, setEmail]= useState('')
    const [position, setPosition]= useState('')
    const mHistory = ("Added a User: ")
    const mHistory2 = (" position: ")
    const current = new Date();
    const hdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const hEmail = localStorage.getItem('emailId');
    const full = mHistory+email+mHistory2+position;
    
    console.log(full)
    const UserMngmntHistoryget = ()=>{
        axios.post("http://13.229.91.120:3001/UserMngmnt/insert",{
        fullName:hEmail,
        method:full,
        date:hdate,
      })
    }
   
	useEffect(()=>{
		
	})

    
    return(
        <div>
          <SidebarV2/>
            <Auth/>
           {showHistory&&<UserMngmntHistory/>}
            <MDBContainer>
                <MDBRow style={{marginTop:'3%'}}>
                    <MDBCol >
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCol style={{alignContent:"center"}}>
                                <MDBCardImage
                                src="https://cdn-icons-png.flaticon.com/512/5065/5065148.png"
                                alt="Avatar add icon"
                                style={{width:'150px'}}
                                fluid 
                                />
                                </MDBCol>
                                <MDBCol>
                                    <MDBCardText className="fs-2">Add New User</MDBCardText>
                                </MDBCol>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard >
                        <MDBCardBody style={{marginTop:"15px", height:"100%"}}>
                        <MDBRow >
                            
                                <MDBCol center>
                                    <MDBCardText>
                                    <TypeIt
                                    style={{fontSize:"20px"}}
                                        options={{
                                            waitUntilVisible: true
                                        }}
                                        
                                        getBeforeInit={(instance) => { 
                                            instance.type("NOTE : Profile Details are not requirde")
                                            .pause(750).delete(8).pause(300).type("required!");

                                            // Remember to return it!
                                            return instance;
                                        }}
                                        >
                                        </TypeIt>
                                    </MDBCardText>
                                </MDBCol>
                            
                        </MDBRow>
                        </MDBCardBody>
                        </MDBCard>
                        <MDBRow style={{marginTop:"25px"}}>
                            <MDBCol>
                            <MDBCard>
                                <MDBCardText style={{marginTop:"20px", color:"#757575",
                            fontSize:"25px"
                            }}>
                                    Need the History?
                                </MDBCardText>
                                <MDBRow>
                                    <MDBCol md='16'>
                                <MDBBtn 
                                onClick={()=>setShowHistory(!showHistory)}
                                style={{marginBottom:"20px"}}>
                                   User Management History
                                </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                
              <MDBCol sm='8'>
                <MDBCard className="mb-4">
                    <MDBCardText style={{backgroundColor:"#69c2e8", color:"white"}}>
                        Create User
                    </MDBCardText>
                </MDBCard>
                <MDBCard>
                  <MDBCardBody> 
                    <form>
                    <MDBRow>
                        <MDBCol md='3'>
                        <MDBCardText>
                            Required:
                        </MDBCardText>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-3 '>
                       <MDBCol size='6' md='4' > 
                       <MDBInput label='FirstName' name="FirstName"
                       onChange={handleChange}
                       value={data.FirstName}
                       required
                       id='form2' type='text' />
                        </MDBCol>
                        <MDBCol size='6' md='4'>
                        <MDBInput label='MiddleName' 
                        name="MiddleName"
                        onChange={handleChange}
						value={data.MiddleName}
						required
                        id='form3' type='text' />
                        </MDBCol>
                        <MDBCol size='6' md='4'>
                        <MDBInput label='LastName'
                        name="LastName"
                        onChange={handleChange}
                        value={data.LastName}
                        required
                        id='form6' type='text' />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='6'>
                        <MDBInput
                        type="number" 
                        label=" Contact No"
                        placeholder="#"
                        name="ContactNo"
                        onChange={handleChange}
                        value={data.ContactNo}
                        required
                        />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol >
                    <MDBInput label='Email'
                    name="Emailad"
                    onChange={handleChange}
                    value={data.Emailad}
                    required
                    id='form7' type='text' />
                        </MDBCol>
                        <MDBCol>
                    <MDBInput label='Password'
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    required
                    id='form8' type='password' />
                        </MDBCol>
                    </MDBRow>
                    
                   
                    <MDBCard style={{ marginTop:"10px"}}>
                        <MDBCardBody>
                            <MDBCard style={{backgroundColor:'#69c2e8'}}>
                            <MDBRow>
                                <MDBCardText style={{color:"white"}}>
                                    Profile details:
                                </MDBCardText>
                            </MDBRow>
                            </MDBCard>
                            <MDBRow>
                                <MDBCol md='6'>
                                        <MDBInput label='Position'
                                        name="position"
                                        onChange={handleChange}
                                        value={data.position}
                                         type='text' />
                                </MDBCol>
                                <MDBCol md='6'>
                                <MDBInput label='department'
                                        name="department"
                                        onChange={handleChange}
                                        value={data.department}
                                         type='text' />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                        <MDBInput label='Immidiate Superior'
                                        name="immSuperior"
                                        onChange={handleChange}
                                        value={data.immSuperior}
                                        type='text' />
                                </MDBCol>
                                <MDBCol md='6'>
                                <MDBInput label='emergency Person to Contact'
                                        name="EmPerToContact"
                                        onChange={handleChange}
                                        value={data.EmPerToContact}
                                        type='text' />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                        <MDBInput label='SSS'
                                        name="sSS"
                                        onChange={handleChange}
                                        value={data.sSS}
                                        type='text' />
                                </MDBCol>
                                <MDBCol md='6'>
                                <MDBInput label='Pag-Ibig'
                                        name="pagIbig"
                                        onChange={handleChange}
                                        value={data.pagIbig}
                                        type='text' />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                        <MDBInput label='TIN ID'
                                        name="tinId"
                                        onChange={handleChange}
                                        value={data.tinId}
                                        type='text' />
                                </MDBCol>
                                <MDBCol md='6'>
                                <MDBCardText>
                                    Employee Status:
                                </MDBCardText>
                                <select  
                                        onChange={handleChange}
                                        name="empStatus"
                                        value={data.empStatus}
                                    >
                                    <option value="">Select...</option>
                                    <option value="Active">active</option>
                                    <option value="Deactivated">Deactivated</option>
                                    <option value='not Regular'>not Regular</option>
                                    <option value='Contractual'>Contractual</option>
                                    <option value='Insurance'>Insurance</option>
                                    <option value='regular'>regular</option>
                                </select>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                    Hired Date:
                                        <MDBInput 
                                        name="hiredDate"
                                        onChange={handleChange}
                                        value={data.hiredDate}
                                        type='date' />
                                </MDBCol>
                                <MDBCol md='6'>
                                <MDBInput  
                                        onChange={handleChange}
                                        name="employeeNum"
                                        label="Employee Number"
                                        value={data.employeeNum}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='3'>
                                        <MDBInput label='Gross Salary:'
                                        name="grossSalary"
                                        onChange={handleChange}
                                        value={data.grossSalary}
                                        type='number' />
                                </MDBCol>
                                <MDBCol md='3'>
                                        <MDBInput label='monthly Basic:'
                                        name="monthlyBasic"
                                        onChange={handleChange}
                                        value={data.monthlyBasic}
                                        type='number' />
                                </MDBCol>
                                <MDBCol md='3'>
                                <MDBInput  
                                        onChange={handleChange}
                                        name="allowance"
                                        label="Allowance"
                                        value={data.allowance}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput
                                    onChange={handleChange}
                                    label='Semi monthly Pay'
                                    name='semiMonthlyPay'
                                    value={data.semiMonthlyPay}
                                    type='number'
                                    />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput
                                    onChange={handleChange}
                                    label='Daily Rate Pay'
                                    name='dailyRatePay'
                                    type='number'
                                    value={data.dailyRatePay}
                                    />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput
                                    onChange={handleChange}
                                    label='Regular Hours Pay'
                                    name='regularHoursPay'
                                    type='number'
                                    value={data.regularHoursPay}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput
                                    onChange={handleChange}
                                    label='Daily Allowance'
                                    name='dailyAllowance'
                                    type='number'
                                    value={data.dailyAllowance}
                                    />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput
                                    onChange={handleChange}
                                    label='Hourly Allowance'
                                    name='hourlyAllowance'
                                    type='number'
                                    value={data.hourlyAllowance}
                                    />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput
                                    onChange={handleChange}
                                    label='Semi Allowance'
                                    name='semiAllowance'
                                    type='number'
                                    value={data.semiAllowance}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput
                                    />
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCardBody style={{marginTop:"5px", padding:"5px"}} >
                    <MDBRow center style={{backgroundColor:"red", color:"white", borderRadius:"5px", marginTop:"10px"}}>
                       <MDBCol center style={{}}>
                        {error && <p style={{marginTop:"15px"}}>{error}</p>}
                        </MDBCol>
                    </MDBRow>
                    </MDBCardBody>
                    <MDBRow>
                        <MDBCol >
                            <MDBBtn onClick={handleSubmit}> Create User <i className="fas fa-user-check"></i></MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    </form>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
                
                </MDBRow>
            </MDBContainer>
            
            
             

        </div>
       
    )
}

export default AdminAddUser