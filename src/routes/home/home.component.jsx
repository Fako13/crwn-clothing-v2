import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
	return (
		<Fragment>
			<Outlet />
			<Directory />
		</Fragment>
	);
};

export default Home;
