import Layout from '@/components/Layout';
import React from 'react';

const PuntosDeVentas = () => {
    return (
        <Layout page="Puntos de ventas">
            <header className="w-full flex flex-col items-center justify-center text-center gap-4 px-2 md:px-12">
                <h2 className="font-extrabold sm:text-xl md:text-2xl">
                    Nuestra Red de
                    <span className="text-OrangeRed"> Puntos de Venta</span>
                </h2>
                <div className="text-DarkGray sm:max-w-[70%] md:max-w-[50%] flex flex-col gap-4">
                    <p>
                        En AutoApp tenemos diversos puntos de venta en toda Argentina para brindarte la mejor experiencia en la
                        compra y venta de autos usados.
                    </p>
                    <p>
                        Nuestros puntos de venta están estratégicamente ubicados para ofrecerte acceso conveniente y personalizado
                        a nuestros servicios automotrices.
                    </p>
                </div>
            </header>
            <section className="w-full"></section>
        </Layout>
    );
};

export default PuntosDeVentas;
