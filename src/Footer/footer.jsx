





export default function Footer(){

    return <>
    <div className="foter-continer text-light text-center">
    <div className="container">
        
               <div className="footer-flex">


                <div>
                    <h4>LOCATION</h4>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>


                <div>
                    <h4 className="mb-3">AROUND THE WEB</h4>
                   <span><i class="fa-brands fa-facebook"></i></span>
                   <span><i class="fa-brands fa-twitter"></i></span>
                   <span><i class="fa-brands fa-linkedin-in"></i></span>
                   <span><i class="fa-solid fa-globe"></i></span>
                </div>

               
                <div>
                <h4>ABOUT FREELANCER</h4>
                <p>Freelance is a free to use, licensed Bootstrap<br/> theme created by Route</p>
                </div>
               </div>
            </div>
        </div>


        <div className="copy-right container-fluid">
            <p>Copyright © Your Website 2021</p>
        </div>
   
    </>
}