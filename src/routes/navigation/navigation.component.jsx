import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utlils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpened } = useContext(CartContext);

	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrwnLogo className="logo">Logo</CrwnLogo>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
					{currentUser ? (
						<span onClick={signOutUser} className="nav-link">
							Sign Out
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							Sign In
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpened && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
