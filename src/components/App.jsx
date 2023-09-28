import { useEffect } from 'react';
import { ContactForm } from './Form/Form';
import { ContactsList } from './ContactList/ContactsList';
import { Filter } from './Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from 'redux/contacts/contactSlice';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const filter = useSelector(state => state.contacts.filter); 
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) ?? [];
    dispatch(
      loadContacts(storedContacts.length ? storedContacts : initialContacts)
    );
  }, [dispatch]);

  
  return (
    <div style={{ width: 500, marginLeft: 400, marginRight: 400 }}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList filter={filter} />

     
    </div>
  );
}
