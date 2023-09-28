import React from 'react';
import { Label, Field } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactSlice';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Field type="text" value={filter} onChange={handleFilterChange} />
    </Label>
  );
};
