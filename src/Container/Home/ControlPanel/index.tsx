import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hit from './Hit';
import Stick from './Stick';
import Reset from './Reset';
import { ControlPanelContainer } from './styled';
import { useSelector } from 'react-redux';

const ControlPanel: React.FC = () => {
	const winner = useSelector((state: IStoreState) => state.utilityStore.winner);
	return (
		<ControlPanelContainer>
			<Grid container justify={'center'}>
				<Grid item md={3}>
					<Reset />
				</Grid>
				{!winner.selected && (
					<>
						<Grid item md={3}>
							<Hit />
						</Grid>

						<Grid item md={3}>
							<Stick />
						</Grid>
					</>
				)}
				{winner.selected && (
					<Grid item md={6}>
						<p className='text-right winner-message'>{winner.message}</p>
					</Grid>
				)}
			</Grid>
		</ControlPanelContainer>
	);
};

export default ControlPanel;
