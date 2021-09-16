import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import deckReducer from '../slices/deckSlice';

export const store = configureStore({
  reducer: {
    decks: deckReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});
