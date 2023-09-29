import React from 'react';
import { Label, Field } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

import { filter } from 'redux/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  

  return (
    <Label>
      Find contacts by name
      <Field type="text" value={filter} onChange={e=>dispatch(setFilter(e.target.value))} />
    </Label>
  );
};
