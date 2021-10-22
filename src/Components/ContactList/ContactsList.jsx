import { useSelector, useDispatch } from 'react-redux';
import ContactsItem from '../ContactsItem/ContactsItem';
import { List } from './ContactList.styled';
import phoonebookActions from '../../redux/phonebook/phoonebook-actions';

const ContactsList = () => {
  const contacts = useSelector(state => state.phoneBook.contacts);
  const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();
  const deleteContact = (id, name) =>
    dispatch(phoonebookActions.deleteContact(id, name));

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter),
  );
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteButton={() => deleteContact(id, name)}
        />
      ))}
    </List>
  );
};

export default ContactsList;
