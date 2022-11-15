import {
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Quantity,
	Price,
	Arrow,
	Value,
	RemoveButton,
} from './checkout-item.styles.jsx';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
	const { name, quantity, price, imageUrl } = cartItem;

	const { removeItemFromCart, addItemToCart, clearItemFromCart } =
		useContext(CartContext);

	const removeItemHandler = () => removeItemFromCart(cartItem);

	const clearItemHandler = () => clearItemFromCart(cartItem);

	const addItemHandler = () => addItemToCart(cartItem);

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={name} />
			</ImageContainer>

			<Name>{name}</Name>

			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>

			<Price>${price}</Price>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
