import { getOffers } from '@/services/getOffers';
import { getTrending } from '@/services/getTrending';
import { useEffect, useState } from 'react';

export const useCardSliderProducts = (type) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getData = async () => {
        if (type == 'tendencies') {
            setData(await getTrending());
        } else if (type == 'offers') {
            setData(await getOffers());
        }
        setLoading(false);
    };

    useEffect(() => {
        try {
            getData();
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }, []);

    return { data, loading, error };
};
