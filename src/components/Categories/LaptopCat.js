import  Axios  from "axios";
import React, { useState, Component, useEffect } from "react";
import{Link, useLocation} from 'react-router-dom';
import Swal from "sweetalert2";


function LaptopCat(){
  
  const [devLap, setdevlap] = useState([])
  const deleteInvItem = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`,{
    
  })}
   
  const fetchData=()=>{
    Axios.get("http://localhost:3001/read/device?device=Laptop").then((response)=> {
     /*let final = response.data
      setdevlap(final);
     console.log(response)*/
     console.log(response)
     setdevlap(response.data.result)
    });
  }

  

  useEffect(()=> {
     fetchData();
    
  }, []);



    return(

        <div>
          <Link to="/Home"><button>Home</button></Link>
          <h1>Laptop Category</h1>
          
          {
            devLap.map((item) => {
              const lap = <div key={item._id}>
                <div>-------------------------------------------------------------------------------------------------</div>
                <div> Device:{item.device} DeviceNumber:{item.deviceNum} Status:{item.Status} 
               Specifications:{item.spec} Provider:{item.provider} Price:{item.price} Date:{item.date}
               <br/>
               <Link to = '/update' state={{id: item._id}}><button>Update</button></Link>
               
                </div></div>
              return lap
            })
           
          }
       {/*} {devLap.map((val,key)=>{
            return <div key={key}>
                <p>Device:{val.device} DeviceNumber:{val.deviceNum}</p>
                </div>
        })} */}
        </div>


    )
} 


export default LaptopCat;