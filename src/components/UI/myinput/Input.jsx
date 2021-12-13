import React from 'react';
import cl from './Input.module.css'
import {TextField} from "@mui/material";

const Input = React.forwardRef((props, ref) => {

    return (
        <TextField
            label="Search"
            type="search"
            variant="standard"
            sx={{color: 'white'}}
            fullWidth
            ref={ref}
            {...props}
        />
    );
});

export default Input;