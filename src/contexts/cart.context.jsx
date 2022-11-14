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

const removeCartItem = (cartItems, cartItemToRemove) => {
	//find cartItem exist
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
	isCartOpened: false,
	setIsCartOpened: () => null,
	addItemToCart: () => null,
	cartItems: [],
	cartCount: 0,
	removeItemFromCart: () => null,
	clearItemFromCart: () => null,
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [isCartOpened, setIsCartOpened] = useState(false);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity;
		}, 0);

		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newCartTotal = cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity * cartItem.price;
		}, 0);

		setCartTotal(newCartTotal);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const clearItemFromCart = (cartItemToClear) => {
		setCartItems(clearCartItem(cartItems, cartItemToClear));
	};

	const value = {
		isCartOpened,
		setIsCartOpened,
		addItemToCart,
		cartItems,
		cartCount,
		removeItemFromCart,
		clearItemFromCart,
		cartTotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
