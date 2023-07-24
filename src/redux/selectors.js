// import { createSelector } from '@reduxjs/toolkit';

export const selectContakts = state => state.contacts;

export const selectStatusFilter = state => state.filters.serchName;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

// export const selectFilteredContact = createSelector(
//   [selectContakts, selectStatusFilter],
//   (contacts, filterQwery) => {

//       switch (filterQwery) {
//           case filterQwery => {
//               const oneContact = contacts.filter(contact =>
//                   contact.name
//                     .toLowerCase()
//                     .includes(filterQwery.toLowerCase().toString())
//               );
//               return oneContact;
//           }
//       }
//   }
// );
