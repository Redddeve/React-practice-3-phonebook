import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Wrapper } from 'styles/App.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    if (name === '') {
      e.currentTarget.reset();
      return;
    }

    this.updateContact(name, number);
    e.currentTarget.reset();
  };

  onFormInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value.trim(),
    });
  };

  onFilterInput = e => {
    const { value } = e.target;
    this.setState({
      filter: value.trim(),
    });
  };

  updateContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
    }));
  };

  filterData = (data, filter) => {
    return data.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredData = this.filterData(
      this.state.contacts,
      this.state.filter
    );
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} onFormInput={this.onFormInput} />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList
          contacts={filteredData}
          onFilterInput={this.onFilterInput}
        />
      </Wrapper>
    );
  }
}
