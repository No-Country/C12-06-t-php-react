import { useProductsByBrand } from '@/hooks/useProductsByBrand';
import { Card } from '../Card';

export const RelatedCars = ({ brand, id }) => {
    const { data } = useProductsByBrand(brand, id);

    return (
        <div className="flex flex-col items-center bg-Neutral pt-9 pb-20 gap-8">
            <h2 className="text-SlateGray font-bold text-3xl">Autos relacionados</h2>
            <div className="flex gap-5 md:flex-row flex-col">
                {data.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};
