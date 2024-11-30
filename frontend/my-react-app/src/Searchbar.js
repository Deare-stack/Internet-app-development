import React from 'react';

function Searchbar() {
    return (
        <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
    </div>
    );
}

export default Searchbar;