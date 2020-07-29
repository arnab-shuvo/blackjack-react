import { CARD_MARKER, CARD_VALUE } from '../Constants/index';
export default () => {
	let cards: ICardDeck = [];
	for (let i = 0; i < CARD_MARKER.length; i++) {
		for (let j = 0; j < CARD_VALUE.length; j++) {
			cards.push({ value: CARD_VALUE[j], marker: CARD_MARKER[i] });
		}
	}

	return cards;
};
