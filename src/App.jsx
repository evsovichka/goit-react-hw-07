import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="box">
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 1 && <SearchBox />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

export default App;
