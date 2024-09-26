import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "./redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
