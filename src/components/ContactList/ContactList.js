import css from './list.module.css';

import { getContakts, getStatusFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const { items } = useSelector(getContakts);
  console.log(items);

  const filterQvery = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const toDelete = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredElement = filterQvery => {
    if (filterQvery) {
      const oneContact = items.filter(contact =>
        contact.name
          .toLowerCase()
          .includes(filterQvery.toLowerCase().toString())
      );
      return oneContact;
    }
    return items;
  };
  const oneContact = getFilteredElement(filterQvery);

  return (
    <ul className={css.list}>
      {oneContact.map(contact => (
        <li key={contact.id} className={css.li}>
          {contact.name}: {contact.number}{' '}
          <button onClick={() => toDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
