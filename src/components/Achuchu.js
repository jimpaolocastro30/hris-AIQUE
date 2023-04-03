import Lottie,{LottiePlayer} from "lottie-react"; 
import { MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from 'react';
import Achu from '../Achu';
import '../components/Achuchu.css'
import refresh from './Icon/91501-refresh-icon.json'

        const Achuchu = () => {
            const[play, setPlay]=useState(false)
            const[pause, setPause]=useState(false)

            return (
                <div>
                   <MDBBtn onClick={()=>setPlay(!play)}>
                    <Lottie animationData={refresh} />
                    </MDBBtn>
                </div>
            );
          };

export default Achuchu;