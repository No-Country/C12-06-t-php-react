export const Faq = () => {
    const content = [
        {
            question: '¿Qué requisitos debo cumplir para acceder a la financiación para la compra de un auto usado?',
            answer: 'Los requisitos pueden variar según la opción de financiamiento que elijas. Sin embargo, generalmente se solicitan documentos de identidad, comprobantes de ingresos y referencias crediticias. Nuestro equipo te brindará toda la información necesaria para agilizar el proceso.',
        },
        {
            question: '¿Es posible financiar la compra de un auto usado y vender mi vehículo actual en su concesionario?',
            answer: '¡Claro! Nuestra opción de Tasación de Autos para Venta con Financiamiento te permite recibir una tasación justa por tu auto actual y ofrecer la posibilidad de financiamiento a los compradores interesados. Esto aumenta las posibilidades de cerrar la venta de manera rápida y efectiva.',
        },
        {
            question: '¿Cuánto tiempo lleva el proceso de aprobación de financiamiento?',
            answer: 'Nuestro proceso de aprobación es ágil y eficiente. En la mayoría de los casos, recibes una respuesta en poco tiempo. Nuestro objetivo es que puedas obtener la aprobación rápidamente para que puedas adquirir tu auto usado sin demoras.',
        },
        {
            question: '¿Qué beneficios obtengo al financiar la compra de mi auto usado en su concesionario?',
            answer: 'Al financiar la compra de tu auto usado con nosotros, obtendrás una serie de beneficios, como tasas competitivas, plazos flexibles, un proceso simplificado y el respaldo de nuestro equipo de expertos en financiamiento.',
        },
        {
            question: '¿Hay costos adicionales o comisiones ocultas al financiar la compra de un auto usado?',
            answer: 'En AutoApp, nos enorgullecemos de ofrecer un servicio de financiamiento transparente y confiable. No hay costos ocultos ni comisiones sorpresa. Te brindaremos toda la información sobre los costos y cargos asociados con tu financiamiento.',
        },
        {
            question: '¿Puedo acelerar el proceso de financiamiento enviando mi solicitud en línea?',
            answer: '¡Absolutamente! Puedes completar el formulario de solicitud de financiamiento en línea en nuestra página de Financiación. Esto nos permitirá agilizar el proceso y brindarte una respuesta rápida.',
        },
    ];

    return (
        <section className="bg-GhostWhite w-full py-16 px-6">
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-4xl mt-5 tracking-tight">Preguntas frecuentes</h2>
            </div>

            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 border-t-2 border-gray-200">
                {content.map((item, index) => (
                    <div key={index} className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>{item.question}</span>
                                <span className="transition group-open:rotate-180 text-DarkGray">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">{item.answer}</p>
                        </details>
                    </div>
                ))}
            </div>
        </section>
    );
};
