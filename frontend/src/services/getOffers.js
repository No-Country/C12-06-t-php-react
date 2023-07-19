import axios from 'axios';
import { ProductsEndpoints } from './api';

export async function getOffers() {
    try {
        const res = await axios.get(ProductsEndpoints.getOffer);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}
