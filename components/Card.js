import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 24,
    backgroundColor: '#C0AAE5',
    marginBottom: 16,
  },

  title: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
  },

  desc: {
    color: '#272727',
    textAlign: 'center',
    fontSize: 16,
  },
});
