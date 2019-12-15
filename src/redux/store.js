import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import { persistStore} from 'redux-persist';

import rootReducer from './root-reducer';


const middlewares = [];

<<<<<<< HEAD
if (process.env.NODE_ENV === 'development')  {
=======
if (process.env.NODE_ENV == 'development')  {
>>>>>>> 90d2013ef6da94b10d99906c6feeaedeb2debeb6
middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default {store, persistor};