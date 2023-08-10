import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from "./App.module.css";


export const App = () => {
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter/>
      <ContactList />
    </div>
  );
};







// import React, { useState,useEffect} from "react";
// import { nanoid } from "nanoid";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { ContactList } from "./ContactList/ContactList";
// import { Filter } from "./Filter/Filter";
// import css from "./App.module.css";
// import PropTypes from "prop-types";

// export const App = () => {
//   const [filter, setFilter] = useState("");
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     const localData = localStorage.getItem("contact");
//     if (localData) {
//       setContacts(JSON.parse(localData));
//     }
//   }, []);
  
//   useEffect(() => {
//     if (contacts.length > 0) {
//       localStorage.setItem("contact", JSON.stringify(contacts));
//     }
//   }, [contacts]);

//   const addData = (data) => {
//     const isDuplicate = contacts.some(
//       (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
//     );

//     if (isDuplicate) {
//       alert(`${data.name} is already in your contacts.`);
//       return;
//     }

//     const newContact = {
//       id: nanoid(),
//       ...data,
//     };

//     setContacts((prevState) => [...prevState, newContact]);
//   };

//   const onContactFilter = (e) => setFilter(e.currentTarget.value);

//   const deleteContact = (contactID) => {
//     setContacts((prevState) => prevState.filter((contact) => contact.id !== contactID));
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm addData={addData} />

//       <h2 className={css.title}>Contacts</h2>
//       <Filter searchQuery={filter} handleSearchChange={onContactFilter} />
//       <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
//     </div>
//   );
// };

// App.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   filter: PropTypes.string,
// };







