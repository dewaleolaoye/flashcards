import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid/non-secure';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Quiz = ({ route, navigation }) => {
  const { id: paramsID, title, cardCount } = route.params;
  const decks = useSelector((state) => state.decks.allDecks);
  const [flip, setFlip] = useState(true);
  const [index, setIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const _handleFlip = () => {
    setFlip(!flip);
  };

  const filterData = Object.values(decks).filter(({ id }) => {
    return id === paramsID;
  });

  const questionList = filterData[0].questions;

  const _handleCorrectAnswers = (position) => {
    setIndex(position + 1);
    setCorrectAnswers(correctAnswers + 1);
  };

  return (
    <View style={styles.container}>
      {questionList.length === 0 ? (
        <View style={styles.noQuestion}>
          <Text style={styles.text}>
            Sorry, you can not take quiz becaauser there are no cards in the
            deck
          </Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate('AddCardScreen', {
                id: paramsID,
                title,
                cardCount,
              })
            }
          >
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {questionList.map(({ answer, question }, i) => {
            return (
              <View key={nanoid()}>
                {i === index && (
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        marginBottom: 16,
                        fontWeight: '500',
                      }}
                    >{`${index + 1}/${questionList.length}`}</Text>
                    <View
                      style={[
                        styles.card,
                        { backgroundColor: flip ? '#7047EA' : '#23136c' },
                      ]}
                    >
                      {flip ? (
                        <View>
                          <Text style={styles.flipText}>{question}</Text>
                        </View>
                      ) : (
                        <View>
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
                        <Text
                          style={[styles.answer, styles.correct]}
                          onPress={() => _handleCorrectAnswers(index)}
                        >
                          Correct
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Text
                          style={[styles.answer, styles.incorrect]}
                          onPress={() => setIndex(index + 1)}
                        >
                          Incorrect
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            );
          })}

          {questionList.length === index && (
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 26, fontWeight: '600' }}>
                Quiz Complete
              </Text>

              <Text style={{ fontSize: 24, fontWeight: '400' }}>
                {correctAnswers} / {questionList.length}
              </Text>

              {correctAnswers === questionList.length ? (
                <View style={{ margin: 40, flexDirection: 'row' }}>
                  <Ionicons name='happy-sharp' color='green' size={80} />
                  <Ionicons name='happy-sharp' color='green' size={80} />
                  <Ionicons name='happy-sharp' color='green' size={80} />
                </View>
              ) : (
                <View style={{ margin: 40, flexDirection: 'row' }}>
                  <Ionicons name='sad' color='brown' size={80} />
                </View>
              )}

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={() => {
                    setIndex(0);
                    setCorrectAnswers(0);
                  }}
                >
                  <Text style={[styles.answer, styles.correct]}>
                    Restart Quiz
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('HomeScreen')}
                >
                  <Text
                    style={[
                      styles.answer,
                      {
                        color: '#fff',
                        borderColor: '#7047EA',
                        borderWidth: 1,
                        backgroundColor: '#7047EA',
                      },
                    ]}
                  >
                    Back to Deck
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  noQuestion: {
    padding: 16,
  },
  text: {
    marginTop: 32,
    fontSize: 18,
    textAlign: 'center',
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
