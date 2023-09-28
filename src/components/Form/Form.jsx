import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import { Label, Button } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/contactSlice';

const idName = nanoid();
const idNum = nanoid();

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={() => dispatch(addContact({ name, number }))}
    >
      <Form>
        <Label htmlFor={idName}>
          Name
          <Field
            id={idName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleNameChange}
            value={name}
          />
        </Label>
        <Label>
          Number
          <Field
            id={idNum}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="0XX-123-45-67"
            onChange={handleNumberChange}
            value={number}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
