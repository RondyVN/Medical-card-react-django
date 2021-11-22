import React from 'react';
import Input from "./UI/myinput/Input";

const Search = ({filter, setFilter}) => {
    return (
        <Input
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder='Search'
        />
    );
};

export default Search;