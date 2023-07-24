import css from './list.module.css';

import { selectVisibleContact } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const list = useSelector(selectVisibleContact);
  const dispatch = useDispatch();
  const toDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {list.map(contact => (
        <li key={contact.id} className={css.li}>
          {contact.name}: <div className={css.phone}>{contact.phone}</div>
          <button onClick={() => toDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
