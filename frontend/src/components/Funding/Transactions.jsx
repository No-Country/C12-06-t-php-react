export const Transactions = () => {
    return (
        <section>
            <h2 className="text-OrangeRed uppercase font-semibold">funcionamiento</h2>
            <div className="flex flex-col gap-8 items-start">
                <h3 className="font-bold text-4xl">¿Cómo Funciona Nuestra Financiación?</h3>
                <div className="flex text-SlateGray text-lg gap-6 sm:flex-row flex-col">
                    <div className="flex flex-col gap-6">
                        <p>
                            Facilitamos el proceso de compra y venta de autos usados en Argentina, para que puedas disfrutar de la
                            experiencia de conducir tu próximo vehículo sin preocupaciones.
                        </p>
                        <p>
                            <span className="font-bold">Financiamiento para Compra de Autos Usados: </span>
                            ¿Buscas un plan de pago cómodo y adaptado a tus posibilidades? Nuestro equipo de expertos en
                            financiamiento te ayudará a encontrar la mejor opción para adquirir el auto usado que tanto deseas.
                        </p>
                        <p>
                            Con tasas competitivas y plazos flexibles, podrás llevar a casa tu vehículo sin comprometer tu
                            presupuesto.
                        </p>
                        <p>
                            <span className="font-bold">Tasación de Autos para Venta con Financiamiento: </span>
                            Si estás considerando vender tu auto usado, te ofrecemos la posibilidad de recibir una tasación justa
                            y competitiva con la opción de financiar su compra para el futuro propietario.
                        </p>
                        <p>
                            Al ofrecer financiamiento, tu vehículo se vuelve más atractivo para potenciales compradores,
                            aumentando tus posibilidades de cerrar la venta de forma rápida y efectiva.
                        </p>
                    </div>
                    <ol className="flex flex-col gap-8 list-decimal list-inside">
                        <li>
                            <span className="font-bold">Cotización Personalizada: </span>
                            Nuestro equipo de financiamiento evaluará tu perfil y necesidades para ofrecerte una cotización
                            personalizada. Te proporcionaremos detalles claros sobre las cuotas, tasas de interés y plazos
                            disponibles.
                        </li>
                        <li>
                            <span className="font-bold">Aprobación Rápida: </span>
                            Agilizamos el proceso de aprobación para que puedas tomar una decisión informada lo antes posible.
                            Trabajamos con entidades financieras confiables y transparentes, garantizando una gestión segura y
                            confiable.
                        </li>
                        <li>
                            <span className="font-bold">Trámite Sencillo: </span>
                            Nos encargamos de todos los trámites y papeleo necesarios para que puedas disfrutar de una experiencia
                            de compra sin complicaciones. Nuestro equipo te guiará durante todo el proceso, respondiendo tus
                            preguntas y brindándote asesoramiento profesional.
                        </li>
                        <li>
                            <span className="font-bold">Flexibilidad y Comodidad: </span>
                            Nuestra financiación se adapta a tu capacidad de pago, brindándote opciones flexibles que te permitan
                            cumplir con tus responsabilidades financieras sin sacrificar tus sueños.
                        </li>
                    </ol>
                </div>
                <button className="bg-OrangeRed text-White font-medium py-3 px-5 rounded-md">Solicitar Financiación</button>
            </div>
        </section>
    );
};
