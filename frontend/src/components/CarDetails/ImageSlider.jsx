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
            className="car-images py-7 px-6 w-full">
            {Array(8)
                .fill(0)
                .map((item) => (
                    <SwiperSlide>
                        <img className="w-28 h-24 rounded-lg" src="https://picsum.photos/100" />
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};
