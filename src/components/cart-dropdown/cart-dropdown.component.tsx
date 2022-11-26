import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './cart-dropdown.styles';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpened } from '../../store/cart/cart.action';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
		dispatch(setIsCartOpened(false));
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
