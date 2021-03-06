import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { _getDecks, _saveDeckTitle } from '../app/api';

const initialState = {
  allDecks: {},
};

export const getAllDecks = createAsyncThunk('decks/getAllDecks', async () => {
  try {
    const decks = await _getDecks();
    return decks;
  } catch (error) {
    console.warn(error, 'fetching deecks');
  }
});

export const saveDeck = createAsyncThunk('decks/saveDeck', async (title) => {
  try {
    const deck = await _saveDeckTitle({ ...title });
    return deck;
  } catch (error) {
    console.warn(error, 'Saving deck');
  }
});

const deckSlice = createSlice({
  name: 'decks',
  initialState,

  reducers: {
    addCardToDeck: (state, action) => {
      const { id, questionAnswer } = action.payload;

      state.allDecks[id].questions.push(questionAnswer);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllDecks.fulfilled, (state, action) => {
      const decks = action.payload;

      Object.values(decks).forEach((deck) => {
        state.allDecks[deck.id] = deck;
      });
    });

    builder.addCase(saveDeck.fulfilled, (state, action) => {
      const deck = action.payload;

      state.allDecks[deck.id] = deck;
    });
  },
});

export const { addCardToDeck } = deckSlice.actions;
export default deckSlice.reducer;
