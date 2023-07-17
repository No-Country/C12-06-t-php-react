import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';

export const ImageSlider = () => {
    return (
        <Swiper
            navigation={true}
            slidesPerView={4}
            modules={[FreeMode, Navigation]}
            freeMode={true}
            spaceBetween={16}
            className="car-images my-7 md:mx-6 mx-1 ">
            {Array(8)
                .fill(0)
                .map((item, index) => (
                    <SwiperSlide key={index}>
                        <img className="w-28 aspect-[8/7] rounded-lg" src="https://picsum.photos/100" />
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};
