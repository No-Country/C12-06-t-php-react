import axios from 'axios';
import { ProductsEndpoints } from './api';

export async function getTrending() {
    try {
        const res = await axios.get(ProductsEndpoints.getTrend);
        return res.data.data;
    } catch (err) {
        console.log(err);
    }
}
