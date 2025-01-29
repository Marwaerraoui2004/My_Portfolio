import { useRef, useState } from 'react';
import '../styles/Footer.css';


export default function Footer(){

    const [clicked,setclicked]=useState(false)
    const footerRef = useRef(null);
    const afficherNum=()=>{
        setclicked(true)
    }
    

    return(
        <>
            <div ref={footerRef} className='footer' id="footer">
                <a href="linkedin.com/in/marwa-erraoui-015231265" target='_blank' rel="noopener noreferrer"><img src="linkedin.png" alt="linkedin" /></a>
                <div onClick={afficherNum}> <img src="telephone.png" alt="telephone" /></div>
                {clicked&& <p className='numero'>+212 688461304</p>}
                <a href="mailto:marouaerraoui14@gmail.com" rel="noopener noreferrer"><img src="gmail.png" alt="gmail" /></a>
            </div>
        </>
    )
}