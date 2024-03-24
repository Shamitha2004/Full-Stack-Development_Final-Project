import React from 'react';
function SearchComponent({ searchItem, itemSearchUserFunction }) {
	return (
		<header className="App-header" id='header'>
			<h1>GHOST-THE SHOPPING CART</h1>
			<div className="search-bar" id='searchB'>
				<input
					type="text"
					placeholder="Search here..."
					value={searchItem}
					onChange={itemSearchUserFunction}
				/>
			</div>
		</header>
	);
}

export default SearchComponent;