import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Navigation } from 'swiper/modules';
import { Card } from './Card';

export const CardSlider = ({ data, type }) => {
    const text = {
        tendencies: {
            title: 'Tendencias',
            p: 'Las últimas tendencias en autos usados que están revolucionando las calles de Argentina. Si buscas un vehículo que combine estilo, rendimiento y ahorro, estás en el lugar indicado. Nuestra selección de autos usados meticulosamente inspeccionados y certificados te garantiza calidad y tranquilidad en cada compra.',
        },
        offers: {
            title: 'Ofertas',
            p: 'Descubre una amplia selección de vehículos de calidad, con precios irresistibles y beneficios exclusivos. Nuestra pasión es brindarte la mejor experiencia de compra, garantizando que encuentres el auto perfecto que se adapte a tu estilo de vida y presupuesto.',
        },
    };

    return (
        <div className="w-full flex flex-col gap-4 py-4 px-[10%] md:py-5">
            <h3 className="font-extrabold text-4xl">{text[type].title}</h3>
            <p className="text-SlateGray text-xl">{text[type].p}</p>

            <Swiper
                slidesPerView={'auto'}
                className="home-swiper md:max-w-[85vw] max-w-[95vw] md:px-8 px-2 py-8"
                navigation={true}
                freeMode={true}
                spaceBetween={20}
                modules={[FreeMode, Navigation]}>
                {data?.map((item) => (
                    <SwiperSlide key={item.id} style={{ flexShrink: '1' }}>
                        <Card data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
