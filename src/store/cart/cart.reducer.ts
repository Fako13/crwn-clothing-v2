import { AnyAction } from 'redux';

import { setCartItems, setIsCartOpened } from './cart.action';
import { CartItem } from './cart.types';

export type CartState = {
	readonly cartItems: CartItem[];
	readonly isCartOpened: boolean;
};

const CART_INITIAL_STATE: CartState = {
	isCartOpened: false,
	cartItems: [],
};

export const cartReducer = (
	state = CART_INITIAL_STATE,
	action: AnyAction
): CartState => {
	if (setCartItems.match(action)) {
		return {
			...state,
			cartItems: action.payload,
		};
	}
	if (setIsCartOpened.match(action)) {
		return {
			...state,
			isCartOpened: action.payload,
		};
	}

	return state;
};
