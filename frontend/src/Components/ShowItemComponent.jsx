import React from 'react';

function ShowItemComponent({ items, 
	filterItemFunction, 
	addItemToCartFunction }) {
	return (
		<div className="product-list">
			{filterItemFunction.length === 0 ? (
				<p className="no-results">
					Sorry Friend! No matching Product Found!
				</p>
			) : (
				filterItemFunction.map((product) => (
					<div className="product" key={product.id}>
						<img src={product.image} alt={product.name} />
						<h2>{product.name}</h2>
						<hr/>
						<p>Price: ₹{product.price}</p>
						<button
							className="add-to-cart-button"
							onClick={() => {addItemToCartFunction(product); alert("Adding 1 Item To Cart!"); }}
						>
							Add to Cart
						</button>
					</div>
				))
			)}
		</div>
	);
}

export default ShowItemComponent;