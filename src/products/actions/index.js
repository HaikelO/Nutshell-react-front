import axios from 'axios';

export const FETCH_PRODUCTS= 'fetch_products';

const ROOT_URL = "localhost:9090/api";

export function fetchBills() {
    const request = axios.get(`${ROOT_URL}/products`);
    return {
        type: FETCH_PRODUCTS,
        payload: request
    }
}