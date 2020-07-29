import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Cards from '../../../../Component/Card';
import { GameSideWrapper } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import ScoreCalculator from '../../../../utils/scoreCalculator';
import { storeDealerScore } from '../../../../Store/Actions/UtilityActions';

const DealersCard: React.FC = () => {
	const [score, setScore] = useState<number>(0);
	const dealerStore = useSelector((state: IStoreState) => state.dealerStore);
	const stickBlackJack = useSelector((state: IStoreState) => state.utilityStore.blackJackStick);
	const dispatch = useDispatch();

	useEffect(() => {
		const newScore = ScoreCalculator(dealerStore.cards);
		dispatch(storeDealerScore(newScore));
		setScore(newScore);
	}, [dealerStore.cards, dispatch]);

	const scoreBoard = useCallback(() => {
		return dealerStore.cards.length === 2
			? stickBlackJack
				? ScoreCalculator(dealerStore.cards)
				: ScoreCalculator([dealerStore.cards[0]])
			: ScoreCalculator(dealerStore.cards);
	}, [dealerStore.cards, stickBlackJack]);

	useEffect(() => {
		const showScore = scoreBoard();
		setScore(showScore);
	}, [stickBlackJack, scoreBoard]);

	return (
		<GameSideWrapper>
			<p className='panel-header'>Dealer's Cards</p>
			<p className='panel-score'>Dealer's Score : {score}</p>
			<Grid container justify={'center'} alignItems={'center'}>
				{dealerStore.cards.map((card: cards, index: number) => {
					return (
						<React.Fragment key={index}>
							{dealerStore.cards.length === 2 && (
								<>
									{!stickBlackJack && index === 0 && (
										<Grid key={index} item md={1} xs={2}>
											<Cards value={card.value} marker={card.marker} />
										</Grid>
									)}
									{stickBlackJack && (
										<Grid key={index} item md={1} xs={2}>
											<Cards value={card.value} marker={card.marker} />
										</Grid>
									)}
								</>
							)}
							{dealerStore.cards.length !== 2 && (
								<Grid key={index} item md={1} xs={2}>
									<Cards value={card.value} marker={card.marker} />
								</Grid>
							)}
						</React.Fragment>
					);
				})}
				{dealerStore.cards.length === 2 && !stickBlackJack && (
					<Grid item md={1} xs={2}>
						<Cards value={''} marker={''} back />
					</Grid>
				)}
			</Grid>
		</GameSideWrapper>
	);
};

export default DealersCard;

// if (dealerStore.cards.length === 2) {
// 	console.log('length==2');
// 	if (index === 0) {
// 		console.log('index==0');

// 		return (
// 			<Grid key={index} item md={1}>
// 				<Cards value={card.value} marker={card.marker} />
// 			</Grid>
// 		);
// 	}
// } else {
// 	return (
// 		<Grid key={index} item md={1}>
// 			<Cards value={card.value} marker={card.marker} />
// 		</Grid>
// 	);
// }
