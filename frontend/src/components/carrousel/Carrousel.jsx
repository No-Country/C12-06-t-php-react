import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image";


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
                <figure> 
                    <Image src={image1} width={800} height={600} className="w-[100%] max-h-[600px] object-cover"/> 
                </figure>
                <figure>
                    <Image src={image2} width={800} height={600} className="w-[100%] max-h-[600px] object-cover"/>
                </figure>
                <figure>
                    <Image src={image3} width={800} height={600} className="w-[100%] max-h-[600px] object-cover"/>
                </figure>
            </Slider>
        </div>

    );
};

export default Carrousel;
