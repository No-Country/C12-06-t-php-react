import { Icons } from '../Icons';
import { SellerInfo } from '../shared/SellerInfo';
import { ImageSlider } from './ImageSlider';
import { Tag } from './Tag';

export const CarDetails = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-16">
                <div className="carimg flex flex-col w-1/2">
                    <img src="https://picsum.photos/500" className="rounded-3xl aspect-[6/4] object-cover" />
                    <ImageSlider />
                </div>
                <div className="flex flex-col gap-4 w-1/2 items-start">
                    <Tag />
                    <div className="flex flex-col gap-2">
                        <span className="font-extrabold text-[40px]">$ 12.000.000</span>
                        <span className="text-OrangeRed font-medium text-sm">Ciudad</span>
                    </div>
                    <h1 className="font-semibold text-3xl">Nombre del auto</h1>
                    <span className="text-OrangeRed font-bold text-sm">Nuevo | Marca</span>
                    <p className="text-SlateGray text-xl">
                        Descripción: Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                        Elit sunt amet fugiat veniam occaecat fugiat aliqua.{' '}
                    </p>
                    <SellerInfo />
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
