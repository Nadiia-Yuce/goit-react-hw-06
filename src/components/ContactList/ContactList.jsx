import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);

  //   всередині ліста мепаємо початковий масив контактів, малюємо лішку з ключем
  // в Contact пропсом кидаємо ітерований обʼєкт масиву
  // onDelete просто передається далі в Contact
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li
          key={contact.id}
          className={`${css.item} animate__animated animate__fadeInUp`}
        >
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
