// src/reducers/index.js

import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { signupReducer } from './authReducer';
import { getProducts } from './authReducer';
import { getProductbyid } from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    signup: signupReducer,
    products: getProducts,
    singleProduct: getProductbyid
});

export default rootReducer;
