import {
	CartIconContainer,
	ItemCount,
	ShoppingIcon,
} from './cart-icon.styles.jsx';

import { useDispatch, useSelector } from 'react-redux';

import {
	selectCartIsOpen,
	selectCartCount,
} from '../../store/cart/cart.selector';
import { setIsCartOpened } from '../../store/cart/cart.action';

const CartIcon = () => {
	const isCartOpened = useSelector(selectCartIsOpen);
	const cartCount = useSelector(selectCartCount);
	const dispatch = useDispatch();

	const toggleCartOpened = () => {
		dispatch(setIsCartOpened(!isCartOpened));
	};

	return (
		<CartIconContainer onClick={toggleCartOpened}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
