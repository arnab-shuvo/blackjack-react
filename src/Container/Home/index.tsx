import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HomeContainer } from './styled';
import Header from './Header';
import ControllPanel from './ControlPanel';
import GamePanel from './GamePanel';

const Home: React.FC = () => {
	return (
		<HomeContainer>
			<Grid container justify={'center'} direction={'row'}>
				<Grid container item md={8}>
					<Grid item md={12}>
						<Header />
					</Grid>
					<Grid item md={12}>
						<ControllPanel />
					</Grid>
					<Grid item md={12}>
						<GamePanel />
					</Grid>
				</Grid>
			</Grid>
		</HomeContainer>
	);
};

export default Home;
