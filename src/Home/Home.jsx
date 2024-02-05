
import avatars from "../avataaars.svg"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/footer"
export default function Home(){
    return <>
    <Navbar /> 
    
    <div className="container-fluid home-background ">
    <img src={avatars} width='270' height='270' alt="" />
    <div>
        <h2 className="text-center about-component" >START FRAMEWORK</h2>
        <div className="d-flex port-head-content my-4">
            <div className="befor-about "></div>
            <i class="fa-solid fa-star  mx-4 about-befor"></i>
            <div className="after-about "></div>
        </div>
        <div className="text-light">
            <span  className="home-content">Graphic Artist - </span>
            
            <span className="home-content">Web Designer - </span>
          
            <span className="home-content">Illustrator</span>
        </div>
        </div>
    </div>
    
    <Footer />

    </>
}