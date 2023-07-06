import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from "./App.module.css";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  };

  addData = (data) => {
    const { contacts } = this.state;

    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === data.name.toLowerCase() 
      
    );

    if (isDuplicate) {
      alert(`${data.name} is already in your contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      ...data,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onContactFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = (contactID) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactID),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm addData={this.addData} />

        <h2 className={css.title}>Contacts</h2>
        <Filter searchQuery={filter} handleSearchChange={this.onContactFilter} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}



