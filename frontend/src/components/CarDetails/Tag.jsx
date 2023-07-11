import { Icons } from '../Icons';

export const Tag = () => {
    return (
        <div className="flex justify-center gap-2 items-center bg-LightOrangeRed text-OrangeRed font-medium py-2 w-[85px] rounded-3xl flex text-sm">
            <span className="fill-OrangeRed">{Icons.utils.tag}</span>Oferta
        </div>
    );
};
