import css from './contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'store/operations';
import { selectContacts } from 'store/selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
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
