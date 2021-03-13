import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screen/home/home';
import {List} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          width: 410,
          alignSelf: 'center',
          elevation: 10,
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
          paddingBottom: 5,
          paddingHorizontal: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-assistant"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bookmark-outline"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="menu" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
