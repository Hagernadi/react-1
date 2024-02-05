import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/footer"

export default function Contact(){
    let [password,setPassword]=useState('')
    let [email,setEmail]=useState('')
    let [Age,setAge]=useState('')
    let [name,setName]=useState('')
    return <>
    <Navbar /> 
    
    <div className="container text-center">
        <div>
            
            <div className="mt-4 mb-5">
            <h2 className="port-header mb-4 ">CONATCT SECTION</h2>
            <div className="d-flex port-head-content contact-header">
            <div className="befor-star"></div>
            <i class="fa-solid fa-star mx-4 star-befor"></i>
            <div className="after-star"></div>
            </div>
            </div>

        </div>

        <div className="mb-5">
            <p className="user-data">{name}</p>
        <input type="text" onClick={()=>{
            setName('userName:')
        }} className="w-50 input-design"  placeholder="userName"/>
        </div>
        <div className="mb-5">
        <p className="user-data">{Age}</p>
        <input type="number" onClick={()=>{
            setAge('userAge:')
        }}  className="w-50 input-design"  placeholder="userAge"/>
        </div>
        <div className="mb-5">
        <p className="user-data">{email}</p>
        <input type="email" onClick={()=>{
            setEmail('userEmail:')
        }} className="w-50 input-design"  placeholder="userEmail"/>
        </div>
        <div className="mb-4">
        
        <p className="user-data">{password}</p>
        <input type="number" onClick={ ()=>{
            setPassword('userPassword:')
        }}  className="w-50 input-design"  placeholder="userPassword"/>
        </div>

        <button className="btn button-data">Send Message</button>
        
    </div>
    <Footer />
    
    </>
}