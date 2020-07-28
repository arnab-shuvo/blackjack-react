import React, { useEffect, useCallback } from 'react';
import Home from './Container/Home';
import { useDispatch, useSelector } from 'react-redux';
import CardDeckGenerator from './utils/cardGenerator';
import CardDrawer from './utils/randomCard';
import { storeFirstCards } from './Store/Actions/DeckAction';
import { storePlayerCards } from './Store/Actions/PlayerActions';
import { storeDealerCards } from './Store/Actions/DealerActions';
import { reset } from './Store/Actions/UtilityActions';
import { winner } from './Store/Actions/UtilityActions';

function App() {
	const utilityStore = useSelector((state: IStoreState) => state.utilityStore);
	const dispatch = useDispatch();

	const loadGame = useCallback(() => {
		console.log('111111111');
		const winnerData = {
			selected: false,
			message: '',
		};
		const cardDeck = CardDeckGenerator();
		const allCards = cardDeck.filter((a) => a);
		const firstDraw = CardDrawer(2, cardDeck);
		const secondDraw = CardDrawer(1, firstDraw.remainingDeck);
		const finalRemaining = secondDraw.remainingDeck;

		dispatch(winner(winnerData));
		dispatch(storeFirstCards(allCards, finalRemaining));
		dispatch(storePlayerCards(firstDraw.drawnCard));
		dispatch(storeDealerCards(secondDraw.drawnCard));
	}, [dispatch]);

	useEffect(() => {
		console.log('start');
		loadGame();
	}, [dispatch, loadGame]);

	useEffect(() => {
		if (utilityStore.reset) {
			console.log('reset');
			loadGame();
			dispatch(reset(false));
		}
	}, [utilityStore, dispatch, loadGame]);
	console.log('loader');
	return <Home />;
}

export default App;
