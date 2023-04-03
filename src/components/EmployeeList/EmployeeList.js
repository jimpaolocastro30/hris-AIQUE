import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect,} from 'react';
import swal from 'sweetalert2';
import Axios from 'axios'
import Fuse from 'fuse.js'
import { MDBTable, MDBTableHead, MDBTableBody,
   MDBContainer, MDBCard, MDBRow, MDBCol, MDBCardText,
    MDBCardBody, MDBCardImage,
  MDBIcon, MDBBtn
  } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import TypeIt from "typeit-react";
import Auth from '../auth/Auth';
import UserMngmntHistory from './UserMngmntHistory';
import Swal from 'sweetalert2';
import SidebarV2 from '../Sidebar/SidebarV2';



const EmployeeList=()=>{
  const current = new Date();
  const hdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [role,setRole]=useState([])
  const email = localStorage.getItem('emailId')
  const findProfile = ( )=>{
    Axios.get('http://13.228.71.195:3001/api/EmpProf/?Emailad='+email).then((response)=>{
      console.log(response.data)
      setRole(response.data.result)
      
    })
    }
    useEffect(()=>{
      findProfile();
    },[])
  
    //////////
    const [employeeList, setEmployeeList] = useState([])
    //////Pagination//////////
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(8);

  const [pageNumberLimit, setpageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(employeeList.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = employeeList.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <MDBCol
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          <MDBCol>
          {number}
          </MDBCol>
        </MDBCol>
      );
    } else {
      return null;
    }
  });


  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <MDBCol onClick={handleNextbtn}> &hellip; </MDBCol>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <MDBCol onClick={handlePrevbtn}> &hellip; </MDBCol>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };




    //////fuse Search///////
    const [query, setquery ] = useState('')
    const fuse = new Fuse (employeeList,{
        keys:[
          'FirstName',
          'MiddleName',
          'LastName',
          'EmployeeStatus',
          'department',
          'Emailad'
        ]
      })
      const ResultV2 = fuse.search(query);
  
      const SearchResultsV2 = query ? ResultV2.map(result=>result.item): currentItems;
      const handleOnSearchV2 =({currentTarget={}})=>{
        const{value} = currentTarget;
        setquery(value);
    
      }
      console.log(ResultV2)
    ////////
    const fetchData = () => {
   
        const options = {
           
          headers: {
            authorization: 'Bearer '+localStorage.getItem("Bearer")  ,
            "content-type": "application/json",
            accept: 'application/json'
          }
        }
         
        Axios.get("http://13.228.71.195:3001/api/read/", options).then((response)=> {
           setEmployeeList(response.data);
           console.log('hajsdksa')
           
         });
       
         console.log(options)
         
       }
   
    const[showHistory, setShowHistory]= useState(false)   
    //////////////////////////////////////
     async function deleteEmployee (id){
      Axios.delete(`http://13.228.71.195:3001/api/delete/${id}`,{
        id:id
      }).then(res=>{
        Swal.fire({
          title:"User Has been Deleted"
        })
        fetchData()
      })
    }

   async function EmployeeDeleteHistory(id, dev, devmail){
    Axios.post(`http://13.228.71.195:3001/UserMngmnt/delete/${id}`,{
    devbefore:devmail,
    fullName:email,
    date:hdate,
    method:dev,
    }).then(res=>{
      deleteEmployee(id)
      
    })
   }

    const ddelete = (id,dev, devmail)  => {

      swal
        .fire({
          title: "Are you sure?",
          text: "this will delete your data",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, keep it",
        })
        .then(function (dismiss) {
          if (dismiss.isConfirmed == false) {
            swal.fire({
              icon:"info",
              title:"Deletion is Cancelled"
            });
           
          } else {
            EmployeeDeleteHistory(id,dev, devmail)
            
          }
          
        })
      
    };
    ///////useEffect///////
    useEffect(()=> {
        fetchData()
       }, []);

       
          



    return(
       <div>
        <SidebarV2/>
        {role.map((val, key)=>{
          return<div key={key}>
              {val.FirsName}
          </div>
        })}
        <Auth/>
       {showHistory &&<UserMngmntHistory/>}
        <MDBContainer style={{display:"flex", marginTop:"40px"}}>
          <MDBCol sm='3' >
          <MDBRow style={{marginTop:"55px"}}>
            <MDBCard>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    <MDBCardImage
                    src='https://cdn-icons-png.flaticon.com/512/5155/5155699.png'
                    alt="Avatar add icon"
                    style={{width:'150px'}}

                    />
                      <MDBCardText style={{marginTop:"25px"}}>
                        <h4>User/Employee
                          List
                        </h4>
                        <TypeIt
                        style={{
                          fontSize:"15px"
                        }}
                        options={{
                          speed:40
                        }}
                        >
                          This is where you look at
                          all of the employee/user currently
                          registered in the system.
                        </TypeIt>
                      </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
          <MDBRow 
          center
          style={{
            marginTop:"25px"
          }}>
                <MDBCard>
                      <MDBCol md='12'>
                        <MDBRow>
                        <MDBCardText 
                        
                        style={{
                          marginTop:"20px", color:"#757575", fontSize:"20px"
                        }}>
                          Need to see History?
                        </MDBCardText>
                        </MDBRow>
                        <MDBRow>
                        <MDBBtn 
                        onClick={()=>setShowHistory(!showHistory)}
                        style={{
                         margin:"auto",
                         marginBottom:"15px",
                         marginTop:"20px"
                        }}>
                            User Management History
                        </MDBBtn>
                        </MDBRow>
                    </MDBCol>
                  </MDBCard>
               </MDBRow>
          </MDBCol>
          <MDBCol>
          <MDBRow>
          <MDBCol >
            
            <MDBCard style={{width:'1100px',}} sm='9' >
            
              <MDBRow middle style={{width:"100%", }}> 
            <MDBCard style={{backgroundColor:"#7dcef1"}} >
              <MDBRow>
              <MDBCol md='1'sm="1">
              <i class=" fas fa-search fa-lg" style={{ marginTop:"25px",}}></i>
               </MDBCol>   
               <MDBCol style={{padding:"5px 5px 5px 5px"}} sm='3'>
              <MDBInput style={{backgroundColor:"white",}}  onChange={handleOnSearchV2} ></MDBInput>
              </MDBCol>
              </MDBRow>
              
               </MDBCard>
              
            </MDBRow>
            
            <MDBCard> 

            
              <MDBTable >
              <MDBTableHead>
            <tr>
               <th scope='col'>name</th>
               <th scope='col'>Email</th>
               <th scope='col'>department</th>
               <th scope='col'>position</th>
               <th scope='col'>Status</th>
                </tr>
                </MDBTableHead>
            {SearchResultsV2.map((val, key)=>{
              let name = val.FirstName+" "+val.MiddleName+" "+val.LastName
              return<MDBTableBody key={key}>
          
          <tr style={{padding:"0px"}} >
          <th scope='row'>{name}</th>
          <td>{val.Emailad}</td>
          <td>{val.department}</td>
          <td>{val.position}</td>
          <td>{val.empStatus}</td>
          <td style={{padding:"2px"}}>
        <Link to = "/User" state={val.Emailad}><MDBBtn 
        style={{borderRadius:"30px"}}>
              <MDBIcon className='fa-user-alt float'/>
        </MDBBtn></Link>
        <MDBBtn 
        color='danger'
        onClick={()=>ddelete(val._id, val.FirstName+val.MiddleName+val.LastName, val.Emailad)}
        style={{
          borderRadius:"30px"
        }}>
          <MDBIcon className='fa fa-trash-alt float' />
        </MDBBtn>
        </td>
        </tr>
       
                 </MDBTableBody>
              
            })}
             </MDBTable>
            </MDBCard>

            </MDBCard> 
            </MDBCol>
       
            </MDBRow>
        
      {/*renderdata(currentItems)*/}
       
        
        <MDBRow center style={{marginTop:"30px",}}>
          <MDBCard style={{ position:"inherit",
           alignItems:"center", bottom:"20%", width:"80%", 
           
           }}>
            <MDBRow col="2" sm="2" style={{marginTop:"15px"}}>
              <MDBCol>
            <button class="btn btn-dark btn-sm" 
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0]? true: false}
            >
              <i class="fas fa-angle-left"></i>
            </button>
            </MDBCol>
            <MDBCol>
            {pageDecrementBtn}
            </MDBCol>
            
            {renderPageNumbers}
           
            <MDBCol>
            {pageIncrementBtn}
            </MDBCol>
            <MDBCol style={{marginBottom:"10px"}}>
            <button class="btn btn-dark btn-sm" 
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1]? true: false}
            > <i class="fas fa-angle-right"></i> </button>
            </MDBCol>
            <hr/>
            <MDBRow >
              <MDBCol style={{alignItems:"center", justifyContent:"center", marginLeft:"11%", marginBottom:"10px"}}>
        <button class="btn btn-dark btn-sm"   onClick={handleLoadMore} >
         Load All
        </button>
        <select
          onChange={(event)=>{setitemsPerPage(event.target.value)}}
        >
          <option value={Number[5]} >5</option>
          <option value={Number[10]}>10</option>

        </select>
        </MDBCol>
        </MDBRow>
        </MDBRow>
        </MDBCard>
        </MDBRow>
        </MDBCol>
        </MDBContainer>
        
    </div>
        
  );
}

export default EmployeeList;
    

