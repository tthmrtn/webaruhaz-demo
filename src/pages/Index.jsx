import React from "react";

import { useState } from "react";

import SearchBar from "../components/SearchBar";

const Index = () => {
    const [searchTitle, updateSearchTitle] = useState('');

    const handleClick = () => {
        updateSearchTitle(document.getElementById("searchbar").value);
    }


    return (
        <>
            <SearchBar onClick={handleClick}/>
            {searchTitle && <h1>Szűrő: {searchTitle}</h1>}
        </>
    )
}

export default Index;