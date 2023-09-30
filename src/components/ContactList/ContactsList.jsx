import React from 'react';
import { List, ListItem, ItemText, Btn } from './ContactsList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactSlice';
import { selectFilteredContacts } from 'redux/selector';


export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  // const filter = useSelector(selectFilter);


  const handleDeleteContact = id => {
    dispatch(deleteContact(id));

    // const updatedContacts = contacts.filter(contact => contact.id !== id);

    // localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
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








 

 
