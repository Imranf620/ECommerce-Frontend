// ./authActions.js
import { Login_Request, Login_Success, Login_Failure } from './authActionTypes';
import { SIGNUP_Request, SIGNUP_Success, SIGNUP_Failure } from './authActionTypes';
import { GET_PRODUCT_Request, GET_PRODUCT_Success, GET_PRODUCT_Failure } from './authActionTypes';
import { GET_PRODUCT_ID_Request, GET_PRODUCT_ID_Success, GET_PRODUCT_ID_Failure } from './authActionTypes';
import { login } from '../services/auth/authService';
import { signup } from '../services/auth/authService';
import { getProducts } from '../services/product/productService';
import { getProductbyId_ } from '../services/product/productService';

export const loginUser = (credentials) => async (dispatch) => {
    dispatch(Login_Request());
    try {
        const userData = await login(credentials);
        dispatch(Login_Success(userData));
    } catch (error) {
        dispatch(Login_Failure(error.message));
    }
};
export const signupUser = (credentials) => async (dispatch) => {
    dispatch(SIGNUP_Request());
    try {
        const userData = await signup(credentials);
        dispatch(SIGNUP_Success(userData));
    } catch (error) {
        dispatch(SIGNUP_Failure(error.message));
    }
};
export const getproduct = () => async (dispatch) => {
    dispatch(GET_PRODUCT_Request());
    try {
        const product_ = await getProducts();
        dispatch(GET_PRODUCT_Success(product_));
    } catch (error) {
        dispatch(GET_PRODUCT_Failure(error.message));
    }
};
export const getproductbyid = (id) => async (dispatch) => {
    dispatch(GET_PRODUCT_ID_Request());
    try {
        const product = await getProductbyId_(id);
        dispatch(GET_PRODUCT_ID_Success(product));
    } catch (error) {
        dispatch(GET_PRODUCT_ID_Failure(error.message));
    }
};
