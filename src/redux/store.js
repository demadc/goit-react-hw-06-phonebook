import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
// import { createAction } from '@reduxjs/toolkit';

export const store = configureStore({
  // reducer: { rootReducer },
});

const initialState = {
  contacts: [],
  filter: '',
};

// const addTask = createAction('tasks/AddTask');
