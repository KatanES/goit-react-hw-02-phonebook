import { Component } from 'react';
import { PhoneForm } from './Phonebook/PhoneForm';
import { ListItem } from './Phonebook/FormList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    contactFilter: '',
  };

  addItem = newItem => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newItem.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${newItem.name} is already in contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: newItem.name,
      number: newItem.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeContactFilter = newFilter => {
    this.setState({
      contactFilter: newFilter,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, name, number, contactFilter } = this.state;
    const visibleContactItems = contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    );
    return (
      <div>
        <PhoneForm onAdd={this.addItem} />
        <ListItem
          contacts={visibleContactItems}
          name={name}
          number={number}
          contactFilter={contactFilter}
          onChangeContact={this.changeContactFilter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
