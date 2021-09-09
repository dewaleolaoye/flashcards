import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { FlatList, View } from 'react-native';
import Card from '../components/Card';

const data = [
  {
    id: '1',
    title: 'React',
    desc: 'State',
  },
  {
    id: '2',
    title: 'Vue',
    desc: "I don't understand",
  },
  {
    id: '3',
    title: 'Angular',
    desc: 'What is it',
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
              description={item.desc}
              onPress={() =>
                navigation.navigate('DeckScreen', {
                  title: item.title,
                  description: item.desc,
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
