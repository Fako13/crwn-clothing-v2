import { createContext, useState } from 'react';

export const CartContext = createContext({
	isCartOpened: false,
	setIsCartOpened: () => null,
	// items: [],
	// setItems: () => null,
});

export const CartProvider = ({ children }) => {
	// const [items, setItems] = useState([]);
	const [isCartOpened, setIsCartOpened] = useState(false);
	const value = { isCartOpened, setIsCartOpened };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
