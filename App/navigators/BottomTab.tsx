import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SCREEN from './RouteKey';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import ICONS from '../theme/icon';
import SuggestScreen from '../screens/SuggestScreen';
import CategoryScreen from '../screens/CategoryScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREEN.HOME_SCREEN}>
      <Tab.Screen
        component={HomeScreen}
        name={SCREEN.HOME_SCREEN}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#FF9900' : '#9B4A10',
              }}>
              {'Khám phá'}
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={ICONS.iconHomeO} style={{width: 20, height: 20}} />
            ) : (
              <Image
                source={ICONS.iconHomeOD}
                style={{width: 20, height: 20}}
              />
            ),
        }}
      />

      <Tab.Screen
        component={SuggestScreen}
        name={SCREEN.SUGGEST_SCREEN}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#FF9900' : '#9B4A10',
              }}>
              {'Gợi ý'}
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={ICONS.iconShiningO}
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image
                source={ICONS.iconShining}
                style={{width: 20, height: 20}}
              />
            ),
        }}
      />

      <Tab.Screen
        component={CategoryScreen}
        name={SCREEN.CATEGORY_SCREEN}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#FF9900' : '#9B4A10',
              }}>
              {'Chuyên mục'}
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={ICONS.iconCategoryO}
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image
                source={ICONS.iconCategory}
                style={{width: 20, height: 20}}
              />
            ),
        }}
      />

      <Tab.Screen
        component={UserScreen}
        name={SCREEN.USER_SCREEN}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#FF9900' : '#9B4A10',
              }}>
              {'Cá nhân'}
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={ICONS.iconUserO} style={{width: 20, height: 20}} />
            ) : (
              <Image
                source={ICONS.iconUserOD}
                style={{width: 20, height: 20}}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
