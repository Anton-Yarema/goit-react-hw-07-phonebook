import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/operations';

import css from './contactForm.module.css';
import { selectContacts } from 'store/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name: event.target.elements.name.value,
      phone: event.target.elements.phone.value,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }
    if (contacts.find(contact => contact.phone === newContact.phone)) {
      return alert(`${newContact.phone} is already in contacts`);
    }

    dispatch(addContact(newContact));
    event.target.reset();
  };

  return (
    <form className={css.formGroup} onSubmit={handleSubmit}>
      <label className={css.formField}>
        Name
        <input
          className={css.formFieldInput}
          type="text"
          name="name"
         pattern="[A-Za-z\s]+"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.formField}>
        Number
        <input
          className={css.formFieldInput}
          type="tel"
          name="phone"
           pattern="[0-9\+\- ]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btnBlockItem} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
