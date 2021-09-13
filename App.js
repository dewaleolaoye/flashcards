import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DeckScreen from './screens/DeckScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import AddCardScreen from './screens/AddCardScreen';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Quiz from './screens/Quiz';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name='DeckScreen'
                component={DeckScreen}
                options={{ headerShown: true, title: 'Deck' }}
              />

              <Stack.Screen
                name='AddCardScreen'
                component={AddCardScreen}
                options={{ headerShown: true, title: 'Add Card' }}
              />

              <Stack.Screen
                name='Quiz'
                component={Quiz}
                options={{ headerShown: true, title: 'Quiz' }}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
