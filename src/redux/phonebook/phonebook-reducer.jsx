import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phoonebook-actions';
import { FaBan } from 'react-icons/fa';
import toast from 'react-hot-toast';

const initialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];

const contacts = createReducer(initialState, {
  [actions.onSubmitForm]: (state, { payload }) => {
    if (state !== []) {
      const contactsName = state.map(contact => contact.name);
      if (contactsName.includes(payload.name)) {
        toast.error(`You already have ${payload.name} in your contacts!`, {
          icon: <FaBan fill="red" />,
        });
        return state;
      }
    }

    toast.success(`${payload.name} added to your contacts!`);
    window.localStorage.setItem(
      'contacts',
      JSON.stringify([...state, payload]),
    );
    return [...state, payload];
  },

  [actions.deleteContact]: (state, { payload }) => {
    window.localStorage.setItem(
      'contacts',
      JSON.stringify(state.filter(contact => contact.id !== payload.id)),
    );

    toast.success(`${payload.name} removed from your contacts`);
    return state.filter(contact => contact.id !== payload.id);
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
