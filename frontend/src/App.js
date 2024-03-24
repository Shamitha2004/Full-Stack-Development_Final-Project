import React, { useState } from 'react';
import './App.css';
import SearchComponent from './Components/SearchComponent';
import ShowItemComponent from './Components/ShowItemComponent';
import UserCartComponent from './Components/UserCartComponent';
import Img1 from './imgs/d3.jpg';
import Img2 from './imgs/d4.jpg';
import Img3 from './imgs/d5.jpg';
import Img4 from './imgs/d6.jpg';
import Img5 from './imgs/d7.jpg';
import Img6 from './imgs/d8.jpg';
import Img7 from './imgs/j1.jpg';
import Img8 from './imgs/j2.jpg';
import Img9 from './imgs/j3.jpg';
import Img10 from './imgs/l1.jpg';
import Img11 from './imgs/l2.jpg';
import Img12 from './imgs/l3.jpg';
import Img13 from './imgs/j4.jpg';
import Img14 from './imgs/j5.jpg';
import Img15 from './imgs/j6.png';
import Img16 from './imgs/l4.png';
import Img17 from './imgs/l5.png';
import Img18 from './imgs/l6.jpeg';
import Img19 from './imgs/mw1.png';
import Img20 from './imgs/mw2.png';
import Img21 from './imgs/mw3.png';
import Img22 from './imgs/ww1.png';
import Img23 from './imgs/ww2.png';
import Img24 from './imgs/ww3.png';
import Img25 from './imgs/sa1.png';
import Img26 from './imgs/sa2.png';
import Img27 from './imgs/sa3.png';
import Img28 from './imgs/s1.jpg';
import Img29 from './imgs/s2.png';
import Img30 from './imgs/s3.png';

function App() {
	const [items] = useState([
		{ id: 1, 
		name: 'Kurta - Men', 
		price: 900, 
		image: Img1
		},
		{ id: 2, 
		name: 'Daily Use T-shirts', 
		price: 200, 
		image: Img2
		},
		{ id: 3, 
		name: 'Lehenga', 
		price: 900, 
		image: Img3
		},
		{ id: 4, 
		name: 'Denim Jacket', 
		price: 999, 
		image: Img4
		},
		{ id: 5, 
		name: 'Kids Wear - Girls', 
		price: 700, 
		image: Img5
		},
		{ id: 6, 
		name: 'Kids Wear - Boys', 
		price: 800, 
		image: Img6
		},
		{ id: 19, 
		name: 'Hoodie', 
		price: 1500, 
		image: Img19
		},
		{ id: 20, 
		name: 'Semi-Formal (Mens Wear)', 
		price: 1300, 
		image: Img20
		},
		{ id: 21, 
		name: 'Semi-Casual (Mens Wear)', 
		price: 800, 
		image: Img21
		},
		{ id: 22, 
			name: 'Printed Kurta', 
			price: 950, 
			image: Img22
		},
		{ id: 23, 
			name: 'Smart Casual (Womens Wear)', 
			price: 1300, 
			image: Img23
		},
		{ id: 24, 
			name: 'NavyBlue A-Line Frock', 
			price: 850, 
			image: Img24
		},
		{ id: 25, 
			name: 'Soft-Silk Saree', 
			price: 1000, 
			image: Img25
		},
		{ id: 26, 
			name: 'Kanjivaram Silk Saree', 
			price: 1900, 
			image: Img26
		},
		{ id: 27, 
			name: 'Floral-printed Cotton Saree', 
			price: 500, 
			image: Img27
		},
		{ id: 7, 
		name: 'Necklace', 
		price: 150, 
		image: Img7
		},
		{ id: 13, 
		name: 'Ring (White Stone)', 
		price: 300, 
		image: Img13
		},
		{ id: 8, 
		name: 'Bracelet', 
		price: 100, 
		image: Img8
		},
		{ id: 14, 
		name: 'Necklace (Sapphire Stone)', 
		price: 500, 
		image: Img14
		},
		{ id: 9, 
		name: 'Earing', 
		price: 300, 
		image: Img9
		},
		{ id: 15, 
		name: ' Necklace Set', 
		price: 799, 
		image: Img15
		},
		{ id: 28, 
			name: 'NIKE Royal Red - Shoe', 
			price: 2300, 
			image: Img28
		},
		{ id: 29, 
			name: 'Kids Wear - Shoe', 
			price: 500, 
			image: Img29
		},
		{ id: 30, 
			name: 'Pink Casual Shoe', 
			price: 600, 
			image: Img30
		},
		{ id: 10, 
		name: 'Dell Inspiron Laptop', 
		price: 59600, 
		image: Img10
		},
		{ id: 11, 
		name: 'HP Pavilon Laptop', 
		price: 67800, 
		image: Img11
		},
		{ id: 12, 
		name: 'Lenovo Idea-Pad', 
		price: 90900, 
		image: Img12
		},
		{ id: 16, 
		name: 'MacBook Air (M1 chip)', 
		price: 180000, 
		image: Img16
		},
		{ id: 17, 
		name: 'MacBook Pro with Retina Display', 
		price: 255000, 
		image: Img17
		},
		{ id: 18, 
		name: 'Asus Vivobook', 
		price: 70000, 
		image: Img18
		}
	]);

	const [cartItems, setCartItems] = useState([]);
	const [searchItem, setSearchItem] = useState('');

	const addItemToCartFunction = (item) => {
		const alreadyItems = cartItems
							.find(item => item.product.id === item.id);
		if (alreadyItems) {
			const latestCartUpdate = cartItems.map(item =>
				item.product.id === item.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartItems(latestCartUpdate);
		} else {
			setCartItems([...cartItems, {product: item, quantity: 1}]);
		}
	};

	const deleteItemFromCartFunction = (Item) => {
		const updatedCart = cartItems
							.filter(item => item.product.id !== Item.id);
		setCartItems(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartItems
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const itemSearchUserFunction = (event) => {
		setSearchItem(event.target.value);
	};

	const filterItemFunction = items.filter((item) =>
		item.name.toLowerCase().includes(searchItem.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchItem={searchItem} 
							itemSearchUserFunction=
								{itemSearchUserFunction} />
			<main className="App-main" id='home'>
				<ShowItemComponent
					items={items}
					filterItemFunction={filterItemFunction}
					addItemToCartFunction={addItemToCartFunction}
				/>
				
				<UserCartComponent
					cartItems={cartItems}
					deleteItemFromCartFunction={deleteItemFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartItems={setCartItems}
				/>
			
			</main>
			<button class="search-button" title="Search"><a href="#searchB"><strong>🔍</strong></a></button>
			<button class="back-button" title="Go to Home"><a href="#header"><strong>↪</strong></a></button>
			<button class="cart-button" title="See Cart Items"><a href="#cart"><strong>🛒</strong></a></button>
			<footer>
    <hr/>
    <div id="contact" align="center">
        <h2 id="ph1"><a href="mailto:athmikaubhat@gmail.com">Contact Us</a></h2>
        <table>
            <br />
            <tr>
                <td align="right top">Address :</td>
                <td>GHOST-The eCart,</td>
            </tr>
            <tr>
                <td><br /></td>
                <td>Sahyadri Building,</td>
            </tr>
            <tr>
                <td><br /></td>
                <td>Adyar, Mangalore,</td>
            </tr>
            <tr>
                <td><br/></td>
                <td>PIN : 575007.</td>
            </tr>
        </table>

    </div>
    </footer>
		</div>
	);
}

export default App;