import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Logo } from './styled';

const Header: React.FC = () => {
	return (
		<Grid container justify={'center'}>
			<Grid item md={6}>
				<Logo>BlackJack</Logo>
			</Grid>
		</Grid>
	);
};

export default Header;
