import { breakPoint, WINNING_MESSAGE } from '../Constants';

export default (playerScore: number, dealerScore?: number) => {
	let winnerMessage = '';
	if (dealerScore) {
		if (dealerScore > breakPoint) {
			winnerMessage = WINNING_MESSAGE.DEALER_EXCEED;
		} else {
			if (dealerScore > playerScore) {
				winnerMessage = WINNING_MESSAGE.DEALER_WIN;
			} else {
				winnerMessage = WINNING_MESSAGE.PLAYER_WIN;
			}
		}
	} else {
		if (playerScore > breakPoint) {
			winnerMessage = WINNING_MESSAGE.PLAYER_EXCEED;
		}
	}
	return winnerMessage;
};
