import Image from 'next/image';
import React from 'react';

const OurProcess = () => {
    return (
        <article className="w-full flex flex-col items-center justify-center gap-4 text-center base:flex-row base:items-start base:mt-16">
            <figure className="w-full h-[300px] base:h-[500px]">
                <Image
                    width={500}
                    height={500}
                    src="/sellCar/2.webp"
                    alt="imagen de personas"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </figure>
            <div className="w-full flex flex-col px-4">
                <header className="w-full flex flex-col items-start gap-1 mb-4">
                    <p className="text-OrangeRed uppercase font-semibold">Nuestro proceso</p>
                    <h3 className="font-extrabold s:text-lg sm:text-xl md:text-2xl">Venta segura y eficiente</h3>
                </header>
                <div className="text-xs text-start text-SlateGray sm:text-lg flex flex-col gap-4">
                    <p>
                        Sabemos que tu vehículo tiene un valor especial para ti, y nuestro equipo de expertos está aquí para
                        ayudarte a obtener el mejor precio por él. Desde el primer contacto hasta la transacción final, te
                        ofrecemos una experiencia transparente y satisfactoria.
                    </p>
                    <p>
                        Nuestro proceso de tasación es ágil y preciso. Valoramos tu auto basándonos en factores como el año,
                        modelo, estado y características, para asegurarnos de que obtengas una oferta justa y competitiva. Además,
                        nuestro equipo estará encantado de asesorarte en todo momento, respondiendo a tus preguntas y brindándote
                        la información que necesitas para tomar la mejor decisión.
                    </p>
                    <p>
                        ¡Confía en nosotros para vender tu auto usado de manera segura y eficiente! Visita nuestra sección de
                        "Vender tu auto" y comienza hoy mismo. Estamos emocionados de ser parte de esta importante etapa contigo y
                        garantizamos que tendrás una experiencia excepcional en nuestro concesionario.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default OurProcess;
