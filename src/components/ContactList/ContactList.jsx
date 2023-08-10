import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'store/contacts/contactsReducer';
import { contactsSelector } from 'store/contacts/selectors';
import { filterSelectors } from 'store/filter/selectors';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const {contacts} = useSelector(contactsSelector)
  const {filter} = useSelector(filterSelectors)
  
  const dispatch = useDispatch();

  const deleteContact = contactID => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactID);
    dispatch(createContact(updatedContacts));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={styles['contact-list']}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={styles['contact-item']}>
            {contact.name}: {contact.number}
            <button
              className={styles['delete-btn']}
              onClick={() => {
                deleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};



