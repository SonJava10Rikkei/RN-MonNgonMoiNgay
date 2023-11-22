import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from "react-native";

import SCREEN from './RouteKey';
import LoginScreen from '../screens/LoginScrees';
import HomeScreen from '../screens/HomeScreen';
import BottomTab from './BottomTab';
import SearchScreen from '../screens/SearchScreen';
import SuggestScreen from "../screens/SuggestScreen";
import CategoryScreen from "../screens/CategoryScreen";
import UserScreen from "../screens/UserScreen";
import DetailCategoryScreen from "../screens/DetailCategoryScreen";
import DetailProductScreen from "../screens/DetailProductScreen";
import StorageUserScreen from "../screens/StorageUserScreen";

const RootNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false, navigationBarColor: 'transparent',}}
                initialRouteName={SCREEN.LOGIN_SCREEN}
            >
                <Stack.Screen
                    name={SCREEN.BOTTOM_TAB}
                    component={BottomTab}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
                <Stack.Screen
                    name={SCREEN.LOGIN_SCREEN}
                    component={LoginScreen}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
                <Stack.Screen
                    name={SCREEN.HOME_SCREEN}
                    component={HomeScreen}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
                <Stack.Screen
                    name={SCREEN.SUGGEST_SCREEN}
                    component={SuggestScreen}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
                <Stack.Screen
                    name={SCREEN.CATEGORY_SCREEN}
                    component={CategoryScreen}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
                <Stack.Screen
                    name={SCREEN.USER_SCREEN}
                    component={UserScreen}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
                <Stack.Screen
                    name={SCREEN.DETAIL_CATEGORY_SCREEN}
                    component={DetailCategoryScreen}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
                <Stack.Screen
                    name={SCREEN.SEARCH_SCREEN}
                    component={SearchScreen}
                    options={{headerShown: false, animation: 'fade_from_bottom'}}
                />

                <Stack.Screen
                    name={SCREEN.DETAIL_PRODUCT_SCREEN}
                    component={DetailProductScreen}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
                <Stack.Screen
                    name={SCREEN.STORAGE_USER_SCREEN}
                    component={StorageUserScreen}
                    options={{headerShown: false, animation: 'fade_from_bottom'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Light'
    }
})
