interface IHomeView {
	startNewGame: () => void;
	cards: ICardDeck;
	betAmount: number;
	setBet: (E: React.FormEvent<HTMLFormElement>) => void;
	playerCards: ICardDeck;
	wallet: number;
}

type IHomeViewProps = {
	props: IHomeView;
};
