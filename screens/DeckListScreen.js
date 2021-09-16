import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button, FlatList, View } from 'react-native';
import * as Notifications from 'expo-notifications';

import Card from '../components/Card';
import { _DATA } from '../app/api';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDecks } from '../slices/deckSlice';
import {
  registerForPushNotificationsAsync,
  schedulePushNotification,
} from '../utils/notification';

const DeckList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const decks = useSelector((state) => state.decks.allDecks);

  useEffect(() => {
    dispatch(getAllDecks());
    // console.log(decks, 'DECKS');

    schedulePushNotification().then((res) => {
      console.log(res, 'schedulePushNotification');
    });
  }, []);

  // console.log(decks, 'DECKS');

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
              key={item.id}
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
    </View>
  );
};

export default DeckList;
