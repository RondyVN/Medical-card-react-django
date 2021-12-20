import React from 'react';
import {AppBar, Box, Toolbar, Button, TextField} from "@mui/material";
import {useHistory} from "react-router-dom";


const Search = ({filter, setFilter}) => {

    const history = useHistory()
    return (
        <AppBar
            position="sticky"
            sx={{background: 'white'}}
        >
            <Toolbar>
                <TextField
                    label="Search"
                    type="search"
                    variant="standard"
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                />
                <Button
                    variant="outlined"
                    sx={{ml: 3, height: 40}}
                    onClick={() => history.push('/patient/create')}
                    color="success"
                >
                    Create
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Search;