import { RESET, WINNER, PLAYER_SCORE, DEALER_SCORE } from '../actionsTypes';

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
