import { getProductsByBrand } from '@/services/getProductsByBrand';
import { useEffect, useState } from 'react';

export const useProductsByBrand = (brand) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const getByBrand = async () => {
        setData(await getProductsByBrand(brand));
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
