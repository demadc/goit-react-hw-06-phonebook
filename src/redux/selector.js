import { createSelector } from "@reduxjs/toolkit";

export const contactsData = state => state.contacts.items;

export const filter = state => state.contacts.filter;

export const selectFilteredContacts = createSelector([contactsData, filter], (items, filter) => {
    return items.filter(item=>item.text.toLowerCase().includes(filter.toLowerCase()))
})