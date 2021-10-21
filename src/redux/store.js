import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import PhoneBookReducer from './phonebook/phonebook-reducer';

const rootReducer = combineReducers({
  phoneBook: PhoneBookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
