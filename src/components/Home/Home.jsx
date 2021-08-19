import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <main className="Home">
            <div className="container">
                <div className="border-home"></div>
                    <div className="flex grid">
                        <div className="Home-content">
                            <h2 className="Home-content-header">
                                Welcome to Micdanny integrated solutions!!!
                            </h2>

                            <p className="content-1">
                                Our team of experienced supply chain professionals leverage on our unparalleled
                                distribution network with you from start to finish, designing and implementing
                                your unique supply chain model.
                            </p>

                            <br />

                            <p className="content-2">
                                Over 500 dedicated employees, working in over 46 locations around the country,
                                deliver operational excellence - to provide viable answers to the most challenging 
                                supply chain questions.
                            </p>

                            <div className="bottom-content">
                                <h4 className="bottom-content-ceo">
                                    chimezie ogbonna dennis
                                </h4>

                                <p>
                                    Ceo and founder.
                                </p>
                            </div>
                        </div>

                        {/* <div className="Home-ceo">
                            <img src={Ceo} alt="Ceo-image" style={{ height:"300px", width:"400px" }}/>
                    </div> */}
                </div>
            </div>
       </main>
    )
}

export default Home
