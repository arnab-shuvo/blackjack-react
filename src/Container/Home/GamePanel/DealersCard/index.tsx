import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Cards from '../../../../Component/Card';
import { GameSideWrapper } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import ScoreCalculator from '../../../../utils/scoreCalculator';
import { storeDealerScore } from '../../../../Store/Actions/UtilityActions';

const DealersCard: React.FC = () => {
	const [score, setScore] = useState<number>(0);
	const dealerStore = useSelector((state: IStoreState) => state.dealerStore);
	const dispatch = useDispatch();

	useEffect(() => {
		const newScore = ScoreCalculator(dealerStore.cards);
		dispatch(storeDealerScore(newScore));
		setScore(newScore);
	}, [dealerStore.cards, dispatch]);

	return (
		<GameSideWrapper>
			<p className='panel-header'>Dealer's Cards</p>
			<p className='panel-score'>Dealer's Score : {score}</p>
			<Grid container justify={'center'} alignItems={'center'}>
				{dealerStore.cards.map((card: cards, index: number) => {
					return (
						<Grid key={index} item md={6}>
							<Cards value={card.value} marker={card.marker} />
						</Grid>
					);
				})}
				{dealerStore.cards.length === 1 && (
					<Grid item md={6}>
						<Cards value={''} marker={''} />
					</Grid>
				)}
			</Grid>
		</GameSideWrapper>
	);
};

export default DealersCard;
