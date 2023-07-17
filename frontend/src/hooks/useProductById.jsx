import { getProductById } from '@/services/getProductById';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useProductById = () => {
    const router = useRouter();
    let id = router.query.id;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState({});

    const getProduct = async () => {
        if (id) {
            const product = await getProductById(id);
            setData(product);
            setLoading(false);
        }
    };

    useEffect(() => {
        try {
            getProduct();
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }, [id]);

    return { loading, error, data };
};
