import React from 'react';
import {AppBar, Box, Toolbar, IconButton, Button, Typography, createTheme,} from "@mui/material";
import Moment from "react-moment";
import InfoOldName from "./InfoOldName";


const Header = ({children, someInfo}) => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            background: 'white',
        },
    });
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static"
                    theme={darkTheme}
            >
                <Toolbar>
                    {someInfo
                        ? <InfoOldName someInfo={someInfo}/>
                        : <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        </Typography>
                    }
                    {children}

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;