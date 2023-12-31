import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SCREEN from './RouteKey';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import ICONS from '../theme/icon';
import SuggestScreen from '../screens/SuggestScreen';
import CategoryScreen from '../screens/CategoryScreen';
import Fonts from "../theme/fonts";

const Tab = createBottomTabNavigator();

const tabLabelStyle = (focused: any) => ({
    color: focused ? '#FF9900' : '#9B4A10',
    bottom: -5,
    fontFamily:Fonts.RobotoBold,
    marginBottom:10,
});

const tabIconStyle = {
    width: 20,
    height: 20,
};

const BottomTab = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#EDF8F7',
                    // height: 70,
                    // position: "absolute",
                    // bottom: 15,
                    // right: 15,
                    // left: 15,
                    // borderRadius: 10,
                },
                tabBarItemStyle: {
                    marginTop: 10,
                    justifyContent:'space-evenly',

                }
            }}
            initialRouteName={SCREEN.HOME_SCREEN}
        >
            <Tab.Screen
                component={HomeScreen}
                name={SCREEN.HOME_SCREEN}
                options={{
                    tabBarLabel: ({focused}) => (
                        <Text style={tabLabelStyle(focused)}>Khám phá</Text>
                    ),
                    tabBarIcon: ({focused}) => (
                        <Image source={focused ? ICONS.iconHomeO : ICONS.iconHomeOD} style={tabIconStyle}/>
                    ),
                }}
            />
            <Tab.Screen
                component={SuggestScreen}
                name={SCREEN.SUGGEST_SCREEN}
                options={{
                    tabBarLabel: ({focused}) => (
                        <Text style={tabLabelStyle(focused)}>Gợi ý</Text>
                    ),
                    tabBarIcon: ({focused}) => (
                        <Image source={focused ? ICONS.iconShiningO : ICONS.iconShining} style={tabIconStyle}/>
                    ),
                }}
            />
            <Tab.Screen
                component={CategoryScreen}
                name={SCREEN.CATEGORY_SCREEN}
                options={{
                    tabBarLabel: ({focused}) => (
                        <Text style={tabLabelStyle(focused)}>Chuyên mục</Text>
                    ),
                    tabBarIcon: ({focused}) => (
                        <Image source={focused ? ICONS.iconCategoryO : ICONS.iconCategory} style={tabIconStyle}/>
                    ),
                }}
            />
            <Tab.Screen
                component={UserScreen}
                name={SCREEN.USER_SCREEN}
                options={{
                    tabBarLabel: ({focused}) => (
                        <Text style={tabLabelStyle(focused)}>Cá nhân</Text>
                    ),
                    tabBarIcon: ({focused}) => (
                        <Image source={focused ? ICONS.iconUserO : ICONS.iconUserOD} style={[tabIconStyle]}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};


export default BottomTab;
