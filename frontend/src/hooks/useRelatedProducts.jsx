import { getProductsByBrand } from '@/services/getProductsByBrand';
import { useEffect, useState } from 'react';

export const useRelatedProducts = (brand, id) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const getByBrand = async () => {
        const res = await getProductsByBrand(brand);
        const related = res.filter((item) => item.id !== id).slice(0, 3);
        setData(related);
        setLoading(false);
    };

    useEffect(() => {
        try {
            getByBrand();
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }, []);

    return { data, loading, error };
};
