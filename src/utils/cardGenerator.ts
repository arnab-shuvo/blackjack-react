import { cardMarker, cardValue } from '../Constants/index';
export default () => {
	let cards: ICardDeck = [];
	for (let i = 0; i < cardMarker.length; i++) {
		for (let j = 0; j < cardValue.length; j++) {
			cards.push({ value: cardValue[j], marker: cardMarker[i] });
		}
	}

	return cards;
};
