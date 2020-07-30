import React from 'react';
import Button from '../../../../Component/Buttons';
import finalDraw from '../../../../utils/stickCardDrawer';
import { useSelector, useDispatch } from 'react-redux';
import { hitUpdate } from '../../../../Store/Actions/DeckAction';
import { stickDealerCards } from '../../../../Store/Actions/DealerActions';
import { winner, stickBlackJack } from '../../../../Store/Actions/UtilityActions';
import winnerSelector from '../../../../utils/winnerSelector';
import scoreCalculator from '../../../../utils/scoreCalculator';

const Hit: React.FC<IControl> = ({ disabled }) => {
	const cardStore = useSelector((state: IStoreState) => state.cardStore);
	const dealerScore = useSelector((state: IStoreState) => state.utilityStore.dealerScore);
	const playerScore = useSelector((state: IStoreState) => state.utilityStore.playerScore);
	const blackJack = useSelector((state: IStoreState) => state.utilityStore.blackJack);
	const dealerCards = useSelector((state: IStoreState) => state.dealerStore.cards);
	const playerCards = useSelector((state: IStoreState) => state.playerStore.cards);
	const dispatch = useDispatch();

	const blackJackCallBack = () => {
		const winnerData = {
			selected: true,
			message: winnerSelector(playerScore, dealerScore),
		};
		dispatch(stickBlackJack());
		dispatch(winner(winnerData));
	};

	const regStick = () => {
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
		dispatch(stickBlackJack());
		dispatch(hitUpdate(finalRemaining));
		dispatch(stickDealerCards(dealerCardsFinal));
		dispatch(winner(winnerData));
	};

	const stick = () => {
		if (blackJack && playerCards.length < 3) {
			blackJackCallBack();
		} else {
			regStick();
		}
	};

	return (
		<div className={'text-center'}>
			<Button disabled={disabled} variant={'legendary'} fontSize={30} onClick={stick}>
				Stick
			</Button>
		</div>
	);
};
export default Hit;
