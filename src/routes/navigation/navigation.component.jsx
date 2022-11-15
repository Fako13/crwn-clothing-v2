import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utlils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {
	NavigationContainer,
	NavLinks,
	NavLink,
	LogoContainer,
} from './navigation.styles.jsx';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpened } = useContext(CartContext);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<CrwnLogo className="logo">Logo</CrwnLogo>
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">Shop</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							Sign Out
						</NavLink>
					) : (
						<NavLink to="/auth">Sign In</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpened && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
