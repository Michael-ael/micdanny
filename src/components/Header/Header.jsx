import React from 'react'
import './Header.css'

const Header = () => {
    return (
       <header>
         <div className="header-wrap">
                <div className="container">
                    <div className="flex">
                        <h1>
                            logistics...your way
                        </h1>

                        <p>
                            For over 30years, Micdanny integration solutions has taken the world's toughest supply chain
                            challenges and turned them into seamless, streamlined systems.
                        </p>

                        <button className="btn-header">
                            Contact Us
                        </button>
                    </div>
                </div> 
        </div>   

       </header>
       
    )
}

export default Header
