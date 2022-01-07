import React from "react";
import '../css/search.css'

function SearchBar() {
    return (

        <div class="search">
            <input type="text" class="search__input" aria-label="search" placeholder="Хайх" />
            <button class="search__submit" aria-label="submit search"><img src="/icons/search.svg" /></button>
        </div>
    )
}

export default SearchBar;