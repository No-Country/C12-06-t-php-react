import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Navigation } from 'swiper/modules';
import { Card } from './Card';

export const CardSlider = ({ type }) => {
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

    const cards = [
        { id: 1, city: 'Buenos Aires', price: '12.000.000', seller: 'Juan Vendedor', createdAt: 'Mar 26, 2023' },
        { id: 2, city: 'La Plata', price: '12.000.000', seller: 'Federico Vendedor', createdAt: 'Mar 16, 2023' },
        { id: 3, city: 'Misiones', price: '12.000.000', seller: 'Melisa Vendedora', createdAt: 'Mar 30, 2023' },
        { id: 4, city: 'Misiones', price: '12.000.000', seller: 'Melisa Vendedora', createdAt: 'Mar 30, 2023' },
        { id: 5, city: 'Misiones', price: '12.000.000', seller: 'Melisa Vendedora', createdAt: 'Mar 30, 2023' },
        { id: 6, city: 'Misiones', price: '12.000.000', seller: 'Melisa Vendedora', createdAt: 'Mar 30, 2023' },
    ];

    // Si offers traer ofertas
    // Si tendencies traer tendencias

    return (
        <div className="flex flex-col gap-4 p-4 md:p-5">
            <h3 className="font-extrabold text-4xl">{text[type].title}</h3>
            <p className="text-SlateGray text-xl">{text[type].p}</p>

            <Swiper
                slidesPerView={'auto'}
                className="md:max-w-[85vw] max-w-[95vw] md:px-8 px-2 py-8"
                navigation={true}
                freeMode={true}
                spaceBetween={20}
                modules={[FreeMode, Navigation]}>
                {cards.map((item) => (
                    <SwiperSlide key={item.id} style={{ flexShrink: '1' }}>
                        <Card data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
