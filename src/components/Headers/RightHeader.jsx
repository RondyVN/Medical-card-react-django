import React from 'react';
import {AppBar, Box, Toolbar, Typography, createTheme,} from "@mui/material";
import AgeAndName from "./AgeAndName";


const RightHeader = ({children, patientInfo}) => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            background: 'white',
        },
    });
    return (
        <Box sx={{flexGrow: 1}} data-testid="patient-header">
            <AppBar position="static"
                    theme={darkTheme}
            >
                <Toolbar>
                    {patientInfo
                        ? <AgeAndName patientInfo={patientInfo}/>
                        : <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        </Typography>
                    }
                    {children}

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default RightHeader;