import { STORE_DEALER, STICK_DEALER } from '../actionsTypes';

export const storeDealerCards = (cards: ICardDeck) => {
	return {
		type: STORE_DEALER,
		payload: { cards },
	};
};
export const stickDealerCards = (cards: ICardDeck) => {
	return {
		type: STICK_DEALER,
		payload: { cards },
	};
};
