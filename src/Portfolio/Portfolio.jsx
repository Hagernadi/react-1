
import { useState } from "react"
import Photo from "../poert1.png"
import Photo2 from "../port2.png"
import Photo3 from "../port3.png"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/footer"
export default function Portfolio(){

  // let [Photo,setPhoto]=useState()
  // let [Photo2,setPhoto2]=useState({Photo2})
  // let [Photo3,setPhoto3]=useState({Photo3})
  
  let [img,setImg]=useState('')
  let [compont,setCompont] =useState(<div className="portfolio-layer d-none">
  <img src={Photo}  alt="" />
</div>)

let [compont2,setCompont2] =useState(<div className="portfolio-layer d-none">
  <img src={Photo2}  alt="" />
</div>)

let [compont3,setCompont3] =useState(<div className="portfolio-layer d-none">
  <img src={Photo3}  alt="" />
</div>)

  return <> 
  <Navbar /> 
  
  <div className="container position-ralative mb-4">
    <div className="mt-4">
        <h1 className="port-header mb-4">PORTFOLIO COMPONENT</h1>
        <div className="d-flex port-head-content">
            <div className="befor-star"></div>
            <i class="fa-solid fa-star mx-4 star-befor"></i>
            <div className="after-star"></div>
        </div>
    </div>

 



  <div className="row ">
  <div className="col-md-4 mb-4">
  <div className="d-flex mt-4"> 
  <div>
      {compont}
  </div>
  <div className="img-parent img-one" onClick={()=>{
    setCompont(<div className="portfolio-layer" onClick={()=>{
      setCompont(<div className="portfolio-layer d-none">
      <img src={Photo}  alt="" />
    </div>)
    }}>
    <img src={Photo}  alt="" />
  </div>)
  }}>
    <img src={Photo} className="rounded-4"   width="350" alt="" />
    <div className="img-child">
    <i className="fa-solid fa-plus layer-icon"></i>
    </div>
  </div>

  <div>
      {compont2}
  </div>
  <div className="img-parent mx-4" onClick={()=>{
    setCompont2(<div className="portfolio-layer" onClick={()=>{
      setCompont2(<div className="portfolio-layer d-none">
      <img src={Photo2}  alt="" />
    </div>)
    }}>
    <img src={Photo2}  alt="" />
  </div>)
  }}>
    <img src={Photo2} className="rounded-4" width="350" alt="" />
    <div className="img-child">
    <i className="fa-solid fa-plus layer-icon"></i>
    </div>
  </div>


  <div>
      {compont3}
  </div>
  <div className="img-parent" onClick={()=>{
    setCompont(<div className="portfolio-layer" onClick={()=>{
      setCompont(<div className="portfolio-layer d-none">
      <img src={Photo}  alt="" />
    </div>)
    }}>
    <img src={Photo3}  alt="" />
  </div>)
  }}>
    <img src={Photo3} className="rounded-4" width="350" alt="" />
    <div className="img-child">
    <i className="fa-solid fa-plus layer-icon"></i>
    </div>
  </div>

   </div>    
    
  </div>

</div>



<div className="row">
  <div className="col-md-4">
  <div className="d-flex"> 
  <div>
      {compont}
  </div>
  <div className="img-parent img-one" onClick={()=>{
    setCompont(<div className="portfolio-layer" onClick={()=>{
      setCompont(<div className="portfolio-layer d-none">
      <img src={Photo}  alt="" />
    </div>)
    }}>
    <img src={Photo}  alt="" />
  </div>)
  }}>
    <img src={Photo} className="rounded-4" width="350" alt="" />
    <div className="img-child">
    <i className="fa-solid fa-plus layer-icon"></i>
    </div>
  </div>


  <div>
      {compont2}
  </div>
  <div className="img-parent mx-4" onClick={()=>{
    setCompont(<div className="portfolio-layer" onClick={()=>
    setCompont(<div className="portfolio-layer d-none">
    <img src={Photo2}  alt="" />
  </div>)}>
    <img src={Photo2}  alt="" />
  </div>)
  }}>
    <img src={Photo2} className="rounded-4" width="350" alt="" />
    <div className="img-child">
    <i className="fa-solid fa-plus layer-icon"></i>
    </div>
  </div>



  <div>
      {compont2}
  </div>
  <div className="img-parent" onClick={()=>{
    setCompont3(<div className="portfolio-layer" onClick={()=>{
      setCompont3(<div className="portfolio-layer d-none">
      <img src={Photo3}  alt="" />
    </div>)
    }}>
    <img src={Photo3}  alt="" />
  </div>)
  }}>
    <img src={Photo3} className="rounded-4" width="350" alt="" />
    <div className="img-child">
    <i className="fa-solid fa-plus layer-icon"></i>
    </div>
  </div>

   </div>    
    
  </div>

</div>
  </div>
  
  <Footer />
</>
}