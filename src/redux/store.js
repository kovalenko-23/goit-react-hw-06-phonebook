import { configureStore } from '@reduxjs/toolkit';
import PhoneBookReducer from './phonebook/phonebook-reducer';

const store = configureStore({
  reducer: {
    phoneBook: PhoneBookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
