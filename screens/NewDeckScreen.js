import { nanoid } from 'nanoid/non-secure';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveDeck } from '../slices/deckSlice';

const NewDeck = ({ navigation }) => {
  const [text, setText] = useState('');
  // const selector = useSelector((state) => state.decks.allDecks);

  const dispatch = useDispatch();

  const _handleSubmit = async () => {
    const id = nanoid();

    dispatch(
      saveDeck({
        id,
        title: text,
        questions: [],
      })
    );
    setText('');
    // navigation.navigate('Home');

    navigation.navigate('DeckScreen', {
      id,
      title: text,
      cardCount: 0,
    });
  };

  const _handleTextChange = (e) => {
    setText(e);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is the title of your new Deck?</Text>

      <TextInput
        onChangeText={_handleTextChange}
        style={styles.input}
        placeholder='Type here to translate!'
        value={text}
      />

      <Pressable
        style={text.length === 0 ? styles.disabled : styles.btn}
        onPress={_handleSubmit}
        disabled={text.length === 0 && true}
        accessibilityLabel='Submit new deck question'
      >
        <Text style={text.length === 0 ? styles.disabled : styles.btnTitle}>
          Submit
        </Text>
      </Pressable>
    </View>
  );
};

export default NewDeck;

const styles = StyleSheet.create({
  container: {
    padding: 16,

    backgroundColor: '#efefef',
    minHeight: 800,
  },

  text: {
    color: '#000',
    fontSize: 18,
  },

  input: {
    height: 56,
    borderColor: '#000',
    color: '#000',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 16,
    marginBottom: 48,
    padding: 16,
  },

  btn: {
    height: 56,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#7047EA',
  },

  disabled: {
    backgroundColor: '#efefef',
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },

  btnTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});
