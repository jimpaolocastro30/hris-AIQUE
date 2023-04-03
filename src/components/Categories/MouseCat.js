import  Axios  from "axios";
import React, { useState, Component, useEffect } from "react";
import{Link, useLocation} from 'react-router-dom';
import Device from "../InventoryFormlist";
import{useParams} from "react-router-dom"

function MouseCat(){
  
  const [devLap, setdevlap] = useState([])

  useEffect(()=> {
     
    Axios.get("http://13.229.91.120:3001/read/device?device=Mouse").then((response)=> {
     /*let final = response.data
      setdevlap(final);
     console.log(response)*/
     console.log(response)
     setdevlap(response.data.result)
    });
  }, []);

    return(

        <div>
          <h1>Mouse Category</h1>
          
          {
            devLap.map((item) => {
              const lap = <div key={item._id}>
                <p>-------------------------------------------------------------------------------------------------</p>
                <p> Device:{item.device} DeviceNumber:{item.deviceNum} Status:{item.Status} 
               Specifications:{item.spec} Provider:{item.provider} Price:{item.price} Date:{item.date}
                </p></div>
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

export default MouseCat;