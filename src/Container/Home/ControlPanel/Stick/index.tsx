import React from 'react';
import Button from '../../../../Component/Buttons';
import finalDraw from '../../../../utils/stickCardDrawer';
import { useSelector, useDispatch } from 'react-redux';
import { hitUpdate } from '../../../../Store/Actions/DeckAction';
import { stickDealerCards } from '../../../../Store/Actions/DealerActions';
import { winner } from '../../../../Store/Actions/UtilityActions';
import winnerSelector from '../../../../utils/winnerSelector';
import scoreCalculator from '../../../../utils/scoreCalculator';

const Hit: React.FC = () => {
	const cardStore = useSelector((state: IStoreState) => state.cardStore);
	const dealerScore = useSelector((state: IStoreState) => state.utilityStore.dealerScore);
	const playerScore = useSelector((state: IStoreState) => state.utilityStore.playerScore);
	const dealerCards = useSelector((state: IStoreState) => state.dealerStore.cards);
	const dispatch = useDispatch();

	const stick = () => {
		const remainingCards = cardStore.remainingCards;
		const stickDraw = finalDraw(dealerScore, playerScore, remainingCards);
		const finalRemaining = stickDraw.remainingDeck;
		const stickCard = stickDraw.drawnCard;
		const dealerCardsFinal = dealerCards.concat(stickCard);
		const dealerScoreFinal = scoreCalculator(dealerCardsFinal);
		const winnerData = {
			selected: true,
			message: winnerSelector(playerScore, dealerScoreFinal),
		};
		dispatch(hitUpdate(finalRemaining));
		dispatch(stickDealerCards(dealerCardsFinal));
		dispatch(winner(winnerData));
	};

	return (
		<div className={'text-center'}>
			<Button variant={'legendary'} fontSize={25} onClick={stick}>
				Stick
			</Button>
		</div>
	);
};
export default Hit;
