import React, { useState } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactAPI';
import { Form, Label, Text, Input, AddContactBtn } from './ContactForm.styled';

const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const [formInput, setFormInput] = useState({ name: '', phone: '' });
  const { name, phone } = formInput;

  const handleNameInput = event => {
    const { name, value } = event.currentTarget;
    setFormInput(state => ({ ...state, [name]: value }));
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    const contactItem = {
      name,
      phone,
    };
    console.log(contactItem);
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : await addContact(contactItem);
    setFormInput({ name: '', phone: '' });
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Label>
        <Text>Name</Text>

        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
          onChange={handleNameInput}
          value={name}
        />
      </Label>

      <Label>
        <Text>Phone</Text>
        <Input
          placeholder="+XX XXX XXX XX XX"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNameInput}
          value={phone}
        />
      </Label>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
};

export default ContactForm;
