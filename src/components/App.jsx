import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from "./App.module.css";
import Loader from "./Loader/Loader";
import { useSelector } from "react-redux";
import { contactsSelector } from 'store/contacts/selectors';

export const App = () => {
  const { isLoading } = useSelector(contactsSelector);
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter/>
      {isLoading&&<Loader/>}
      <ContactList />
    </div>
  );
};
