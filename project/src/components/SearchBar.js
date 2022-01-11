import React from "react";
import '../css/search.css'

function SearchBar() {
    const mediaQuery = window.matchMedia('(max-width: 739px)')
    
    if (mediaQuery.matches) {
        return (
            <div className="search">
                <input type="text" class="search__input" aria-label="search" placeholder="Хайх" />
                <button className="search__submit" aria-label="submit search"><img src="/icons/search.svg" /></button>
            </div>
        )
    } else {
        return(
            <div>
                <input
                className="search__input"
                type="text"
                placeholder="&#128269; Хайх"
                />
                <img className="searchIcon" src="/icons/search.svg" />
            </div>
        )
    }
    
}

export default SearchBar;