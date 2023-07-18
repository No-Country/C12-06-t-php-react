import axios from 'axios';
import { productsAPI } from './api';
import { formatDate } from '@/utils/formatDate';

const adapter = (data) => {
    return {
        ...data,
        is_offer: data.is_offer === 1 ? true : false,
        is_trend: data.is_trend === 1 ? true : false,
        condition: data.condition === 1 ? 'Nuevo' : 'Usado',
        created_at: formatDate(data.created_at.slice(0, 10)),
        updated_at: formatDate(data.created_at.slice(0, 10)),
    };
};

export async function getProductById(id) {
    try {
        const res = await axios.get(`${productsAPI}/${id}`);

        return adapter(res.data.data);
    } catch (err) {
        console.log(err);
    }
}
