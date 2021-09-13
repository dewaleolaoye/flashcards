import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addCardToDeck } from '../slices/deckSlice';

const AddCardScreen = ({ navigation, route }) => {
  const { id } = route.params;

  const [questionAnswer, setQuestionAnswer] = useState({
    question: '',
    answer: '',
  });

  const dispatch = useDispatch();

  const _handleSubmit = async () => {
    dispatch(addCardToDeck({ id, questionAnswer }));

    setQuestionAnswer({
      answer: '',
      question: '',
    });
    navigation.navigate('Home');
  };

  // console.log(state, 'STATE HERE');

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(e) =>
          setQuestionAnswer({
            ...questionAnswer,
            question: e,
          })
        }
        style={styles.input}
        placeholder='Question'
      />

      <TextInput
        onChangeText={(e) =>
          setQuestionAnswer({
            ...questionAnswer,
            answer: e,
          })
        }
        style={styles.input}
        placeholder='Answer'
      />

      <TouchableOpacity
        style={[styles.btn, styles.btnAdd]}
        onPress={_handleSubmit}
      >
        <Text style={[styles.btnText, styles.white]}>Add Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },

  input: {
    height: 56,
    borderColor: '#000',
    color: '#000',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 32,
    padding: 16,
  },

  btn: {
    height: 56,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#7047EA',
  },

  btn: {
    padding: 16,
    borderRadius: 5,
    marginBottom: 16,
  },

  btnText: {
    textAlign: 'center',
  },

  btnAdd: {
    backgroundColor: '#7047EA',
  },

  white: {
    color: '#fff',
  },
});
