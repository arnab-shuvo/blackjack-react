import { RESET, WINNER, PLAYER_SCORE, DEALER_SCORE, BLACK_JACK, STICK_BLACK_JACK, RESET_UTILITY } from '../actionsTypes';

const initialState = {
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

export const storePlayerScore = (score: number) => {
	return {
		type: PLAYER_SCORE,
		payload: score,
	};
};

export const storeDealerScore = (score: number) => {
	return {
		type: DEALER_SCORE,
		payload: score,
	};
};

export const reset = (reset: boolean) => {
	return {
		type: RESET,
		payload: reset,
	};
};
export const winner = (winner: IWinner) => {
	return {
		type: WINNER,
		payload: winner,
	};
};
export const blackJack = () => {
	return {
		type: BLACK_JACK,
		payload: true,
	};
};
export const stickBlackJack = () => {
	return {
		type: STICK_BLACK_JACK,
		payload: true,
	};
};
export const resetUtility = () => {
	return {
		type: RESET_UTILITY,
		payload: initialState,
	};
};
