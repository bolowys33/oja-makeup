import { TextField } from "@mui/material";

const InputField = ({label, value, onchange , type}) => {

    
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="outlined-basic"
            label={label}
            type={type}
            autoFocus
            value={value}
            onChange={onchange}
            className="mb-4 text-gray-700 rounded"
        />
    );
};

export default InputField;
