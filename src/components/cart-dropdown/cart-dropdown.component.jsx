import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './cart-dropdown.styles.jsx';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
	const { cartItems, setIsCartOpened } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
		setIsCartOpened(false);
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>You cart is empty</EmptyMessage>
				)}
			</CartItems>

			<Button onClick={goToCheckoutHandler}>Go to checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
