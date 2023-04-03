import React, { useEffect, useState } from 'react'
import Achuchu from './components/Achuchu'

 const Achu=({ach})=> {
    const [ache, setache]= useState()
    let aches = toString({ach})
    function setach(ach){
        setache(ache)
    }
    useEffect(()=>{
        setach()
        console.log(ache)
    })
   var ach ={
    name:"ach",
    toString: function () {
        return this.name + ' meow';
      }
   } 
  return (
    <div>
        <div> 
            
        </div>
    </div>
  )
}
export default Achu