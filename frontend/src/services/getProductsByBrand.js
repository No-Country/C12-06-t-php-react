import axios from 'axios';
import { ProductsEndpoints } from './api';

export const getProductsByBrand = async (brand) => {
    try {
        const res = await axios.get(`${ProductsEndpoints.getByBrand}${brand}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
