export const AboutHeader = () => {
    return (
        <div className="flex items-start overflow-hidden h-[60vh]">
            <div className="bg-OrangeRed text-[3.5rem] w-1/2 h-full flex justify-center">
                <div className="w-[60%] flex flex-col justify-center">
                    <h1 className="text-White font-bold tracking-tighter">Conoce más de Nosotros</h1>
                    <p className="text-White text-xl">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
            </div>
            <div className="w-1/2 overflow-hidden">
                <img className="w-full h-full object-contain" src="https://picsum.photos/600" />
            </div>
        </div>
    );
};
