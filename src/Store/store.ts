import { createStore, combineReducers, compose } from 'redux';
import CardReducer from './Reducers/CardReducer';
import PlayerReducer from './Reducers/PlayerReducer';
import DealerReducer from './Reducers/DealerReducer';
import UtilityReducer from './Reducers/UtilityReducer';

const rootReducer = combineReducers<IStoreState>({
	cardStore: CardReducer,
	playerStore: PlayerReducer,
	dealerStore: DealerReducer,
	utilityStore: UtilityReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
