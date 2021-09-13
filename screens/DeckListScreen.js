import React, { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { FlatList, View } from 'react-native';

import Card from '../components/Card';
import { _DATA } from '../app/api';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDecks } from '../slices/deckSlice';

const DeckList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const decks = useSelector((state) => state.decks.allDecks);

  console.log(decks, 'current state');

  useEffect(() => {
    dispatch(getAllDecks());
  }, []);

  // console.log(decks['z4Y0JExsPv8FT6W7lznp'].questions, 'home');

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
        data={Object.values(decks)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.title}
              cardCount={item.questions.length}
              onPress={() =>
                navigation.navigate('DeckScreen', {
                  title: item.title,
                  id: item.id,
                  cardCount: item.questions.length,
                })
              }
            />
          );
        }}
      />
      {/* <Text>Hello World</Text> */}
    </View>
  );
};

export default DeckList;
