import shortid from 'shortid';
import types from './phonebook-types';

const onSubmitForm = (name, number) => ({
  type: types.ON_SUBMIT_FORM,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = (id, name) => ({
  type: types.DELETE,
  payload: { id, name },
});

const changeFilter = event => ({
  type: types.HANDLE_FINDER,
  payload: event,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { onSubmitForm, deleteContact, changeFilter };
