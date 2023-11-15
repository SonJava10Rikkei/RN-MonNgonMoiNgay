import React, { useEffect } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import ICONS from '../theme/icon';
// @ts-ignore
import _ from "lodash";
import { useNavigation } from "@react-navigation/native";
import SCREEN from "../navigators/RouteKey";
import { TestCounter } from "./TestScreen/TestCounter";
import categoryApi from '../api/categoryApi';
import productApi from '../api/productApi';


const HomeScreen = () => {
    useEffect(() => {
        categoryApi.getAll().then((response) => console.log(response.data));

    })



    // @ts-ignore
    const data = [
        {
            id: 1,
            icon: ICONS.iconGraphOrange,
            name: 'Được xem nhiều'
        },
        {
            id: 2,
            icon: ICONS.iconShiningPink,
            name: 'Hôm nay ăn gì'
        },
        {
            id: 3,
            icon: ICONS.iconHeartRed,
            name: 'Món yêu thích'
        },
    ];
    const navigation = useNavigation();

    const contentNavigationButton = (subItemId: number) => {
        if (subItemId === 1) {
            // @ts-ignore
            navigation.navigate(SCREEN.STORAGE_USER_SCREEN, { param: data[0].name })
        } else if (subItemId === 2) {
            // @ts-ignore
            navigation.navigate(SCREEN.SUGGEST_SCREEN)
        } else {
            // @ts-ignore
            navigation.navigate(SCREEN.STORAGE_USER_SCREEN, { param: data[2].name })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                iconLeft={ICONS.iconBack}
                iconRight1={ICONS.iconCategoriesWhite}
                iconRight2={ICONS.iconSearchWhite}
                showSearchDish={true}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.content}
            >
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>
                    <View style={{ flexDirection: 'row' }}>
                        {/*@ts-ignore*/}
                        {_.chunk(data, 1).map((item, index) => (
                            <View key={index} style={{ flexDirection: 'column' }}>
                                {/*@ts-ignore*/}
                                {item.map((subItem, subIndex) => (
                                    <Pressable
                                        key={subIndex}
                                        onPress={() => contentNavigationButton(subItem.id)}
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed ? 'rgb(234,193,78)' : '#4BA468',
                                            },

                                            styles.contentButton
                                        ]}
                                    >
                                        <View
                                            style={styles.button}
                                        >
                                            <View style={styles.containerIcon}>
                                                <Image style={styles.icon} source={subItem.icon} />
                                            </View>
                                            <Text style={styles.text}>{subItem.name}</Text>
                                        </View>
                                    </Pressable>
                                ))}
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <TestCounter />
            </ScrollView>
        </SafeAreaView>
    )
        ;
}
    ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
    content: {
        paddingHorizontal: 10,
    },
    contentButton: {
        marginVertical: 20,
        borderRadius: 50,
        padding: 3,
        marginHorizontal: 8,
    },
    button: {
        flexDirection: 'row',
    },
    containerIcon: {
        width: 25,
        height: 25,
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: 50,
        alignItems: "center",
        justifyContent: 'center',
        textAlign: "center",
    },
    icon: {
        width: 15,
        height: 15,
        alignItems: "center",
    },
    text: {
        color: '#ffffff',
        fontWeight: '500',
        marginHorizontal: 5,
        marginVertical: 2,
    },


});

export default HomeScreen;
