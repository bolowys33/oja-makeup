import { createSlice } from "@reduxjs/toolkit";
import { calculateTotal } from "./utils";
import { toast } from "react-toastify";

const initialState = {
    total: 0,
    items: [],
};

let toastId = null;

const showToast = (message, type = "default") => {
    if (toastId) {
        toast.dismiss(toastId);
    }

    switch (type) {
        case "success":
            toastId = toast.success(message);
            break;
        case "info":
            toastId = toast.info(message);
            break;
        default:
            toastId = toast(message);
    }
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        itemAdded(state, action) {
            const item = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (!item) {
                state.items.push(action.payload);
                showToast(
                    `${action.payload.name} added to the cart!`,
                    "success"
                );
                return;
            }
            showToast(`${item.name} is already in cart!`, "info");
        },
        itemRemoved(state, action) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        itemIncreased(state, action) {
            const updatedItems = state.items.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            state.items = updatedItems;
            state.total = calculateTotal(updatedItems);
        },
        itemDecreased(state, action) {
            const updatedItems = state.items.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            state.items = updatedItems;
            state.total = calculateTotal(updatedItems);
        },
        calcTotal(state) {
            state.total = Intl.NumberFormat("en-US", {
                maximumFractionDigits: 0,
            }).format(calculateTotal(state.items));
        },
        clearAll(state) {
            state.items = [];
            state.total = 0;
        },
    },
});

export const {
    itemAdded,
    itemRemoved,
    itemIncreased,
    itemDecreased,
    calcTotal,
    clearAll,
} = cartSlice.actions;
export default cartSlice.reducer;
