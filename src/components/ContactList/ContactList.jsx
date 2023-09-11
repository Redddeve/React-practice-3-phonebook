import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { StyledList } from './ContactList.styled';

const ContactList = ({ contacts, onFilterInput }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" id="filter" onChange={onFilterInput} />
      <ul>
        {contacts.map(cont => (
          <StyledList key={cont.id} id={cont.id}>
            {console.log(cont.name)}
            {cont.name}: {cont.number}
          </StyledList>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {};

export default ContactList;
