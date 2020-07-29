import { getRandomInt } from './randomCard';
import { ScoreDeterminer } from './scoreCalculator';
import { BREAKPOINT } from '../Constants';

export default (dealerScore: number, playerScore: number, deck: ICardDeck) => {
	let drawnCards: IDrawnCardFromFunction = {
		remainingDeck: [],
		drawnCard: [],
	};
	let score = dealerScore;
	for (let i = 0; i < deck.length; i++) {
		if (score <= BREAKPOINT && score <= playerScore) {
			const indexOfCard = getRandomInt(deck.length - 1);
			const drawnCard = deck.splice(indexOfCard, 1);
			let cardScore = ScoreDeterminer(drawnCard[0].value, score);
			score += cardScore;
			drawnCards.drawnCard.push(drawnCard[0]);
		}
	}
	drawnCards.remainingDeck = deck;
	return drawnCards;
};
