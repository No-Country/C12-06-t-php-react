export const Content = ({ text }) => {
    const data = {
        first: (
            <div className="absolute p-6 sm:p-8 w-[90%] sm:w-[40%] bg-White rounded-3xl top-1/4 left-[5%] sm:left-10 flex flex-col gap-4 items-start drop-shadow-md">
                <h1 className="text-OrangeRed font-extrabold text-xl md:text-4xl leading-tight">
                    ¡Renueva tu Vehículo con Nuestros Autos Usados!
                </h1>
                <p>
                    Encuentra tu Compañero Perfecto en Nuestro Inventario. ¡Contáctanos y Conduce Felizmente!
                    <span className="font-bold">Chat en Vivo Disponible con WhatsApp 💬</span>
                </p>
                <button className="bg-OrangeRed px-6 py-2 sm:px-9 sm:py-5 text-White text-lg rounded-md">Contáctanos</button>
            </div>
        ),
        second: (
            <div className="absolute p-6 sm:p-8 w-[90%] sm:w-[40%] bg-White rounded-3xl top-1/4 left-[5%] sm:left-10 flex flex-col gap-4 items-start drop-shadow-md">
                <h1 className="text-OrangeRed font-extrabold text-xl md:text-4xl leading-tight">
                    ¡Ofertas Imbatibles en Autos Usados!
                </h1>
                <p>
                    <span className="font-bold">Oferta por Tiempo Limitado</span>, ¡No te lo Pierdas! Ponte en Contacto con
                    Nosotros para Obtener los Mejores Precios.
                </p>
                <button className="bg-OrangeRed px-6 py-2 sm:px-9 sm:py-5 text-White text-lg rounded-md">Escríbenos ahora</button>
            </div>
        ),
        third: (
            <div className="absolute p-6 sm:p-8 w-[90%] sm:w-[40%] bg-White rounded-3xl top-1/4 left-[5%] sm:left-10 flex flex-col gap-4 items-start drop-shadow-md">
                <h1 className="text-OrangeRed font-extrabold text-xl md:text-4xl leading-tight">
                    ¡Descubre Nuestros Autos Usados de Calidad!
                </h1>
                <p>
                    Explora Nuestro Amplio Stock Hoy Mismo.
                    <br />
                    <span className="font-bold">¡Contáctanos Ahora y Llévate el Auto de Tus Sueños!</span>
                </p>
                <button className="bg-OrangeRed px-6 py-2 sm:px-9 sm:py-5 text-White text-lg rounded-md">Llama ahora</button>
            </div>
        ),
    };

    return data[text];
};
