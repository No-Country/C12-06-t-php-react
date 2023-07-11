import { Icons } from '../Icons';

export const Tag = () => {
    return (
        <span className="flex justify-center gap-2 items-center bg-LightOrangeRed text-OrangeRed font-medium py-1 w-[85px] rounded-3xl text-sm px-3">
            <span className="fill-OrangeRed">{Icons.utils.tag}</span>Oferta
        </span>
    );
};
