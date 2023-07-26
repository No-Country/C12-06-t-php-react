import { Reviews } from './Reviews';

export const VendorInfo = () => {
    const info = [
        {
            heading: 'Ubicación',
            text: 'Argentina, Buenos aires',
        },
        {
            heading: 'Correo',
            text: 'marce@concesionario.com',
        },
        {
            heading: 'Especialidad',
            text: 'Venta de Camiones y Camionetas',
        },
        {
            heading: 'Biografía',
            text: 'Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu. ',
        },
    ];

    return (
        <section className="md:w-1/4 p-6 flex flex-col gap-6 shadow-xl h-full min-h-screen">
            <div>
                <h1 className="text-2xl font-bold">Marcela Vendedora</h1>
                <spa className="text-sm text-SlateGray">Años de experiencia</spa>
            </div>
            <div className="flex gap-3 [&>*]:px-4 [&>*]:py-2 [&>*]:shadow-sm [&>*]:rounded-md">
                <button className="bg-OrangeRed text-White">Mensaje</button>
                <button className="bg-White border">Llamar</button>
            </div>
            {info.map((item, index) => (
                <div key={index} className="flex flex-col gap-1 text-sm">
                    <span className="text-SlateGray">{item.heading}</span>
                    <p>{item.text}</p>
                </div>
            ))}
            <Reviews />
        </section>
    );
};
