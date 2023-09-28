import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
