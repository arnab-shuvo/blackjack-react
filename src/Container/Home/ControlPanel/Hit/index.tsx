import React from 'react';
import Button from '../../../../Component/Buttons';
import { useSelector, useDispatch } from 'react-redux';
import { hitUpdate } from '../../../../Store/Actions/DeckAction';
import CardDrawer from '../../../../utils/randomCard';
import { hitPlayerCards } from '../../../../Store/Actions/PlayerActions';

const Hit: React.FC = () => {
	const cardStore = useSelector((state: IStoreState) => state.cardStore);
	const dispatch = useDispatch();

	const hit = () => {
		const remainingCards = cardStore.remainingCards;
		const hitDraw = CardDrawer(1, remainingCards);
		const finalRemaining = hitDraw.remainingDeck;
		const hitCard = hitDraw.drawnCard;
		dispatch(hitUpdate(finalRemaining));
		dispatch(hitPlayerCards(hitCard[0]));
	};
	return (
		<div className={'text-center'}>
			<Button variant={'secondary'} fontSize={25} onClick={hit}>
				Hit
			</Button>
		</div>
	);
};
export default Hit;
