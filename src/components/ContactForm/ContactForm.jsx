import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { contactsSelector } from 'store/contacts/selectors';
import { createContact } from 'store/contacts/contactsReducer';
import { getContactsThunk, updateContactsThunk } from 'store/contacts/actions';

export const ContactForm = () => {
  const [contactData, setContactData] = useState({ name: '', number: '' });
  const { contacts } = useSelector(contactsSelector);
  const createdContact = [
    ...contacts,
    { name: contactData.name, number: contactData.number, id: nanoid() },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const addContact = data => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${data.name} is already in your contacts.`);
      return;
    }

    dispatch(createContact(createdContact));
    dispatch(updateContactsThunk(contactData)).then(() => {
      dispatch(getContactsThunk());
    });
  };
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (
      (name === 'name' && !/^[A-Za-zА-Яа-яЁё\s]+$/.test(value)) ||
      (name === 'number' && isNaN(value))
    ) {
      return setContactData(prevState => ({
        ...prevState,
        [name]: '',
      }));
    }
    setContactData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name: contactData.name, number: contactData.number });
    setContactData({
      name: '',
      number: '',
    });
  };

  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className={css.title}>Name:</h2>
          <input
            className={css.input}
            type="text"
            name="name"
            value={contactData.name}
            onChange={handleChange}
          />
          <h2 className={css.title}>Number:</h2>
          <input
            className={css.input}
            type="text"
            name="number"
            value={contactData.number}
            onChange={handleChange}
          />
        </div>
        <button className={css.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
