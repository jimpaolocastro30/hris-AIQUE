import { useEffect } from "react"


const Auth=()=>{
const RoleCheck= ()=>{
      
      const admin = localStorage.getItem('role')
      try {
            if (admin ==="Employee") {
          window.location.href="/NotAuthorized"

        }
        if(admin === null){
        window.location.href="/NoAccount"
      } 
      
      const email = localStorage.getItem('emailId')
      if  (email === null){
        window.location.href="/Error"
      }
       
      else{
        console.log("authorized")
      }
      } catch (error) {
        console.log(error)
      }
      }

 

    useEffect(()=>{
      RoleCheck()
        
    
      
    
    })
   
}
export default Auth;
