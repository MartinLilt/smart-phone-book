import { createSelector } from '@reduxjs/toolkit';

const getOptionsState = state => state.form.options;
const getFilter = state => state.form?.filter;

const getVisibleState = createSelector([getOptionsState], options => {
  return options.filter(
    contact => contact.id !== 'emma' && contact.id !== 'alex',
  );
});

const getFilteredOptions = createSelector(
  [getOptionsState, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return allContacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(normalizedFilter),
    );
  },
);

const Selector = {
  getOptionsState,
  getFilter,
  getVisibleState,
  getFilteredOptions,
};

export default Selector;
