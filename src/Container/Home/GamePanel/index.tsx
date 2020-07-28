import React from 'react';
import Grid from '@material-ui/core/Grid';
import { GamepanelContainer } from './styled';
import PlayersCard from './PlayersCard';
import DealersCard from './DealersCard';

const GamePanel: React.FC = () => {
	return (
		<GamepanelContainer>
			<Grid container justify={'center'} alignItems='flex-start'>
				<Grid item md={6}>
					<PlayersCard />
				</Grid>
				<Grid item md={6}>
					<DealersCard />
				</Grid>
			</Grid>
		</GamepanelContainer>
	);
};

export default GamePanel;
