import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Cards from '../../../../Component/Card';
import { useSelector, useDispatch } from 'react-redux';
import { GameSideWrapper } from './styled';
import ScoreCalculator from '../../../../utils/scoreCalculator';
import { storePlayerScore } from '../../../../Store/Actions/UtilityActions';

const PlayersCard: React.FC = () => {
	const [score, setScore] = useState<number>(0);
	const playerStore = useSelector((state: IStoreState) => state.playerStore);
	const playerCards = playerStore.cards;
	const dispatch = useDispatch();

	useEffect(() => {
		const newScore = ScoreCalculator(playerCards);
		dispatch(storePlayerScore(newScore));
		setScore(newScore);
	}, [playerCards, dispatch]);

	return (
		<GameSideWrapper>
			<p className='panel-header'>Your Cards</p>
			<p className='panel-score'>Your Score : {score}</p>
			<Grid container justify={'center'} alignItems={'center'}>
				{playerCards.map((card: cards, index: number) => {
					return (
						<Grid key={index} item md={1}>
							<Cards value={card.value} marker={card.marker} />
						</Grid>
					);
				})}
			</Grid>
		</GameSideWrapper>
	);
};

export default PlayersCard;
