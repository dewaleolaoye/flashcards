import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { FlatList, View } from 'react-native';
import Card from '../components/Card';

const data = [
  {
    id: '1',
    title: 'React',
    desc: 'State',
    cardCount: 2,
  },
  {
    id: '2',
    title: 'Vue',
    desc: "I don't understand",
    cardCount: 23,
  },
  {
    id: '3',
    title: 'Angular',
    desc: 'What is it',
    cardCount: 4,
  },
];

const DeckList = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.title}
              cardCount={item.cardCount}
              onPress={() =>
                navigation.navigate('DeckScreen', {
                  title: item.title,
                  cardCount: item.cardCount,
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

export default DeckList;
