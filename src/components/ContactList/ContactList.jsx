import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import style from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul className={style.contactList}>
      {filterContacts.map((contact) => {
        return (
          <li className={style.contactItem} key={contact.id}>
            {<Contact contact={contact} />}
          </li>
        );
      })}
    </ul>
  );
}
