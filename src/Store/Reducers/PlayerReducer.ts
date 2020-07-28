import { STORE_PLAYER, HIT_PLAYER } from '../actionsTypes';

const INITIAL_STATE: IIndividualCardRecucer = {
	cards: [],
};

const CardReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case STORE_PLAYER:
			return { ...state, ...action.payload };
		case HIT_PLAYER:
			return { ...state, cards: [...state.cards, action.payload] };
		default:
			return state;
	}
};

export default CardReducer;
