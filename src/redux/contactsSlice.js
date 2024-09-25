import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";
import { act } from "react";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.loading;
export const selectError = (state) => state.error;

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// extraReducers: (builder) => {
//   builder
//     .addCase(fetchContacts.pending, (state) => (state.loading = true))
//     .addCase(fetchContacts.fulfilled, (state, action) => {
//       state.loading = false;
//       state.error = null;
//       state.items = action.payload;
//     })
//     .addCase(fetchContacts.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     });
// },
// });

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

// reducers: {
//     addContact: (state, action) => {
//       state.items.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//   },
