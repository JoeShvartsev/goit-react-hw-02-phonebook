import React from "react";
import PropTypes from "prop-types";
import css from "./Filter.module.css";

export const Filter = ({ searchQuery, handleSearchChange }) => {
  return (
    <div className={css.container}>
      <h5 className={css.title}>Find contacts by name:</h5>
      <input
        className={css.input}
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

Filter.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};
