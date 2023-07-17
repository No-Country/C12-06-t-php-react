import axios from 'axios';
import { cityEndpoint } from './api';

export async function getCity(id) {
    try {
        const res = await axios.get(`${cityEndpoint}/${id}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}
