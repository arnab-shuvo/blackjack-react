interface ICard {
	value: string | number;
	marker: string;
}
type ICardDeck = ICard[];

interface IDrawnCardFromFunction {
	remainingDeck: ICardDeck;
	drawnCard: ICard[];
}
