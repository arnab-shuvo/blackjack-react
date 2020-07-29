import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Cards from '../../../../Component/Card';
import { useSelector, useDispatch } from 'react-redux';
import { GameSideWrapper } from './styled';
import ScoreCalculator from '../../../../utils/scoreCalculator';
import { storePlayerScore, blackJack } from '../../../../Store/Actions/UtilityActions';
import { BREAKPOINT } from '../../../../Constants';

const PlayersCard: React.FC = () => {
	const [score, setScore] = useState<number>(0);
	const playerCards = useSelector((state: IStoreState) => state.playerStore.cards);
	const dispatch = useDispatch();

	useEffect(() => {
		const newScore = ScoreCalculator(playerCards);
		dispatch(storePlayerScore(newScore));
		if (playerCards.length === 2 && newScore === BREAKPOINT) {
			dispatch(blackJack());
		}
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
