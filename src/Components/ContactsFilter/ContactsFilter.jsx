import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Filterlabel, FilterInput } from './ContactsFilter.styled';
import phoonebookActions from '../../redux/phonebook/phoonebook-actions';

const ContactsFilter = () => {
  const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();
  const hendleFinder = value => dispatch(phoonebookActions.changeFilter(value));

  return (
    <Wrapper>
      <Filterlabel>
        Find
        <FilterInput
          type="text"
          name="message"
          value={filter}
          onChange={e => hendleFinder(e.currentTarget.value)}
        />
      </Filterlabel>
    </Wrapper>
  );
};

export default ContactsFilter;
