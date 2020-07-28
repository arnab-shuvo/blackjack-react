import { STORE_PLAYER, HIT_PLAYER } from '../actionsTypes';

export const storePlayerCards = (cards: ICardDeck) => {
	return {
		type: STORE_PLAYER,
		payload: { cards },
	};
};
export const hitPlayerCards = (cards: ICard) => {
	return {
		type: HIT_PLAYER,
		payload: cards,
	};
};
