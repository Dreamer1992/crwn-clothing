import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import reducers from './reducers';

const middlewares = [logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
