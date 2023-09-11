import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './ContactForm.styled';

const ContactForm = ({ onSubmit, onFormInput }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>

      <input
        type="text"
        name="name"
        id="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onFormInput}
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        id="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onFormInput}
      />
      <button type="submit">Add contact</button>
    </StyledForm>
  );
};
// class ContactForm extends Component {
//   state = {
//     number: '',
//   };
// }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFormInput: PropTypes.func.isRequired,
};

export default ContactForm;
