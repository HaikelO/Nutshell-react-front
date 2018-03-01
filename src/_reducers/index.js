import { combineReducers } from 'redux';
import ProductsReducer from './../products/reducers/reducer_products';
import BillsReducer from './../billing/reducers/reducer_bills';
import ActiveCategorieReducer from './../cash_register/reducers/reducer_cashregister_active_categorie';
import CartReducer from './../cash_register/reducers/reducer_cashregister_cart';

const rootReducer = combineReducers({
    bills: BillsReducer,
    activeCategorie : ActiveCategorieReducer,
    cart : CartReducer
});

export default rootReducer;
