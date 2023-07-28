import { TeamCard } from './TeamCard';

export const Team = () => {
    const team = [
        {
            name: 'Julia Fernandez',
            path: '/about/team1.webp',
            role: 'Especialista en Asesoramiento Personalizado',
            text: 'Amante de los autos y un experto en comprender las necesidades de nuestros clientes. Con una vasta experiencia en el rubro, está comprometido en brindarte una atención personalizada y guiarte en la búsqueda del auto perfecto que se ajuste a tus preferencias y presupuesto. Su pasión por los detalles y su conocimiento del mercado automotriz te aseguran que encontrarás el vehículo ideal para ti.',
        },
        {
            name: 'Omar Jurado',
            path: '/about/team2.webp',
            role: 'Inspector Certificado de Vehículos Usados',
            text: 'Inspector certificado es el encargado de realizar exhaustivas inspecciones a cada vehículo para garantizar que estén en óptimas condiciones. Su dedicación y experiencia en mecánica automotriz aseguran que solo los autos que cumplen con nuestros altos estándares de calidad lleguen a nuestra selección de autos usados. Su compromiso con la transparencia y la confianza es un pilar en nuestra misión de satisfacción del cliente.',
        },
        {
            name: 'Jeferson Ortiz',
            path: '/about/team3.webp',
            role: 'Especialista en Financiamiento y Trámites',
            text: 'Comprar o vender un auto puede implicar trámites complejos. Nuestro especialista en financiamiento y trámites se encarga de que este proceso sea ágil y sencillo para ti. Con su amplio conocimiento en opciones de financiamiento y procedimientos legales, te guiará paso a paso para que obtengas la aprobación y realices los trámites con confianza y sin complicaciones.',
        },
        {
            name: 'Ana Hernandez',
            path: '/about/team4.webp',
            role: 'Atención al Cliente y Soporte Técnico',
            text: 'Siempre dispuestos a escucharte y responder tus preguntas, son los encargados de brindarte un servicio amable, eficiente y personalizado. Desde consultas sobre nuestros autos usados hasta asistencia técnica en nuestro concesionario virtual, su compromiso es asegurarse de que tengas una experiencia satisfactoria y disfrutes de un excelente servicio en cada interacción.',
        },
    ];
    return (
        <section className="pt-24 flex gap-8 lg:flex-row flex-col">
            <div className="lg:w-1/3 w-full flex flex-col gap-5">
                <h2 className="font-bold text-4xl">Nuestro equipo</h2>
                <div className="text-SlateGray text-xl flex flex-col gap-5">
                    <p>
                        Está compuesto por apasionados del mundo automotriz y profesionales altamente capacitados para brindarte
                        una experiencia excepcional en la compra y venta de autos usados.
                    </p>
                    <p>Conócenos y descubre quiénes están detrás de cada paso para hacer realidad tus sueños automovilísticos:</p>
                </div>
            </div>
            <div className="flex justify-center gap-8 w-full lg:w-2/3 flex-wrap">
                {team.map((item, index) => (
                    <TeamCard key={index} data={item} />
                ))}
            </div>
        </section>
    );
};
