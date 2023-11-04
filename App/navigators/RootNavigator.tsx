import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SCREEN from './RouteKey';
import LoginScreen from '../screens/LoginScrees';
import HomeScreen from '../screens/HomeScreen';
import BottomTab from './BottomTab';
import SearchScreen from '../screens/SearchScreen';
import SuggestScreen from "../screens/SuggestScreen";
import CategoryScreen from "../screens/CategoryScreen";
import UserScreen from "../screens/UserScreen";
import DetailCategory from "../screens/DetailCategory";

type RootStackParamList = {
    SearchScreen: undefined;
    LoginScreen: undefined;
    HomeScreen: undefined;
    Detail: undefined;
};
const RootNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false, navigationBarColor: 'transparent',}}
                // @ts-ignore
                initialRouteName={SCREEN.LOGIN_SCREEN}
            >
                <Stack.Screen
                    // @ts-ignore
                    name={SCREEN.LOGIN_SCREEN}
                    component={LoginScreen}
                    options={{headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                    // @ts-ignore
                    name={SCREEN.HOME_SCREEN}
                    component={HomeScreen}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
                <Stack.Screen
                    // @ts-ignore
                    name={SCREEN.SUGGEST_SCREEN}
                    component={SuggestScreen}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
                <Stack.Screen
                    // @ts-ignore
                    name={SCREEN.CATEGORY_SCREEN}
                    component={CategoryScreen}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
                <Stack.Screen
                    // @ts-ignore
                    name={SCREEN.USER_SCREEN}
                    component={UserScreen}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
                <Stack.Screen
                    // @ts-ignore
                    name={SCREEN.DETAIL_CATEGORY}
                    component={DetailCategory}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />

                <Stack.Screen
                    // @ts-ignore
                    name={SCREEN.SEARCH_SCREEN}
                    component={SearchScreen}
                    options={{headerShown: false, animation: 'fade_from_bottom'}}

                />
                <Stack.Screen
                    // @ts-ignore
                    name={SCREEN.BOTTOM_TAB}
                    component={BottomTab}
                    options={{headerShown: false, animation: 'slide_from_right'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
