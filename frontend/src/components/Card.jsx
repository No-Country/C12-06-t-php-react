export const Card = ({ data }) => {
    const { city, seller, createdAt, price } = data;

    return (
        <div className="w-[390px] h-[351px] shadow-lg rounded-lg overflow-hidden">
            <img src="https://picsum.photos/400" className="w-full h-[192px]" />
            <div className="flex flex-col w-full p-6 gap-2">
                <span className="text-OrangeRed font-medium text-sm">{city}</span>
                <span className="font-bold text-xl">$ {price}</span>
                <div className="flex gap-3 mt-1">
                    <img src="https://picsum.photos/40/40" className="rounded-full w-10 h-10" />
                    <div className="flex flex-col">
                        <span className="font-medium">{seller}</span>
                        <span className="text-SlateGray text-sm">Publicado: {createdAt}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
