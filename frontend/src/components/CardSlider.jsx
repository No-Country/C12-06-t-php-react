import { Card } from './Card';

// llamar asi en el home
// <CardSlider type="offers" />
// <CardSlider type="tendencies" />

export const CardSlider = ({ type }) => {
    const text = {
        tendencies: {
            title: 'Tendencias',
            p: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi praesentium et, nesciunt unde ipsum quaerat.',
        },
        offers: {
            title: 'Ofertas',
            p: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi praesentium et, nesciunt unde ipsum quaerat.',
        },
    };

    const cards = [
        { id: 1, city: 'Buenos Aires', price: '12.000.000', seller: 'Juan Vendedor', createdAt: 'Mar 26, 2023' },
        { id: 2, city: 'La Plata', price: '12.000.000', seller: 'Federico Vendedor', createdAt: 'Mar 16, 2023' },
        { id: 3, city: 'Misiones', price: '12.000.000', seller: 'Melisa Vendedora', createdAt: 'Mar 30, 2023' },
    ];

    // Si offers traer ofertas
    // Si tendencies traer tendencias

    return (
        <div className="flex flex-col gap-4 p-5">
            <h3 className="font-extrabold text-4xl">{text[type].title}</h3>
            <p className="text-gray-500 text-xl">{text[type].p}</p>
            <div className="flex gap-5 relative w-max md:flex-row flex-col">
                <button className="bg-orange-300 absolute text-white p-3 text-xl rounded-full w-11 h-11 flex justify-center items-center top-2/4 -right-5">
                    &gt;
                </button>
                {cards.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};
