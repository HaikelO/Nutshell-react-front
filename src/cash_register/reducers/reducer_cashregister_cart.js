import { CART_ADD_PRODUCT } from './../actions';

export default function (state = [], action) {
    switch (action.type) {
        case CART_ADD_PRODUCT:
            return [...state,action.payload];
        default:
            return state;
    }
}