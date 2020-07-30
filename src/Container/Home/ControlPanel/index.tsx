import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hit from './Hit';
import Stick from './Stick';
import Reset from './Reset';
import { ControlPanelContainer } from './styled';
import { useSelector } from 'react-redux';
import { WINNING_MESSAGE } from '../../../Constants';

const ControlPanel: React.FC = () => {
	const winner = useSelector((state: IStoreState) => state.utilityStore.winner);
	const blackJack = useSelector((state: IStoreState) => state.utilityStore.blackJack);

	return (
		<ControlPanelContainer>
			<Grid container justify={'center'}>
				<Grid item md={12}>
					<Reset />
				</Grid>
			</Grid>
			<div style={{ padding: '10px 0' }}>
				<Grid container justify={'center'}>
					<Grid item md={3} xs={12}>
						<Hit disabled={blackJack ? true : winner.selected} />
					</Grid>
					{winner.selected && (
						<Grid item md={6} xs={12}>
							<p className='text-center winner-message'>{winner.message}</p>
						</Grid>
					)}
					{blackJack && !winner.selected && (
						<Grid item md={6} xs={12}>
							<p className='text-center winner-message'>{WINNING_MESSAGE.BLACK_JACK}</p>
						</Grid>
					)}
					{!blackJack && !winner.selected && (
						<Grid item md={6} xs={12}>
							<p className='text-center winner-message'>{winner.message}</p>
						</Grid>
					)}

					<Grid item md={3} xs={12}>
						<Stick disabled={winner.selected ?? false} />
					</Grid>
				</Grid>
			</div>
		</ControlPanelContainer>
	);
};

export default ControlPanel;
