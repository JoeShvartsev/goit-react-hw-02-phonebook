import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={styles["contact-list"]}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles["contact-item"]}>
            {contact.name}: {contact.number}
            <button
              className={styles["delete-btn"]}
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
