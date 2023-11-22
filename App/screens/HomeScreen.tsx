import React, {useEffect, useState} from 'react';
import {Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View,} from 'react-native';
import {useNavigation} from "@react-navigation/native";
// @ts-ignore
import _ from "lodash";
import HeaderComponent from '../components/HeaderComponent';
import TestReduxToolkitSaga from "./TestScreen/TestReduxToolkitSaga";
import ICONS from '../theme/icon';
import SCREEN from "../navigators/RouteKey";
import categoryApi from "../api/categoryApi";

const HomeScreen = () => {
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

    const [listCategory, setListCategory] = useState();

    useEffect(() => {
        // @ts-ignore
        categoryApi.getAll().then((response) => setListCategory(response.data))
    }, [])

    const contentNavigationButton = (subItemId: number) => {
        if (subItemId === 1) {
            // @ts-ignore
            navigation.navigate(SCREEN.STORAGE_USER_SCREEN, {param: data[0].name})
        } else if (subItemId === 2) {
            // @ts-ignore
            navigation.navigate(SCREEN.SUGGEST_SCREEN)
        } else {
            // @ts-ignore
            navigation.navigate(SCREEN.STORAGE_USER_SCREEN, {param: data[2].name})
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
                    <View style={{flexDirection: 'row'}}>
                        {/*@ts-ignore*/}
                        {_.chunk(data, 1).map((item, index) => (
                            <View key={index} style={{flexDirection: 'column'}}>
                                {/*@ts-ignore*/}
                                {item.map((subItem, subIndex) => (
                                    <Pressable
                                        key={subIndex}
                                        onPress={() => contentNavigationButton(subItem.id)}
                                        style={({pressed}) => [
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
                                                <Image style={styles.icon} source={subItem.icon}/>
                                            </View>
                                            <Text style={styles.text}>{subItem.name}</Text>
                                        </View>
                                    </Pressable>
                                ))}
                            </View>
                        ))}
                    </View>
                </ScrollView>

                <View>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    >
                        <View style={{flexDirection: 'row'}}>
                            {/*@ts-ignore*/}
                            {_.chunk(listCategory, 1).map((item, index) => (
                                <View key={index} style={{flexDirection: 'column'}}>
                                    {/*@ts-ignore*/}
                                    {item.map((item, subIndex) => (
                                        <Pressable key={subIndex}
                                                   onPress={() => console.log('Pressed', item.nameCategory)}>
                                            <View>
                                                <Text>{item.nameCategory}</Text>
                                                {/* Add more components to display other properties */}
                                                {/* <Image source={{ uri: item.avatarCategory }} style={{ width: 50, height: 50 }} /> */}
                                            </View>
                                        </Pressable>
                                    ))}
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
                <TestReduxToolkitSaga/>

            </ScrollView>
        </SafeAreaView>
    );
};

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
