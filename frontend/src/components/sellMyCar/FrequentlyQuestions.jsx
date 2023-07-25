import React from 'react';

const FrequentlyQuestions = () => {
    return (
        <section className="w-full flex flex-col bg-GhostWhite p-2 gap-4 mb-8 base:flex-row base:p-8">
            <div className="flex flex-col gap-2">
                <h3 className="text-base font-extrabold s:text-lg sm:text-xl md:text-2xl">
                    Preguntas Frecuentes - Venta de Autos Usados
                </h3>
                <p className="text-sm text-SlateGray sm:text-lg">
                    ¿No encuentra la respuesta que busca?
                    <br />
                    <span className="text-OrangeRed font-bold"> Póngase en contacto</span> con nuestro equipo de atención al
                    cliente.
                </p>
            </div>
            <ul className="w-full flex flex-col gap-4">
                <li className="w-full flex flex-col gap-2">
                    <span className="font-medium base:text-lg">¿Qué tipos de autos usados ofrecen en AutoApp?</span>
                    <p className="text-xs text-SlateGray sm:text-sm">
                        En nuestro concesionario virtual, ofrecemos una amplia variedad de autos usados que abarcan desde sedanes,
                        SUVs, hatchbacks, hasta camionetas y más. Nuestra selección incluye diferentes marcas y modelos para
                        satisfacer todas las preferencias y necesidades.
                    </p>
                </li>
                <li className="w-full flex flex-col gap-2">
                    <span className="font-medium base:text-lg">¿Cómo puedo solicitar una tasación para mi auto usado?</span>
                    <p className="text-xs text-SlateGray sm:text-sm">
                        Es sencillo. Puedes iniciar el proceso de tasación visitando la sección "Vender tu auto" en nuestro sitio
                        web. Allí encontrarás un formulario en el que deberás proporcionar detalles sobre tu vehículo, como el
                        año, modelo, kilometraje y estado general. Nuestro equipo de expertos te brindará una valoración precisa y
                        competitiva.
                    </p>
                </li>
                <li className="w-full flex flex-col gap-2">
                    <span className="font-medium base:text-lg">¿Cuál es el proceso de compra de un auto usado en línea?</span>
                    <p className="text-xs text-SlateGray sm:text-sm">
                        Para comprar un auto usado en nuestro concesionario virtual, simplemente selecciona el vehículo que te
                        interesa y haz clic en "Solicitar información". Uno de nuestros representantes se pondrá en contacto
                        contigo para brindarte más detalles, responder tus preguntas y coordinar una visita si así lo deseas.
                        Además, puedes acceder a informes de inspección y certificaciones para mayor tranquilidad.
                    </p>
                </li>
                <li className="w-full flex flex-col gap-2">
                    <span className="font-medium base:text-lg">¿Ofrecen financiamiento para la compra de autos usados?</span>
                    <p className="text-xs text-SlateGray sm:text-sm">
                        Sí, ofrecemos opciones de financiamiento para facilitar tu compra. Nuestro equipo de financiamiento te
                        ayudará a encontrar la mejor opción que se ajuste a tus posibilidades y necesidades. Obtén una cotización
                        personalizada y ahorra tiempo en el proceso de compra.
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default FrequentlyQuestions;
