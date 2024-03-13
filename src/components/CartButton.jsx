import { RemoveShoppingCartRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
    calcTotal,
    itemDecreased,
    itemIncreased,
    itemRemoved,
} from "../redux/cartSlice";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const CartButton = ({ item }) => {
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);

    const handleIncrease = () => {
        dispatch(itemIncreased(item.id));
    };

    const handleDecrease = () => {
        dispatch(itemDecreased(item.id));
    };

    const handleRemove = () => {
        setOpenDialog(true);
    };

    const handleRemoveConfirmed = () => {
        dispatch(itemRemoved(item.id));
        dispatch(calcTotal())
        setOpenDialog(false);
    };

    const handleCancelRemove = () => {
        setOpenDialog(false);
    };

    return (
        <div className="flex justify-between items-center p-4">
            <button
                onClick={handleRemove}
                className="p-2 h-8 text-white flex items-center bg-red-700 rounded-md shadow-lg text-xs">
                <RemoveShoppingCartRounded /> REMOVE
            </button>
            <div className="font-krona">
                <button
                    onClick={handleDecrease}
                    disabled={item.quantity === 1}
                    className={`h-8 w-8 p-1 font-extrabold ${
                        item.quantity === 1
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-yellow text-darkooo"
                    } text-center uppercase rounded-md shadow-lg hover:bg-dark-yellow`}>
                    -
                </button>
                <span className="mx-3">{item.quantity}</span>
                <button
                    onClick={handleIncrease}
                    className="h-8 w-8 p-1 font-extrabold bg-yellow text-darkooo text-center uppercase rounded-md shadow-lg hover:bg-dark-yellow">
                    +
                </button>
            </div>
            <Dialog
                open={openDialog}
                onClose={handleCancelRemove}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Do you really want to remove item?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleCancelRemove}>Cancel</Button>
                    <Button onClick={handleRemoveConfirmed} autoFocus>
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CartButton;
