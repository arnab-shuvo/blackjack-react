import { breakPoint, highPointForAce, lowPointForAce, pointForCharacterCard } from '../Constants';
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
			if (total + highPointForAce > breakPoint) {
				return lowPointForAce;
			} else {
				return highPointForAce;
			}
		} else {
			return pointForCharacterCard;
		}
	} else {
		return cardValue;
	}
};
