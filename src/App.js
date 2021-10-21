import { connect } from 'react-redux';
import phoonebookActions from './redux/phonebook/phoonebook-actions';
import { Toaster } from 'react-hot-toast';
import styled from '@emotion/styled';
import ContactsForm from './Components/ContactsForm/ContactsForm';
import ContactsList from './Components/ContactList/ContactsList';
import { ContactsFilter } from './Components/ContactsFilter/ContactsFilter';

const Wrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export function App({
  contacts,
  filter,
  handleOnSubmitForm,
  hendleFinder,
  deleteContact,
}) {
  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter),
  );

  return (
    <Wrapper>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={handleOnSubmitForm} />
      <h2>Contacts</h2>
      <ContactsFilter value={filter} onChange={hendleFinder} />
      <ContactsList
        contacts={getVisibleContacts}
        onDeleteButton={deleteContact}
      />
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  contacts: state.phoneBook.contacts,
  filter: state.phoneBook.filter,
});

const mapDispatchToProps = dispatch => ({
  handleOnSubmitForm: (name, number) =>
    dispatch(phoonebookActions.onSubmitForm(name, number)),
  hendleFinder: e =>
    dispatch(phoonebookActions.changeFilter(e.currentTarget.value)),
  deleteContact: (id, name) =>
    dispatch(phoonebookActions.deleteContact(id, name)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
