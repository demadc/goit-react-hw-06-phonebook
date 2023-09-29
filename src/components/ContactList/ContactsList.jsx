import React from 'react';
import { List, ListItem, ItemText, Btn } from './ContactsList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactSlice';
// import { contactsData } from 'redux/selector';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);


  const handleDeleteContact = id => {
    dispatch(deleteContact(id));

    const updatedContacts = contacts.filter(contact => contact.id !== id);

    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const filteredContacts = contacts.items.filter(contact =>
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








 

 
