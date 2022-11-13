import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
	//find cartItem exist
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	//if cartItem exist add quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	//else add cartItem with quantity 1
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
	isCartOpened: false,
	setIsCartOpened: () => null,
	cartItems: [],
	addItemToCart: () => null,
	cartCount: 0,
});

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [isCartOpened, setIsCartOpened] = useState(false);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity;
		}, 0);

		setCartCount(newCartCount);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const value = {
		isCartOpened,
		setIsCartOpened,
		addItemToCart,
		cartItems,
		cartCount,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
