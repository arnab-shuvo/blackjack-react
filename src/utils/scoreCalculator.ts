import { BREAKPOINT, HIGH_POINT_FOR_ACE, LOW_POINT_FOR_ACE, POINT_FOR_CHARACTER_CARD } from '../Constants';
export default (cards: ICardDeck) => {
	let total = 0;
	cards.forEach((card: ICard) => {
		const point = ScoreDeterminer(card.value, total);
		total += point;
	});
	return total;
};

export const ScoreDeterminer = (cardValue: string | number, total: number) => {
	if (typeof cardValue === 'string') {
		if (cardValue === 'A') {
			if (total + HIGH_POINT_FOR_ACE > BREAKPOINT) {
				return LOW_POINT_FOR_ACE;
			} else {
				return HIGH_POINT_FOR_ACE;
			}
		} else {
			return POINT_FOR_CHARACTER_CARD;
		}
	} else {
		return cardValue;
	}
};
