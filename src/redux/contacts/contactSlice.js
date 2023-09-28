import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    loadContacts(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter, loadContacts } =
  contactSlice.actions;

export const contactReducer = contactSlice.reducer;
