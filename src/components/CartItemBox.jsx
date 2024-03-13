import { Delete } from "@mui/icons-material";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { calcTotal, clearAll } from "../redux/cartSlice";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useState } from "react";

const CartItemBox = () => {
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);

    const handleClick = () => {
        setOpenDialog(true);
    };
    
    const handleRemoveConfirmed = () => {
        dispatch(clearAll());
        dispatch(calcTotal())
        setOpenDialog(false);
    };

    const handleCancelRemove = () => {
        setOpenDialog(false);
    };

    return (
        <div className="col-span-12 md:col-span-7 mb-6">
            <CartItem />
            <button
                onClick={handleClick}
                className="p-2 h-12 mt-5 text-white flex items-center font-krona bg-red-700 rounded-md shadow-lg text-xs mx-auto">
                <Delete /> EMPTY CART
            </button>
            <Dialog
                open={openDialog}
                onClose={handleCancelRemove}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to empty your cart?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleCancelRemove}>Cancel</Button>
                    <Button onClick={handleRemoveConfirmed} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CartItemBox;
