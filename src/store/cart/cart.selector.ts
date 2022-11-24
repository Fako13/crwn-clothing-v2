import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';

const selectCartReducer = (state): CartState => {
	//get state all stote and get state cart
	return state.cart;
};

export const selectCartIsOpen = createSelector(
	[selectCartReducer],
	(cart) => cart.isCartOpened
);

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems
);

export const selectCartCount = createSelector(
	[selectCartItems],
	(cartItems): number =>
		cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity;
		}, 0)
);

export const selectCartTotal = createSelector(
	[selectCartItems],
	(cartItems): number =>
		cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity * cartItem.price;
		}, 0)
);
