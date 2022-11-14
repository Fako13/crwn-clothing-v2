import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
	const { isCartOpened, setIsCartOpened, cartCount } = useContext(CartContext);

	const toggleCartOpened = () => {
		setIsCartOpened(!isCartOpened);
	};

	return (
		<div onClick={toggleCartOpened} className="cart-icon-container">
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;
