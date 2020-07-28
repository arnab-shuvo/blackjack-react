export default (numberOfCards: number, deck: ICardDeck) => {
	let drawnCards: IDrawnCardFromFunction = {
		remainingDeck: [],
		drawnCard: [],
	};
	if (numberOfCards > 0) {
		for (let i = 0; i < numberOfCards; i++) {
			const indexOfCard = getRandomInt(deck.length - 1);
			const drawnCard = deck.splice(indexOfCard, 1);
			drawnCards.drawnCard.push(drawnCard[0]);
		}
	}
	drawnCards.remainingDeck = deck;
	return drawnCards;
};

export const getRandomInt = (max: number) => {
	return Math.floor(Math.random() * Math.floor(max));
};
