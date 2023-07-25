import React from 'react';
import Image from 'next/image';
import phone from '../../../public/icons/Phone.svg';
import mail from '../../../public/icons/Mail.svg';

const Lorem = () => {
    return (
        <article className="w-full h-full bg-OrangeRed">
            <div className="w-full flex flex-col items-start justify-start p-2 gap-8 sm:pl-5 sm:pt-8 sm:pr-5 sm:pb-8 md:pl-28 md:pt-20 md:pr-12 md:pb-20">
                <header className="w-full flex items-start flex-col gap-4  text-White">
                    <h2 className="font-extrabold text-xl">Contacto</h2>
                    <p className="text-base">
                        En AutoApp, valoramos tu satisfacción y estamos comprometidos a brindarte una
                        <span className="font-bold">experiencia de compra excepcional. </span>
                        No dudes en contactarnos para encontrar el auto usado perfecto que se ajuste a tus necesidades y
                        presupuesto.
                    </p>
                </header>
                <p className="text-White">
                    Balvanera, Buenos Aires
                    <br />
                    Argentina, ARG 12345
                </p>
                <article className="flex flex-col items-start gap-2">
                    <figure className="flex items-center gap-2 text-White">
                        <Image src={phone} alt="icono telefono" className="w-6 h-6" />
                        <figcaption>+1 (555) 123-4567</figcaption>
                    </figure>
                    <figure className="flex items-center gap-2 text-White">
                        <Image src={mail} alt="icono mail" className="w-6 h-6" />
                        <figcaption>support@example.com</figcaption>
                    </figure>
                </article>
                <p className="text-White mb-4">
                    Esperamos recibir tu mensaje pronto.
                    <span className="font-bold"> ¡Hagamos juntos realidad el sueño de conducir tu próximo auto usado!</span>
                </p>
            </div>
        </article>
    );
};

export default Lorem;
