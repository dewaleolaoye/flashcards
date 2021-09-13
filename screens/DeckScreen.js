import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const DeckScreen = ({ route, navigation }) => {
  const { title, id, cardCount } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{cardCount} cards</Text>

      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={[styles.btn, styles.btnAdd]}
          onPress={() =>
            navigation.navigate('AddCardScreen', {
              id,
            })
          }
        >
          <Text style={[styles.btnText, styles.white]}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.btnStart]}>
          <Text style={styles.btnText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeckScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },

  btnWrapper: {
    marginTop: 200,
  },

  text: {
    fontSize: 24,
    fontWeight: '600',
  },

  btn: {
    padding: 16,
    borderRadius: 5,
    marginBottom: 16,
    width: 200,
  },

  btnText: {
    textAlign: 'center',
  },

  btnAdd: {
    backgroundColor: '#7047EA',
  },

  btnStart: {
    borderWidth: 1,
  },

  white: {
    color: '#fff',
  },
});
