import { createSelector } from '@reduxjs/toolkit';

export const selectContakts = state => state.contacts;

export const selectStatusFilter = state => state.filters.serchName;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const arrContacts = state => state.contacts.items;

export const selectVisibleContact = createSelector(
  [arrContacts, selectStatusFilter],
  (contacts, filterQwery) => {
    const qwery = filterQwery.toLowerCase().toString();

    switch (filterQwery) {
      case filterQwery:
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(qwery)
        );
      default:
        return contacts;
    }
  }
);
