import React from 'react';
import { List, ListItem, ItemText, Btn } from './ContactsList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactSlice';

export const ContactsList = () => {
  const contactsData = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));

    const updatedContacts = contactsData.filter(contact => contact.id !== id);

    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const filteredContacts = contactsData.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ItemText>
            {name}: {number}
          </ItemText>
          <Btn type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </Btn>
        </ListItem>
      ))}
    </List>
  );
};