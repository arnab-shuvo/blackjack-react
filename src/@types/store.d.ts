interface IStoreState {
	cardStore: ICardRecucer;
	playerStore: IIndividualCardRecucer;
	dealerStore: IIndividualCardRecucer;
	utilityStore: IUtilityReducer;
}
interface ICardRecucer {
	cards: cards[];
	remainingCards: cards[];
}

type cards = {
	value: number | string;
	marker: string;
};

interface IIndividualCardRecucer {
	cards: cards[];
}

interface IUtilityReducer {
	reset: boolean;
	winner: IWinner;
	playerScore: number;
	dealerScore: number;
}

interface IWinner {
	selected: boolean;
	message: string;
}
