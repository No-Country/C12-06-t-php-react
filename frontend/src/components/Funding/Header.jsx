import { GrayParagraph } from '../GrayParagraph';

export const Header = () => {
    return (
        <div className="flex items-start overflow-hidden md:h-[65vh] md:flex-row flex-col">
            <div className="bg-GhostWhite text-[3.5rem] md:w-1/2 h-full flex justify-center">
                <div className="w-[75%] md:w-[60%] py-16 flex flex-col justify-center gap-4">
                    <h1 className="font-extrabold tracking-tight leading-none lg:text-6xl text-4xl">
                        Conoce nuestros planes de <span className="text-OrangeRed">financiación</span>
                    </h1>
                    <GrayParagraph>
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </GrayParagraph>
                    <div className="flex gap-3 font-medium text-lg">
                        <button className="bg-OrangeRed text-White shadow-sm px-10 py-4 rounded-md">Get started</button>
                        <button className="text-OrangeRed shadow-sm px-10 py-4 rounded-md bg-White">Live demo</button>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 overflow-hidden md:h-full h-72">
                <img className="w-screen md-w-full md:h-full object-cover" src="https://picsum.photos/600" />
            </div>
        </div>
    );
};
