import { STORE_DEALER, STICK_DEALER } from '../actionsTypes';

const INITIAL_STATE: IIndividualCardRecucer = {
	cards: [],
};

const CardReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case STORE_DEALER:
			return { ...state, ...action.payload };
		case STICK_DEALER:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default CardReducer;
