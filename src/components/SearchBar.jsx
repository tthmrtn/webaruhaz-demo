import React, { useState } from "react";
import BButton from "./BButton";

const SearchBar = (props) => {
    

    return (
        <>
            <div className="search-bar-container">
                <input type="text" name="searchbar" id="searchbar" />
                <BButton clssnm="search-button" title="Search" onClick={props.onClick}>Search</BButton>
            </div>
        </>
    )
}

export default SearchBar;