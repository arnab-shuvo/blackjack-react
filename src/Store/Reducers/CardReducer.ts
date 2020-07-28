import { STORE_DECK, UPDATE_REMAINING_DECK } from '../actionsTypes';

const INITIAL_STATE: ICardRecucer = {
	cards: [],
	remainingCards: [],
};

const CardReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case STORE_DECK:
			return { ...state, ...action.payload };
		case UPDATE_REMAINING_DECK:
			return { ...state, remainingCards: action.payload };
		default:
			return state;
	}
};

export default CardReducer;
