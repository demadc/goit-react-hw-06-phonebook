import React from 'react';
import { List, ListItem, ItemText, Btn } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/contacts/contactSlice';

export const ContactsList = ({ contacts }) => {
  const contactsData = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ItemText>
            {name}: {number}
          </ItemText>
          <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Btn>
        </ListItem>
      ))}
    </List>
  );
};
