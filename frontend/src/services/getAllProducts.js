import axios from 'axios';
import { productsAPI } from './api';

export async function getAllProducts() {
    try {
        const res = await axios.get(productsAPI);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}
