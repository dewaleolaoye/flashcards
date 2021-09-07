import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreen, NewDeckScreen } from '../screens';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'NewDeck') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#7047EA',
        tabBarInactiveTintColor: '#272727',
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen
        name='NewDeck'
        component={NewDeckScreen}
        options={{
          title: 'New Deck',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
