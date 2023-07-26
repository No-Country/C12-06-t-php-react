import Image from 'next/image';

export const AboutHeader = () => {
    return (
        <div className="flex items-start overflow-hidden sm:h-[60vh] sm:flex-row flex-col">
            <div className="bg-OrangeRed text-[3.5rem] sm:w-1/2 h-full flex justify-center">
                <div className="w-[75%] sm:w-[70%] py-16 flex flex-col justify-center gap-4">
                    <h1 className="text-White font-extrabold tracking-tight leading-none md:text-6xl text-4xl">
                        Conoce más de Nosotros
                    </h1>
                    <p className="text-White md:text-xl text-lg">
                        ¡Bienvenido a AutoApp! Somos un concesionario virtual especializado en la compra y venta de autos usados
                        en Argentina.
                    </p>
                    <p className="text-White md:text-xl text-lg">
                        Nuestra pasión por los automóviles y el compromiso con la satisfacción del cliente nos han posicionado
                        como referentes en el mercado automotriz.
                    </p>
                </div>
            </div>
            <div className="sm:w-1/2 overflow-hidden sm:h-full h-72">
                <Image
                    width={500}
                    height={100}
                    className="w-screen sm-w-full sm:h-full object-cover"
                    src="/about/header.webp"
                    alt="Autos estacionados"
                />
            </div>
        </div>
    );
};
