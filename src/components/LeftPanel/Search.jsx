import React from 'react';
import Input from "../UI/myinput/Input";
import {AppBar, Box, Toolbar, Button, TextField} from "@mui/material";
import {useHistory} from "react-router-dom";

const Search = ({filter, setFilter}) => {

    const history = useHistory()
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar
                position="static"
                enableColorOnDark color='primary'
                sx={{ background: 'white' }}

            >
                <Toolbar>
                    <TextField
                        label="Search"
                        type="search"
                        variant="standard"
                        sx={{color: 'white'}}
                        value={filter.query}
                        onChange={e => setFilter({...filter, query: e.target.value})}
                    />
                    <Button
                        variant="outlined"
                        sx={{ ml: 3, height: 40}}
                        onClick={() => history.push('/patient/create')}
                        color="success"
                    >
                        Create
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Search;