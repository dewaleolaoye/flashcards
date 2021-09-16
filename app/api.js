import AsyncStorage from '@react-native-async-storage/async-storage';
import { nanoid } from 'nanoid/non-secure';

export const _DATA = {
  z4Y0JExsPv8FT6W7lznp: {
    id: 'z4Y0JExsPv8FT6W7lznp',
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },

  mRSa86hy36xeqVG6aNyL: {
    id: 'mRSa86hy36xeqVG6aNyL',
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

export const FLASHCARD_KEY = 'flashcards';

export const _getDecks = async () => {
  try {
    const initialData = JSON.stringify(_DATA);
    await AsyncStorage.setItem(FLASHCARD_KEY, initialData);
    const jsonValue = await AsyncStorage.getItem(FLASHCARD_KEY);

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.error('reading error here');
  }
};

export const _saveDeckTitle = async (deck) => {
  // const id = nanoid();
  return deck;
};
