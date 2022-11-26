import {
	ProductCardContainer,
	Footer,
	Name,
	Price,
} from './product-card.styles';

import { useDispatch, useSelector } from 'react-redux';
import { FC } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CategoryItem } from '../../store/categories/categories.types';

type ProductProps = {
	product: CategoryItem;
};

const ProductCard: FC<ProductProps> = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => {
		dispatch(addItemToCart(cartItems, product));
	};

	return (
		<ProductCardContainer>
			<img alt={name} src={imageUrl} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
				onClick={addProductToCart}
				buttonType={BUTTON_TYPE_CLASSES.inverted}
			>
				Add to card
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
