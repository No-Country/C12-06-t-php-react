import React from 'react';
import { Icons } from './Icons';

const businness = [
    {
        id: 1,
        name: 'Transistor',
        icon: Icons.businness.transistor,
    },
    {
        id: 2,
        name: 'Mirage',
        icon: Icons.businness.mirage,
    },
    {
        id: 3,
        name: 'StaticKit',
        icon: Icons.businness.staticKit,
    },
    {
        id: 4,
        name: 'Tuple',
        icon: Icons.businness.tuple,
    },
    {
        id: 5,
        name: 'Laravel',
        icon: Icons.businness.laravel,
    },
    {
        id: 6,
        name: 'Statamic',
        icon: Icons.businness.statamic,
    },
];

const testimonial = [
    {
        id: 1,
        logo: Icons.businness.tuple,
        comment:
            'La calidad y variedad de autos usados disponibles fue impresionante. Cada vehículo estaba en excelentes condiciones y tenía un historial detallado de inspección. Además, el proceso de financiamiento fue rápido y sin complicaciones, gracias al apoyo del especialista en financiamiento que me asistió.',
        person: {
            name: 'Judith Benjumea',
            job: 'CEO, Tuple',
        },
    },
    {
        id: 2,
        logo: Icons.businness.workcation,
        comment:
            'El proceso de tasación fue sencillo y justo. El especialista en tasación evaluó mi vehículo con detalle y me ofreció una valoración que superó mis expectativas. Además, el equipo de atención al cliente siempre estuvo disponible para responder mis preguntas y brindarme información sobre el proceso de venta.',
        person: {
            name: 'Jose Rodriguez',
            job: 'CEO, Workcation',
        },
    },
];

export const Testimonials = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <section className="py-16 px-4 md:px-8  text-center">
                <div className="flex justify-center flex-col items-center">
                    <h4 className="text-OrangeRed font-extrabold text-4xl my-4">Lo que dicen nuestros clientes</h4>
                    <p className="text-SlateGray text-xl">
                        Te brinda la comodidad de explorar nuestro inventario de autos usados desde cualquier lugar. Navega por el
                        sitio web intuitivo, accede a información detallada de cada vehículo y contacta al equipo con facilidad.
                    </p>
                </div>
                <p className="py-8 text-DimGray text-base font-semibold uppercase">
                    Más pequeñas empresas que confían en nosotros
                </p>
                <ul className="grid grid-cols-2 gap-[2px] md:grid-cols-3 md:px-8">
                    {businness.map((item) => (
                        <li key={item.id} className="bg-gray-50 text-gray-400 p-8 flex justify-center items-center">
                            {item?.icon}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="flex flex-col mb-16 justify-between md:flex-row  md:gap-[2px] bg-orange-500">
                <div className=" flex flex-col py-12 px-4 md:px-16 flex-1 gap-8 bg-white">
                    <div className="space-y-6">
                        {/* TODO: cahnge logo */}
                        <h4>{testimonial[0].logo}</h4>
                        <p>{testimonial[0].comment}</p>
                    </div>
                    <div>
                        <h4>{testimonial[0].person.name}</h4>
                        <p className="text-gray-400">{testimonial[0].person.job}</p>
                    </div>
                </div>

                <div className="flex flex-col px-4 md:px-16 py-12 md:pl-16 flex-1 gap-8 bg-white">
                    <div className="space-y-6 ">
                        {/* TODO: cahnge logo */}
                        <h4>{testimonial[1].logo}</h4>
                        <p>{testimonial[1].comment}</p>
                    </div>
                    <div>
                        <h4>{testimonial[1].person.name}</h4>
                        <p className="text-gray-400">{testimonial[1].person.job}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
