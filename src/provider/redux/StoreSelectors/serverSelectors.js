// import { createSelector } from '@reduxjs/toolkit';

const getUserData = state => state.auth.isLoggedIn;

const Selector = {
  getUserData,
};

export default Selector;
