import { combineReducers } from 'redux';
import ProductsReducer from './../products/reducers/reducer_products';
import BillsReducer from './../billing/reducers/reducer_bills';

const rootReducer = combineReducers({
    bills: BillsReducer
});

export default rootReducer;
