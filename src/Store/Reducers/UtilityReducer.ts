import { RESET, WINNER, PLAYER_SCORE, DEALER_SCORE } from '../actionsTypes';

const INITIAL_STATE: IUtilityReducer = {
	reset: false,
	winner: {
		selected: false,
		message: '',
	},
	playerScore: 0,
	dealerScore: 0,
};

const UtilityReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case PLAYER_SCORE:
			return { ...state, playerScore: action.payload };
		case DEALER_SCORE:
			return { ...state, dealerScore: action.payload };
		case RESET:
			return { ...state, reset: action.payload };
		case WINNER:
			return { ...state, winner: action.payload };
		default:
			return state;
	}
};

export default UtilityReducer;
