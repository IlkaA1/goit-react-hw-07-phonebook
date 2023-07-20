import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import css from './app.module.css';
// import { getError, getIsLoading } from 'redux/selectors';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations';
import { getContakts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContakts);

  console.log(items);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      <p>{items && <Filter />}</p>
      <div>
        {isLoading && !error && <b>Request in progress...</b>}
        {error && <p>{error}</p>}
        {items && <ContactList />}
      </div>
    </div>
  );
};

// JSON.stringify(items, null, 2)}
