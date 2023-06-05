import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer'; // Вам нужно импортировать свои редюсеры здесь

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
