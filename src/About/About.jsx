import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/footer"
export default function About(){
    return <>
    <Navbar /> 
    
   
   <div className="container-fluid about-background vh-100">
    <div>
        
        <div>
        <h2 className="text-center about-component" >ABOUT COMPONENT</h2>
        <div className="d-flex port-head-content my-4">
            <div className="befor-about"></div>
            <i class="fa-solid fa-star mx-4 about-befor"></i>
            <div className="after-about"></div>
        </div>
        </div>


        <div className="d-flex container">
            <div className="paragraph-width">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="paragraph-width2">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

        </div>
    </div>
   </div>
   <Footer />
    </>
}