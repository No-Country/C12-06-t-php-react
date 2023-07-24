export const AboutHeader = () => {
    return (
        <div className="flex items-start overflow-hidden sm:h-[60vh] sm:flex-row flex-col">
            <div className="bg-OrangeRed text-[3.5rem] sm:w-1/2 h-full flex justify-center">
                <div className="w-[75%] sm:w-[60%] py-16 flex flex-col justify-center gap-4">
                    <h1 className="text-White font-extrabold tracking-tight leading-none md:text-6xl text-4xl">
                        Conoce más de Nosotros
                    </h1>
                    <p className="text-White md:text-xl text-lg">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
            </div>
            <div className="sm:w-1/2 overflow-hidden sm:h-full h-72">
                <img className="w-screen sm-w-full sm:h-full object-cover" src="https://picsum.photos/600" />
            </div>
        </div>
    );
};
