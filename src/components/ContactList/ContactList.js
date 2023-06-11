import css from './contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'store/operations';
import { selectContacts, selectFilter } from 'store/selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const contactsFilter = contacts.filter(item =>
    item.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <ul>
      {contactsFilter.map(({ id, name, phone }) => (
        <li className={css.contactsItem} key={id}>
          {name} : {phone}
          <button
            className={css.btnBlockItem}
            type="submit"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
