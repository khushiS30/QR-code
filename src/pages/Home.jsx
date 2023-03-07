import React from 'react'
import "./home.css";
import logo from "../qr-code.png"

const Home = () => {
  return (
    <div className='Wrapper'>
        <div className="container">
            
                <img src={logo} alt="logo" className='image'/>
            
            
            <p className="header">Improve your front-end skills by building projects</p>
            
            
            <p className='para'>Scan the QR code to visit Frontend 
            Mentor and take your coding skills to the next level.</p>
           
        </div>
    </div>
  )
}

export default Home