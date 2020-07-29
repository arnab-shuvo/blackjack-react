import React from 'react';
import Button from '../../../../Component/Buttons';
import { useSelector, useDispatch } from 'react-redux';
import { hitUpdate } from '../../../../Store/Actions/DeckAction';
import CardDrawer from '../../../../utils/randomCard';
import { hitPlayerCards } from '../../../../Store/Actions/PlayerActions';
import scoreCalculator from '../../../../utils/scoreCalculator';
import winnerSelector from '../../../../utils/winnerSelector';
import { BREAKPOINT } from '../../../../Constants';
import { winner } from '../../../../Store/Actions/UtilityActions';

const Hit: React.FC = () => {
	const cardStore = useSelector((state: IStoreState) => state.cardStore);
	const playerCards = useSelector((state: IStoreState) => state.playerStore.cards);
	const dispatch = useDispatch();

	const hit = () => {
		const remainingCards = cardStore.remainingCards;
		const hitDraw = CardDrawer(1, remainingCards);
		const finalRemaining = hitDraw.remainingDeck;
		const hitCard = hitDraw.drawnCard;
		const playerCardsFinal = playerCards.concat(hitCard);
		const playerScoreFinal = scoreCalculator(playerCardsFinal);

		dispatch(hitUpdate(finalRemaining));
		dispatch(hitPlayerCards(playerCardsFinal));

		if (playerScoreFinal > BREAKPOINT) {
			const winnerData = {
				selected: true,
				message: winnerSelector(playerScoreFinal),
			};
			dispatch(winner(winnerData));
		}
	};
	return (
		<div className={'text-center'}>
			<Button variant={'secondary'} fontSize={30} onClick={hit}>
				Hit
			</Button>
		</div>
	);
};
export default Hit;
