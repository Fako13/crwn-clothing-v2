// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
	CartIconContainer,
	ItemCount,
	ShoppingIcon,
} from './cart-icon.styles.jsx';

const CartIcon = () => {
	const { isCartOpened, setIsCartOpened, cartCount } = useContext(CartContext);

	const toggleCartOpened = () => {
		setIsCartOpened(!isCartOpened);
	};

	return (
		<CartIconContainer onClick={toggleCartOpened}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
