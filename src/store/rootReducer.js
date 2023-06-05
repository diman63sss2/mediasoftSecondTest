import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Импортируйте ваши редюсеры здесь

const rootReducer = combineReducers({
  user: userReducer,
  // Другие редюсеры
});

export default rootReducer;
