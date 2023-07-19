import { GrayParagraph } from '../GrayParagraph';

export const WorkWithUs = () => {
    return (
        <section className="flex items-start overflow-hidden md:flex-row flex-col gap-14 py-16 px-[5%]">
            <div className="md:w-1/2 overflow-hidden sm:h-full h-72 w-full">
                <img className="object-cover w-full h-full" src="https://picsum.photos/600" />
            </div>
            <div className="md:w-1/2 h-full flex justify-center">
                <div className="flex flex-col justify-center gap-4">
                    <h2 className="text-OrangeRed uppercase font-semibold">Work with us</h2>
                    <h3 className="font-bold text-4xl">Nuestro proceso</h3>
                    <GrayParagraph>
                        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                        pellentesque. Blandit amet, sed aenean erat arcu morbi.
                    </GrayParagraph>
                    <h4 className="font-semibold text-xl">Cómo es diferente</h4>
                    <GrayParagraph>
                        Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes,
                        magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus.
                        Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
                    </GrayParagraph>
                    <GrayParagraph>
                        Mauris ullamcorper imperdiet nec egestas mi quis quam ante vulputate. Vel faucibus adipiscing lacus, eget.
                        Nunc fermentum id tellus donec. Ut metus odio sit sit varius non nunc orci. Eu, mi neque, ornare
                        suspendisse amet, nibh. Facilisi volutpat lectus id sapien dis mauris rhoncus. Est rhoncus, interdum
                        imperdiet ac eros, diam mauris, tortor. Risus id sit molestie magna.
                    </GrayParagraph>

                    <h2 className="text-OrangeRed uppercase font-semibold">Work with us</h2>
                    <h3 className="font-bold text-4xl">Que debes saber</h3>
                    <GrayParagraph>
                        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                        pellentesque. Blandit amet, sed aenean erat arcu morbi.
                    </GrayParagraph>
                </div>
            </div>
        </section>
    );
};
