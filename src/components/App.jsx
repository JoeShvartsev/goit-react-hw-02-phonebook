import React, { useState,useEffect} from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from "./App.module.css";
import PropTypes from "prop-types";

export const App = () => {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("contact");
    if (localData) {
      setContacts(JSON.parse(localData));
    }
  }, []);
  
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contact", JSON.stringify(contacts));
    }
  }, [contacts]);

  const addData = (data) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${data.name} is already in your contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      ...data,
    };

    setContacts((prevState) => [...prevState, newContact]);
  };

  const onContactFilter = (e) => setFilter(e.currentTarget.value);

  const deleteContact = (contactID) => {
    setContacts((prevState) => prevState.filter((contact) => contact.id !== contactID));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addData={addData} />

      <h2 className={css.title}>Contacts</h2>
      <Filter searchQuery={filter} handleSearchChange={onContactFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};




// import React, { Component } from "react";
// import { nanoid } from "nanoid";
// import PropTypes from "prop-types";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { ContactList } from "./ContactList/ContactList";
// import { Filter } from "./Filter/Filter";
// import css from "./App.module.css";

// export class App extends Component {
//   state = {
//     contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
//     filter: "",
//   };

//   static propTypes = {
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       })
//     ),
//     filter: PropTypes.string,
//   };
  
//   componentDidMount(){
//     const localData = localStorage.getItem('contact')
//     if(localData){
//       this.setState({contacts : JSON.parse(localData)})
//     }
//   }

//   componentDidUpdate(prevState){
//   if(prevState.contacts !== this.state.contacts)
//   localStorage.setItem('contact', JSON.stringify(this.state.contacts))
//   }

//   addData = (data) => {
//     const { contacts } = this.state;

//     const isDuplicate = contacts.some(
//       (contact) =>
//         contact.name.toLowerCase() === data.name.toLowerCase() 
      
//     );

//     if (isDuplicate) {
//       alert(`${data.name} is already in your contacts.`);
//       return;
//     }

//     const newContact = {
//       id: nanoid(),
//       ...data,
//     };

//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   onContactFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   deleteContact = (contactID) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== contactID),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const filteredContacts = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <div>
//         <h1 className={css.title}>Phonebook</h1>
//         <ContactForm addData={this.addData} />

//         <h2 className={css.title}>Contacts</h2>
//         <Filter searchQuery={filter} handleSearchChange={this.onContactFilter} />
//         <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
//       </div>
//     );
//   }
// }



