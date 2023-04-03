import  Axios  from "axios";
import React, { useState, useEffect } from "react";
import{Link, useLocation,} from 'react-router-dom';

import axios from "axios";

function UpdateForm(){
  //stringify data
  const[updateList, setUpdateList] = useState([])
  const [newData, setnewData] = useState("")
  const [newStatus,setStatusUp] = useState("")
  const [specUp,setSpecUP]= useState("")
  const [deviceNumUp, setDeviceNumUp] = useState("")
  const [providerUp, setProviderUp] = useState("")
  const [ priceUp, setPriceUP] = useState("")
  const [dateupdate ,setupdate] = useState("")
  //update function/useStates
  const [newDevice, setUpdateNewDevice]=useState("")
  const [dataStatus, setStatusData] = useState('')
  const [dataDeviceNum, setDataDeviceNum] = useState('')
  const [dataProvider, setDataProvider] = useState('')
  const [dataPrice, setDataPrice] = useState('')
  const [dataSpec, setDataSpec] = useState('')
  const [dataDate, setDatadate] = useState('')
  //id
  const location = useLocation()
  const id = location.state.id
  //console.log(id)
  
  let deviceData = ""
  let statusData = ""
  let specData = ""
  let deviceNumData=""
  let providerData = ""
  let priceData = ""
  let dateData = ""
  //get one data axios
  const fetchData = () => {
    Axios.get(`http://localhost:3001/admin/read/device/${id}`).then((response)=> {
      const resp = response.data.idresult

      //stringification of the object data
      
      deviceData = JSON.stringify(response.data.idresult.device)
      statusData = JSON.stringify(response.data.idresult.Status)
      specData = JSON.stringify(response.data.idresult.spec)
      deviceNumData = JSON.stringify(response.data.idresult.deviceNum)
      providerData = JSON.stringify(response.data.idresult.provider)
      priceData = JSON.stringify(response.data.idresult.price)
      dateData = JSON.stringify(response.data.idresult.date)
      //sets new state to useState
      console.log(deviceData)
      setnewData(deviceData)
      setStatusUp(statusData)
      setSpecUP(specData)
      setDeviceNumUp(deviceNumData)
      setProviderUp(providerData)
      setPriceUP(priceData)
      setupdate(dateData)


    }); 
  }
  // update form Axios
  const UpdateDevice = (id)=>{
    
    axios.put("http://localhost:3001/admin/update/updevice/" + id,{
      id:id,
      newDevice: newDevice
     
    }).then(res =>{
      fetchData()
    }).catch(err=>{
      console.log(err)
    })
  }
  const UpdateStatus = (id)=>{
    
    axios.put("http://localhost:3001/admin/update/status/" + id,{
      id: id,
      newStatus: dataStatus
     
    }).then(res =>{
      fetchData()
    }).catch(err=>{
      console.log(err)
    })
  }

  const UpdateDeviceNumber =(id) =>{
    axios.put("http://localhost:3001/admin/update/deviceNum/"+ id,{
      id: id,
      newDeviceNum: dataDeviceNum
    }).then(res =>{
      fetchData()
    }).catch(err=>{
      console.log(err)
    })
    
  }

  const UpdateProvider =(id) =>{
    axios.put("http://localhost:3001/admin/update/provider/"+ id,{
      id: id,
      newProvider: dataProvider
    }).then(res =>{
      fetchData()
    }).catch(err=>{
      console.log(err)
    })
    
  }

  const UpdatePrice =(id) =>{
    axios.put("http://localhost:3001/admin/update/price/"+id,{
      id: id,
      newPrice : dataPrice
    }).then(res =>{
      fetchData()
    }).catch(err=>{
      console.log(err)
    })
  }

  const UpdateSpec =(id) =>{
    axios.put("http://localhost:3001/adminupdate/spec/"+id,{
      id: id,
      newSpec : dataSpec
    }).then(res =>{
      fetchData()
    }).catch(err=>{
      console.log(err)
    })
  }
  
  const UpdateDate =(id) =>{
    axios.put("http://localhost:3001/admin/update/date/"+id,{
      id: id,
      newDate : dataDate
    }).then(res =>{
      fetchData()
    }).catch(err=>{
      console.log(err)
    })
  }

  

// use effect on get one data axios
  useEffect(()=> {
     
    fetchData()
    
  }, []);

  useEffect(()=> {
     
    console.log(dataStatus)
    console.log(dataDeviceNum)
    console.log(dataProvider)
    console.log(dataPrice)
    console.log(dataSpec)
  });
 
    return(
      
        <div>
          <Link to="/Home"><button>Home</button></Link>
          <hr/>
           <div>Device:{newData} Device Number:{deviceNumUp} Status:{newStatus} Specifications:{specUp} Provider:{providerUp} Price:{priceUp} Date:{dateupdate}</div>

          <hr/>
          <div>
            {/*Update Form*/}
          <input type="text" placeholder='Update device...'
            onChange={(event) => {
              setUpdateNewDevice(event.target.value);
              }}>
              </input>
              <button onClick ={()=>UpdateDevice(id)}>Update Device</button>

              <select type="text" 
            onChange={(event) => {
              setStatusData(event.target.value);
              }}>
                <option value = "Used">Used</option>
                <option value = "To Repair">To Repair</option>
                <option value = "New">New</option>
                <option value = "Decommisioned">Decommisioned</option>
              </select>
              <button onClick ={()=>UpdateStatus(id)}>Update Status</button>

              <input type="text" placeholder='Update Device Number...'
            onChange={(event) => {
              setDataDeviceNum(event.target.value);
              }}>
              </input>
              <button onClick ={()=>UpdateDeviceNumber(id)}>Update Device Number</button>
              <br></br>
              <input type="text" placeholder='Update Provider...'
            onChange={(event) => {
              setDataProvider(event.target.value);
              }}>
              </input>
              <button onClick ={()=>UpdateProvider(id)}>Update Provider</button>

              <input type="text" placeholder='Update Price...'
            onChange={(event) => {
              setDataPrice(event.target.value);
              }}>
              </input>
              <button onClick ={()=>UpdatePrice(id)}>Update Price</button>

              <input type="text" placeholder='Update Specifications...'
            onChange={(event) => {
              setDataSpec(event.target.value);
              }}>
              </input>
              <button onClick ={()=>UpdateSpec(id)}>Update Specification</button>
              <br></br>
              <input type= "date"
            onChange={(event) => {
              setDatadate(event.target.value);
              }}>
              </input>
              <button onClick ={()=>UpdateDate(id)}>Update Date</button>

          </div>
        <hr/>
        <Link to = '/LaptopCat'><button>Laptop Category</button></Link>
           
           
            
          
        </div>


    )
} 

export default UpdateForm;
