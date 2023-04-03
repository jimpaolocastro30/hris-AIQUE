import { useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
//import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete';
//mport Headerxc from './components/UpdateForm';
import InventoryFormlist from './components/Inventory/InventoryFormlist';
import UpdateForm from './components/UpdateForm';
import LoginForm from './components/login/Loginform';
import EmployeeReg from './components/employeept/employeereg';
import EmployeeDashB from './components/DasbhBoard/EmployeeDashB';
import PreReg from './components/employeept/employeePreReg/employeePreReg';
import Profile from './components/employeept/EmpProfile/Profile';
import EmployeeList from './components/EmployeeList/EmployeeList';
import AdminAddUser from './components/AdminAddUser/AdminAddUser';
import AttendancePage from './components/Attendance/Attendance';
import Alert from './components/Alert/Alert';
import PlsLogin from './components/Alert/PlsLogin';
import UserCheck from './components/EmployeeList/UserCheck';
import PlsLoginAgain from './components/Alert/PlsLoginAgain';
import PayrollPage from './components/Payroll/Payroll';
import EditAnnouncement from './components/Announcement/EditmModal';
import Payslip from './components/Payroll/Payslip';
import ForgotPage from './components/login/ForgotPage';
import ResetPage from './components/login/ResetPage';
import Requests from './components/Notification/Requests';
import Achuchu from './components/Achuchu';
import Achu from './Achu';
import MyDocument from './components/Payroll/Payslip';





function App() {
   
  


       return(
    <div>
        
   <Router>
   <div className='App' >
       <Routes>
        
       
      <Route  path={"/dash"} element = {<EmployeeDashB/>}/>
        <Route  path ={"/"} element = {<LoginForm/>}/>
        <Route  path ={"/Signup"} element = {<PreReg/>}/>
        <Route  path = {"/EmployeeRegs"} element = {<EmployeeReg/>}/>
        <Route  path = {"/Home"} element={<InventoryFormlist/>}/>
        <Route  path = {`/update`} element = {<UpdateForm/>}/>
        <Route  path ={"/EmpProfile"} element={<Profile/>}/>
        <Route  path ={"/EmployeeList"} element={<EmployeeList/>}/>    
        <Route path ={"/AdminAddUser"} element={<AdminAddUser/>}/>
        <Route  path ={"/Attendance"} element={<AttendancePage/>}/>
        <Route path = {"/NoAccount"} element={<PlsLogin/>}/>
        <Route  path ={"/NotAuthorized"} element={<Alert/>}/>
        <Route  path ={"/Error"} element={<PlsLoginAgain/>}/>
        <Route  path ={"/User"} element={<UserCheck/>}/>
        <Route  path ={"/Payroll"} element={<PayrollPage/>}/>
        <Route  path ={"/EditAnn"} element={<EditAnnouncement/>}/>
        <Route  path ={"/Payslip"} element={<Payslip/>}/>
        <Route path ={"/payDocument"} element={<MyDocument/>}/>
        <Route  path ={"/ForgotPassword"} element={<ForgotPage/>}/>
        <Route  path ={"/ResetPass"} element={<ResetPage/>}/>
        <Route  path ={"/Requests"} element={<Requests/>}/>
        <Route  path ={"/Achuchu"} element={<Achuchu/>}/>
        <Route  path ={"/Ach"} element={<Achu/>}/>
       </Routes>
       
     
    
   </div>
   </Router>
    
   </div>
       )
   }
   

export default App;