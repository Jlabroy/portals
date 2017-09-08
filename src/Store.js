import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Reducer from './reducers';

const loggerMiddleware = createLogger()

const Store = preloadedState =>
    createStore(
        Reducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );

export default Store;
