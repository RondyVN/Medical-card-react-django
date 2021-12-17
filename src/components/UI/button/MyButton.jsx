import React from 'react';
import {Button} from "@mui/material";

const MyButton = ({children, ...props}) => {
    return (

        <Button
            {...props}
            variant="outlined"
            sx={{ml: 3, height: 40}}
        >
            {children}
        </Button>
    );
};

export default MyButton;