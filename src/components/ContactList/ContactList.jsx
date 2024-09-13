import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const query = useSelector(state => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  //   всередині ліста мепаємо початковий масив контактів, малюємо лішку з ключем
  // в Contact пропсом кидаємо ітерований обʼєкт масиву
  // onDelete просто передається далі в Contact
  return (
    <div>
      {contacts.length === 0 ? (
        <p className={css.warning}>You have no contacts yet!</p>
      ) : filteredContacts.length === 0 ? (
        <p className={css.warning}>
          There are no contacts matching your query!
        </p>
      ) : (
        <ul className={css.list}>
          {filteredContacts.map(contact => (
            <li
              key={contact.id}
              className={`${css.item} animate__animated animate__fadeInUp`}
            >
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
