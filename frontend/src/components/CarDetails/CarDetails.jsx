import { Icons } from '../Icons';
import { SellerInfo } from '../shared/SellerInfo';
import { ImageSlider } from './ImageSlider';
import { OfferTag } from './OfferTag';

export const CarDetails = ({ data }) => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16 md:flex-row flex-col">
                <div className="carimg flex flex-col md:w-1/2">
                    <img src="https://picsum.photos/500" className="rounded-3xl aspect-[6/4] object-cover" />
                    <ImageSlider />
                </div>
                <div className="flex flex-col gap-4 md:w-1/2 items-start">
                    {data.is_offer && <OfferTag />}
                    <div className="flex flex-col gap-2">
                        <span className="font-extrabold text-[40px]">$ {data.price}</span>
                        <span className="text-OrangeRed font-bold text-sm">{}</span>
                    </div>
                    <h1 className="font-semibold text-3xl">{data.name}</h1>
                    <span className="text-OrangeRed font-bold text-sm">
                        {data.condition} | {data.brand}
                    </span>
                    <p className="text-SlateGray text-xl">{data.description}</p>
                    <SellerInfo createdAt={data.created_at} seller={'Juan'} />
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
