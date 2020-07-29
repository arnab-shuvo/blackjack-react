import React, { useEffect, useCallback } from 'react';
import Home from '../Container/Home';
import { useDispatch, useSelector } from 'react-redux';
import CardDeckGenerator from '../utils/cardGenerator';
import CardDrawer from '../utils/randomCard';
import { storeFirstCards } from '../Store/Actions/DeckAction';
import { storePlayerCards } from '../Store/Actions/PlayerActions';
import { storeDealerCards } from '../Store/Actions/DealerActions';
import { reset } from '../Store/Actions/UtilityActions';
import { winner, resetUtility } from '../Store/Actions/UtilityActions';

const App = () => {
	const isReset = useSelector((state: IStoreState) => state.utilityStore.reset);
	const dispatch = useDispatch();

	const loadGame = useCallback(() => {
		const winnerData = {
			selected: false,
			message: '',
		};
		const cardDeck = CardDeckGenerator();
		const allCards = cardDeck.filter((a) => a);
		const firstDraw = CardDrawer(2, cardDeck);
		const secondDraw = CardDrawer(2, firstDraw.remainingDeck);
		const finalRemaining = secondDraw.remainingDeck;

		dispatch(winner(winnerData));
		dispatch(storeFirstCards(allCards, finalRemaining));
		dispatch(storePlayerCards(firstDraw.drawnCard));
		dispatch(storeDealerCards(secondDraw.drawnCard));
		dispatch(resetUtility());
	}, [dispatch]);

	useEffect(() => {
		loadGame();
	}, [loadGame]);

	useEffect(() => {
		if (isReset) {
			loadGame();
			dispatch(reset(false));
		}
	}, [isReset, dispatch, loadGame]);

	return <Home />;
};

export default App;
