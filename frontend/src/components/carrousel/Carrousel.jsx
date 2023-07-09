import React from "react";
import Slider from 'react-slick';
// import styles from './Carrousel.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


const Carrousel = ({ image1, image2, image3}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div>
            <Slider {...settings}>
                <div> 
                    <img src={image1} className="w-[100%] max-h-[600px] object-cover"/> 
                </div>
                <div>
                    <img src={image2} className="w-[100%] max-h-[600px] object-cover"/>
                </div>
                <div>
                    <img src={image3} className="w-[100%] max-h-[600px] object-cover"/>
                </div>
            </Slider>
        </div>

    );
};

export default Carrousel;
