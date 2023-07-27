import React from 'react';
import Image from 'next/image';

const ShouldKnow = () => {
    return (
        <article className="w-full flex flex-col items-center justify-center gap-4 text-center base:flex-row-reverse base:items-start base:mt-16">
            <figure className="w-full h-[300px] base:h-[500px]">
                <Image
                    width={500}
                    height={500}
                    src="/sellCar/3.webp"
                    alt="imagen de personas"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </figure>
            <div className="w-full flex flex-col px-4">
                <header className="w-full flex flex-col items-start gap-1 mb-4">
                    <p className="text-OrangeRed uppercase font-semibold">razones para cambiarte</p>
                    <h3 className="font-extrabold s:text-lg sm:text-xl md:text-2xl">¿Por qué vender tu auto con AutoApp?</h3>
                </header>
                <p className="text-xs text-start text-SlateGray sm:text-sm">
                    En AutoApp, nos apasiona brindarte una experiencia de compra excepcional. Nuestro equipo de expertos estará
                    encantado de asesorarte y ayudarte a encontrar el auto que se adapte perfectamente a tus necesidades y
                    presupuesto.
                </p>
                <div className="w-full flex flex-col mt-4 gap-2">
                    <p className="text-sm font-semibold text-start s:text-base">Beneficios</p>
                    <ul className="text-xs text-start text-SlateGray sm:text-sm list-inside list-disc flex flex-col gap-2">
                        <li>
                            <span className="font-bold">Modelos de Alta Gama: </span>
                            Explora nuestra exclusiva gama de autos usados de marcas reconocidas, desde deportivos y sedanes
                            lujosos hasta SUVs de alto rendimiento. ¡Eleva tu experiencia de conducción a un nivel superior!
                        </li>
                        <li>
                            <span className="font-bold">Tecnología Avanzada: </span>
                            Descubre vehículos que incorporan las últimas innovaciones tecnológicas, desde sistemas de asistencia
                            al conductor hasta conectividad avanzada. Conducir nunca había sido tan inteligente y seguro.
                        </li>
                        <li>
                            <span className="font-bold">Eficiencia y Sostenibilidad: </span>
                            Si buscas autos amigables con el medio ambiente, nuestra selección de modelos híbridos y eléctricos te
                            sorprenderá. Reduce tu huella ecológica sin sacrificar el placer de conducir.
                        </li>
                        <li>
                            <span className="font-bold">Diseños Vanguardistas: </span>
                            Los autos usados también pueden ser sinónimo de estilo y elegancia. Explora nuestra colección de
                            vehículos con diseños vanguardistas que cautivarán todas las miradas.
                        </li>
                    </ul>
                    <p className="text-xs text-start text-SlateGray sm:text-sm">
                        ¡No te quedes atrás en las últimas tendencias automovilísticas! Visita nuestra sección de Tendencias de
                        autos usados y déjate inspirar.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default ShouldKnow;
