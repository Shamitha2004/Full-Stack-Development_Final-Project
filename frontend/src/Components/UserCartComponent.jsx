import React from 'react';

function UserCartComponent({
	cartItems,
	deleteItemFromCartFunction,
	totalAmountCalculationFunction,
	setCartItems,
}) {
return (
<div className={`cart ${cartItems.length > 0 ? 'active' : ''}`}>
	<h2 id='cart'>Cart Items</h2>
	{cartItems.length === 0 ? (
	<p className="empty-cart">Hey Dude! Your Cart is Empty!!</p>
	) : (
<div>
	<ul>
		{cartItems.map((item) => (
			<li key={item.product.id} className="cart-item">
				<div>
					<div className="item-info">
						<div className="item-image">
							<img src={item.product.image} 
								alt={item.product.name} />
						</div>
						<div className="item-details">
							<h3>{item.product.name}</h3>
							<p>Price: ₹{item.product.price}</p>
						</div>
					</div>
					<div>
						<div className="item-actions">
							<button
								title="Remove from Cart"
								className="remove-button"
								onClick={() => {
								deleteItemFromCartFunction(item.product);
								alert("Are you Sure?? We are Removing this Product from your Cart!!");}}>
								Remove Product
							</button>
							<div className="quantity">
								<button style={{ margin: "1%" }} 
									title="Add more"
									onClick={(e) => {
									setCartItems((prevCartItems) => {
										const updatedCart = prevCartItems.map(
										(prevItem) =>
										prevItem.product.id === item.product.id
												? { ...prevItem, quantity: 
												item.quantity + 1 }
												: prevItem
										);
										return updatedCart;
									})
								}}>+</button>
								<p className='quant'>{item.quantity} </p>
								<button 
									title="Reduce quantity"
									onClick={(e) => {
									setCartItems((prevCartItems) => {
										const updatedCart = prevCartItems.map(
										(prevItem) =>
										prevItem.product.id === item.product.id
												? { ...prevItem, quantity:
												Math.max(item.quantity - 1, 0) }
												: prevItem
										);
										return updatedCart;
									})
								}}>-</button>
							</div>
						</div>
					</div>
				</div>
			</li>
		))}
	</ul>
	<div className="checkout-section">
		<div className="checkout-total">
			<p className="total">Total Amount: 
				₹{totalAmountCalculationFunction()}
			</p>
		</div>
		<button
			className="checkout-button"
			onClick={()=>alert("Check your bank balance!!")}
			disabled={cartItems.length === 0 || 
			totalAmountCalculationFunction() === 0}
		>
			Proceed to Payment
		</button>
	</div>
</div>
			)}
</div>
	);
}

export default UserCartComponent;