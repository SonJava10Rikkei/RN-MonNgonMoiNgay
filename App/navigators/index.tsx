import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN from './RouteKey';
import LoginScreen from '../screens/LoginScrees';
import HomeScreen from '../screens/HomeScreen';
import BottomTab from './BottomTab';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false, navigationBarColor: 'transparent',}}
                initialRouteName={SCREEN.LOGIN_SCREEN}>
                <Stack.Screen
                    name={SCREEN.LOGIN_SCREEN}
                    component={LoginScreen}
                    options={{headerShown: false}}
                />

                <Stack.Screen
                    name={SCREEN.BOTTOM_TAB}
                    component={BottomTab}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN.HOME_SCREEN}
                    component={HomeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={SCREEN.SEARCH_SCREEN}
                    component={SearchScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
