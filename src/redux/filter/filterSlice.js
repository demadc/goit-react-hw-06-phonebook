import { createSlice } from '@reduxjs/toolkit';

  
  const filterSlice = createSlice({
    name: 'filter',
    initialState: { filter: '' },
    reducers: {
    //   addContact(state, action) {
    //     state.items.push(action.payload);
    //   },
    //   deleteContact(state, action) {
    //     state.items = state.items.filter(contact => contact.id !== action.payload);
    //   },
      setFilter(state, action) {
        state.filter = action.payload;
      },
    //   loadContacts(state, action) {
    //     state.items = action.payload;
    //   },
    },
  });
  
  export const { setFilter } = filterSlice.actions;
  
  export const filterReducer = filterSlice.reducer;