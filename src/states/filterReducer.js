export const filterReducer = (state, { type, payload }) => {
    switch (type) {
        case 'set-product':
            return { ...state, products: payload };
        default:
            return state;
    }
};