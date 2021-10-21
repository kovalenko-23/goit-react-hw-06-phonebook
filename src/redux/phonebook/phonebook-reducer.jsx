import { combineReducers } from 'redux';
import types from './phonebook-types';
import { FaBan } from 'react-icons/fa';
import toast from 'react-hot-toast';

const initialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];

const contacts = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ON_SUBMIT_FORM:
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

    case types.DELETE:
      window.localStorage.setItem(
        'contacts',
        JSON.stringify(state.filter(contact => contact.id !== payload.id)),
      );

      toast.success(`${payload.name} removed from your contacts`);
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.HANDLE_FINDER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
