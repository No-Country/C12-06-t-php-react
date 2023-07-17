import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Navigation } from 'swiper/modules';
import { Card } from './Card';

import { useCardSliderProducts } from '@/hooks/useCardSliderProducts';

export const CardSlider = ({ type }) => {
    const { data, loading } = useCardSliderProducts(type);
    const text = {
        tendencies: {
            title: 'Tendencias',
            p: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi praesentium et, nesciunt unde ipsum quaerat.',
        },
        offers: {
            title: 'Ofertas',
            p: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi praesentium et, nesciunt unde ipsum quaerat.',
        },
    };

    return (
        <div className="flex flex-col gap-4 p-4 md:p-5">
            <h3 className="font-extrabold text-4xl">{text[type].title}</h3>
            <p className="text-SlateGray text-xl">{text[type].p}</p>

            <Swiper
                slidesPerView={'auto'}
                className="home-swiper md:max-w-[85vw] max-w-[95vw] md:px-8 px-2 py-8"
                navigation={true}
                freeMode={true}
                spaceBetween={20}
                modules={[FreeMode, Navigation]}>
                {!loading &&
                    data?.map((item) => (
                        <SwiperSlide key={item.id} style={{ flexShrink: '1' }}>
                            <Card data={item} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};
