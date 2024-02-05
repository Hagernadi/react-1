import { Component, useState } from "react";
import { Link } from "react-router-dom";



export default function Navbar(){
  let [about,setAbout]= useState('ABOUT')
  let [portfolio,setPortfolio]= useState('PORTFOLO')
  let [contact,setContact]= useState('CONTACT') 
  let [active,setActive]=useState(  
  <Link className="nav-link   text-light link-size" aria-current="page" to="/about" >{about}</Link>
)

let [active2,setActive2]=useState(  
  <Link className="nav-link  text-light link-size" aria-current="page" to="/portfolio">{portfolio}</Link>
)

let [active3,setActive3]=useState(  
  <Link className="nav-link  text-light link-size" aria-current="page" to="/contact">{contact}</Link>
)

        return <>
   <nav className="navbar navbar-expand-lg nav-color py-4 position-fixed w-100">
  <div className="container">
    <Link className="navbar-brand text-light" to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
        <li className="nav-item me-2"  onClick={()=>{
            setActive( <Link className="nav-link active  text-light link-size" aria-current="page" to="/about" >{about}</Link>)
        }}>
          {/* <Link className="nav-link   text-light link-size" aria-current="page" to="/about" >{about}</Link> */}
          {active}
        </li>
        
        <li className="nav-item me-2" onClick={()=>{
          setActive2(<Link className="nav-link active  text-light link-size" aria-current="page" to="/portfolio">{portfolio}</Link>)
        }}>
          {/* <Link className="nav-link  text-light link-size" aria-current="page" to="/portfolio">{portfolio}</Link> */}
          {active2}
        </li>

        <li className="nav-item me-2" onClick={()=>{
         setActive3( <Link className="nav-link active text-light link-size" aria-current="page" to="/contact">{contact}</Link>)
        }}>
          {/* <Link className="nav-link  text-light link-size" aria-current="page" to="/contact">{contact}</Link> */}
        {active3}
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>

        
        
        
        </>
}
