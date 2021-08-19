import React from 'react'
import './HomeServices.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { BsArrowRight } from "react-icons/bs";
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import slider4 from '../../assets/images/slider4.jpg'

// const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

const HomeServices = () => {

    let settings = {
        dot:true,
        Infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        cssEase: "linear"
    }

    return (
        <main className="Home-services">
            <div className="container">
            <div className="border-home-services"></div>
                   <div className="contentHome">
                        <h2 className="homeservices-header">
                            services
                        </h2>
                        <br />
                        <p className="homeservices-content">
                            As one of the leading logistics and
                            supply chain service providers in 
                            Nigeris, we are known for our ability to
                            handle every last detail of our
                            customers' supply chain needs. Micdanny Integrated
                            Solutions takes care of all your logistics.
                        </p>

                        <a href="#" className="btn">
                            all services <BsArrowRight />
                        </a>
                    </div>  

                    <div className="HomeServicesCarousel">
                        <Slider {...settings} className="carousel">
                            <div className="card-wrapper">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={slider1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            content
                                        </h3>

                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-wrapper">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={slider2} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            content
                                        </h3>

                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-wrapper">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={slider3} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            content
                                        </h3>

                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-wrapper">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={slider4} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            content
                                        </h3>

                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
            </div>
        </main>
    )
}

export default HomeServices
