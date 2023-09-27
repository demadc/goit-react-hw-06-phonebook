import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';

// import { rootReducer } from './reducer';
// import { createAction } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

// const initialState = {
//   contacts: [],
//   filter: '',
// };
