import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    options: [
      { name: 'Emma S.', number: '+12225554449', id: 'emma' },
      { name: 'Alex M.', number: '+16667772223', id: 'alex' },
    ],
    filter: '',
  },
  reducers: {
    addContact(state, { payload }) {
      // - immer.proxy your best friend))
      return {
        ...state,
        options: [payload, ...state.options],
      };
    },
    removeContact(state, { payload }) {
      state.options = state.options.filter(contact => contact.id !== payload);
    },
    filterContact(state, { payload }) {
      state.filter = payload;
    },
    resetContacts(state) {
      state.options = [
        { name: 'Emma S.', number: '+12225554449', id: 'emma' },
        { name: 'Alex M.', number: '+16667772223', id: 'alex' },
      ];
    },
  },
});

export const { addContact, removeContact, filterContact, resetContacts } =
  formSlice.actions;
export default formSlice.reducer;
