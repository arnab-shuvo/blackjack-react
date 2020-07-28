import { STORE_DECK, UPDATE_REMAINING_DECK } from '../actionsTypes';

export const storeFirstCards = (cards: ICardDeck, remainingCards: ICardDeck) => {
	return {
		type: STORE_DECK,
		payload: { cards, remainingCards },
	};
};

export const hitUpdate = (remainingCards: ICardDeck) => {
	return {
		type: UPDATE_REMAINING_DECK,
		payload: remainingCards,
	};
};
