import css from './list.module.css';

import { selectContakts, selectStatusFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const { items } = useSelector(selectContakts);
  const dispatch = useDispatch();

  const filterQvery = useSelector(selectStatusFilter);

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
  console.log(oneContact);
  console.log(items);

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
