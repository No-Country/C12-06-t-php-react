import Layout from '@/components/Layout';
import GMap from '@/components/Map/GMap';
import ContentContact from '@/components/contact/ContentContact';
import React from 'react';

const Contacto = () => {
    return (
        <Layout page="Contacto">
            <header className="w-full flex flex-col items-center justify-center p-8 text-center gap-4 bg-DarkSlateGray sm:p-24">
                <h2 className="md:text-4xl text-xl text-white font-extrabold">¿Cómo podemos ayudar?</h2>
                <p className="text-Gainsboro">
                    ¡Gracias por visitar nuestra página de Contacto! En AutoApp, estamos aquí para brindarte toda la asistencia
                    que necesitas en la compra y venta de autos usados.
                </p>
                <p className="text-Gainsboro">
                    Nuestro equipo de expertos está listo para responder tus preguntas, ofrecerte asesoramiento personalizado y
                    garantizar que tengas una experiencia satisfactoria con nosotros.
                </p>
            </header>
            <section className="w-full flex flex-col gap-10 mb-24">
                <ContentContact />
                <article className="w-full flex flex-col items-center justify-center text-center gap-8">
                    <h3 className="text-xl font-bold">¿Dónde ubicarnos?</h3>
                    <GMap
                        markersList={[
                            {
                                lat: -34.61315,
                                lng: -58.37723,
                            },
                            {
                                lat: -34.6179111,
                                lng: -59.0278495,
                            },
                        ]}
                        className="contact"
                    />
                </article>
            </section>
        </Layout>
    );
};

export default Contacto;
