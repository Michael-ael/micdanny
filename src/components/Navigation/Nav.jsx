import React from 'react'
import '../../utilities/utilities.css'
import { Link } from 'react-router-dom'
import './Nav.css'
import { BiMailSend } from 'react-icons/bi'

const Nav = () => {
    return (
       <nav className="nav">
        <div className="container">
           <div className="flex">
             <div className="navbar-logo">
                <Link to="/"> 
                 <h3> Micdanny </h3>    
                     <span className="bottom-logo">
                        <p>Integrated Solutions</p> 
                     </span>
                 </Link>                            
             </div>

             <div className="nav-items">
                 <ul className="nav-links">
                 <Link to="/about">
                     <li className="nav-link">About Us</li>
                 </Link>    
                 <Link to="/services">
                     <li className="nav-link">Services</li>
                 </Link>
                 <Link to="/contact">
                     <li className="nav-link">Contact Us</li>
                 </Link>
                    <li className="nav-link email"><a href="#"><BiMailSend style={{
                        transform: "scale(1.5)",
                        marginRight: "5px"
                    }}/>micdannysolutions@gmail.com</a></li>
                 </ul>
             </div>
           </div>  
        </div>
        <div className="border-line"></div>
    </nav>
    )
}

export default Nav
