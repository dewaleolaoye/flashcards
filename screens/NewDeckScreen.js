import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewDeck = () => {
  return (
    <View>
      <Text style={styles.text}>This is the new deck screen</Text>
    </View>
  );
};

export default NewDeck;

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
});
