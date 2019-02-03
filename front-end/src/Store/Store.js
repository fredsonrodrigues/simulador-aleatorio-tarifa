import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers/';
import thunk from 'redux-thunk';

export default function Store() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}