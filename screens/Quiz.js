import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid/non-secure';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Quiz = ({ route, navigation }) => {
  const { id: paramsID } = route.params;
  const decks = useSelector((state) => state.decks.allDecks);
  const [flip, setFlip] = useState(true);

  const _handleFlip = () => {
    setFlip(!flip);
  };

  const filterData = Object.values(decks).filter(({ id }) => {
    return id === paramsID;
  });

  console.log(filterData[0].questions, 'quest');
  const questionList = filterData[0].questions;

  // const questionList = filterData[0];
  return (
    <View style={styles.container}>
      {questionList.length === 0 ? (
        <View style={styles.noQuestion}>
          <Text style={styles.text}>There are no cards in the deck</Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.btnText}>Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {questionList.map(({ answer, question }) => {
            return (
              <View key={nanoid()}>
                <View
                  style={[
                    styles.card,
                    { backgroundColor: flip ? '#7047EA' : '#23136c' },
                  ]}
                >
                  {/* Face Side */}
                  {flip ? (
                    <View style={styles.face}>
                      <Text style={styles.flipText}>{question}</Text>
                    </View>
                  ) : (
                    <View style={styles.back}>
                      <Text style={styles.flipText}>{answer}</Text>
                    </View>
                  )}
                </View>

                <Ionicons
                  style={styles.icon}
                  onPress={_handleFlip}
                  name='reload-circle-sharp'
                  color='#16222a'
                  size={50}
                />
                <View style={styles.choose}>
                  <TouchableOpacity>
                    <Text style={[styles.answer, styles.correct]}>Correct</Text>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Text style={[styles.answer, styles.incorrect]}>
                      Incorrect
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 16,

    // alignItems: 'center',
  },
  noQuestion: {
    padding: 16,
  },
  text: {
    marginTop: 32,
    fontSize: 18,
    textAlign: 'center',
  },

  face: {
    // backgroundColor: 'red',
    // height: 20,
  },

  back: {
    // height: 20,
    // backgroundColor: '#fff',
  },

  flipText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },

  btn: {
    marginTop: 32,
    padding: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    marginBottom: 16,
    width: 200,
    backgroundColor: '#7047EA',
  },

  btnText: {
    textAlign: 'center',
    color: '#fff',
  },

  card: {
    padding: 16,
    borderRadius: 8,
    height: 200,
    justifyContent: 'center',
  },

  icon: {
    marginTop: 128,
    textAlign: 'center',
  },

  choose: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  answer: {
    marginLeft: 16,
    // borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    textAlign: 'center',
    width: 150,
    color: '#fff',
  },

  correct: {
    backgroundColor: '#2fca72',
  },

  incorrect: {
    backgroundColor: 'red',
  },
});
