import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const NewDeck = () => {
  const [text, setText] = useState('');

  const _handleSubmit = () => {
    Alert.alert(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is the title of your new Deck?</Text>
      <TextInput
        onChangeText={(e) => setText(e)}
        style={styles.input}
        placeholder='Type here to translate!'
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
