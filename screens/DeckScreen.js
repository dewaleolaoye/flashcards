import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DeckScreen = ({ route }) => {
  const { title, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

export default DeckScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});
