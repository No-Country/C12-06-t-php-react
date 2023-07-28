import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Content } from './Content';

const Carrousel = ({ image1, image2, image3 }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full overflow-hidden">
            <Slider {...settings}>
                <div className="relative">
                    <Content text={'first'} />
                    <Image width={1440} height={504} src="/carrousel/1.webp" className="w-[100%] h-[600px] object-cover" />
                </div>
                <div className="relative">
                    <Content text={'second'} />
                    <Image width={1440} height={504} src="/carrousel/2.webp" className="w-[100%] h-[600px] object-cover" />
                </div>
                <div className="relative">
                    <Content text={'third'} />
                    <Image width={1440} height={504} src="/carrousel/3.webp" className="w-[100%] h-[600px] object-cover" />
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;
