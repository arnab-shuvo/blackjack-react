interface ICard {
	value: string | number;
	marker: string;
	back?: true;
}
type ICardDeck = ICard[];

interface IDrawnCardFromFunction {
	remainingDeck: ICardDeck;
	drawnCard: ICard[];
}
