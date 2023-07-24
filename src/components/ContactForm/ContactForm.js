import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContakts } from 'redux/selectors';

import css from './form.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContakts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;
    const newContact = {
      name: name.value,
      phone: number.value,
    };

    const nameValue = name.value;

    const allName = items.find(contact => contact.name === nameValue);

    if (allName) {
      return alert(`${nameValue} is already in contacts`);
    }

    dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.container}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.addContact}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
