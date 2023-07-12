import Link from 'next/link';
import { OfferTag } from './CarDetails/OfferTag';
import { SellerInfo } from './shared/SellerInfo';

export const Card = ({ data }) => {
    const { city, seller, createdAt, price, is_offer } = data;

    return (
        <Link href={`/cars/${data.id}`}>
            <div className="w-[330px] md:w-[390px] h-[351px] shadow-lg rounded-lg overflow-hidden relative">
                {is_offer && (
                    <div className="absolute top-[5%] left-[5%]">
                        <OfferTag />
                    </div>
                )}
                <img src="https://picsum.photos/400" className="w-full h-[192px]" />
                <div className="flex flex-col w-full p-6 gap-2">
                    <span className="text-OrangeRed font-medium text-sm">{city}</span>
                    <span className="font-bold text-xl">$ {price}</span>
                    <SellerInfo seller={seller} createdAt={createdAt} />
                </div>
            </div>
        </Link>
    );
};
