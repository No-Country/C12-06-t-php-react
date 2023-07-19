import { Card } from '../Card';

export const RelatedCars = ({ data, id }) => {
    const relatedCars = data.filter((item) => item.id !== id).slice(0, 3);

    return (
        <div className="flex flex-col items-center bg-Neutral pt-9 pb-20 gap-8">
            <h2 className="text-SlateGray font-bold text-3xl">Autos relacionados</h2>
            <div className="flex gap-5 md:flex-row flex-col">
                {relatedCars.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};
