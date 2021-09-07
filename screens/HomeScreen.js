import React from 'react';
import { FlatList, View } from 'react-native';
import Card from '../components/Card';

const data = [
  {
    id: '1',
    title: 'Hello React',
    desc: 'State',
  },
  {
    id: '2',
    title: 'Hello Vue',
    desc: "I don't understand",
  },
  {
    id: '3',
    title: 'Hello Angular',
    desc: 'What is it',
  },
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Card title={item.title} description={item.desc} />
  );

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
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
