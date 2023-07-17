import { Card } from '../Card';

export const RelatedCars = () => {
    const cards = [
        { id: 1, city: 'Buenos Aires', price: '12.000.000', seller: 'Juan Vendedor', createdAt: 'Mar 26, 2023', is_offer: true },
        { id: 2, city: 'La Plata', price: '12.000.000', seller: 'Federico Vendedor', createdAt: 'Mar 16, 2023', is_offer: false },
        { id: 3, city: 'Misiones', price: '12.000.000', seller: 'Melisa Vendedora', createdAt: 'Mar 30, 2023', is_offer: false },
    ];
    return (
        <div className="flex flex-col items-center bg-Neutral pt-9 pb-20 gap-8">
            <h2 className="text-SlateGray font-bold text-3xl">Autos relacionados</h2>
            <div className="flex gap-5 md:flex-row flex-col">
                {cards.map((item) => (
                    <Card data={item} />
                ))}
            </div>
        </div>
    );
};
