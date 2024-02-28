import { SET_PRODUCTS } from "./actionTypes";

export const filterReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};