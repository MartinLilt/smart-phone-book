import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import authReducer from './authSlice';
import { logger } from '../redux/widdleWares/logger';

export const store = configureStore({
  reducer: {
    form: formReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

// setupListeners(store.dispatch);
