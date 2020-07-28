import React from 'react';
import Grid from '@material-ui/core/Grid';

const Header: React.FC = () => {
	return (
		<Grid container justify={'center'}>
			<Grid item md={6}>
				<p style={{ fontSize: '50px', textAlign: 'center' }}>BlackJack</p>
			</Grid>
		</Grid>
	);
};

export default Header;
