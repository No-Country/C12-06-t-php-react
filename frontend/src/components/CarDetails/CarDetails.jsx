import { Icons } from '../Icons';
import { SellerInfo } from '../shared/SellerInfo';
import { ImageSlider } from './ImageSlider';
import { OfferTag } from './OfferTag';

export const CarDetails = () => {
    const carData = {
        name: 'Nombre del Auto',
        price: '12.000.000',
        is_offer: true,
        createdAt: 'Mar 26, 2023',
        user: 'Juan',
        city: 'Ciudad',
        condition: 'Nuevo',
        brand: 'Marca',
        desc: 'Descripción: Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    };
    return (
        <div className="flex flex-col">
            <div className="flex gap-16 md:flex-row flex-col">
                <div className="carimg flex flex-col md:w-1/2">
                    <img src="https://picsum.photos/500" className="rounded-3xl aspect-[6/4] object-cover" />
                    <ImageSlider />
                </div>
                <div className="flex flex-col gap-4 md:w-1/2 items-start">
                    {carData.is_offer && <OfferTag />}
                    <div className="flex flex-col gap-2">
                        <span className="font-extrabold text-[40px]">$ {carData.price}</span>
                        <span className="text-OrangeRed font-bold text-sm">{carData.city}</span>
                    </div>
                    <h1 className="font-semibold text-3xl">{carData.name}</h1>
                    <span className="text-OrangeRed font-bold text-sm">
                        {carData.condition} | {carData.brand}
                    </span>
                    <p className="text-SlateGray text-xl">{carData.desc}</p>
                    <SellerInfo createdAt={carData.createdAt} seller={carData.user} />
                    <div className="flex gap-4">
                        <button className="bg-OrangeRed rounded-md">
                            <p className="text-White font-medium py-2 px-4">Contactar vendedor</p>
                        </button>
                        <span className="px-4 py-2">{Icons.social.whatsAppFull}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
