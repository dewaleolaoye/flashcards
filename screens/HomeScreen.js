import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>This is the home screen</Text>
      <Button title='Click me' onPress={() => navigation.navigate('NewDeck')} />
      <Text>HELLO THERE</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
