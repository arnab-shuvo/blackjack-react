import { RESET, WINNER, PLAYER_SCORE, DEALER_SCORE, BLACK_JACK, STICK_BLACK_JACK, RESET_UTILITY } from '../actionsTypes';

const INITIAL_STATE: IUtilityReducer = {
	reset: false,
	winner: {
		selected: false,
		message: '',
	},
	playerScore: 0,
	dealerScore: 0,
	blackJack: false,
	blackJackStick: false,
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
		case BLACK_JACK:
			return { ...state, blackJack: action.payload };
		case STICK_BLACK_JACK:
			return { ...state, blackJackStick: action.payload };
		case RESET_UTILITY:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default UtilityReducer;
