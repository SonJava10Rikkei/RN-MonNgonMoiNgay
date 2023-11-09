import React, {useState} from 'react';
import {Image, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import ICONS from '../theme/icon';
import {useNavigation} from "@react-navigation/native";
import SCREEN from "../navigators/RouteKey";

const UserScreen = () => {
    const navigation = useNavigation();

    const [isPressed, setIsPressed] = useState([false, false, false]);
    const [isPressed2, setIsPressed2] = useState([false, false, false]);
    const [icons] = useState([
        ICONS.iconHeartRed,
        ICONS.iconClockGreen,
        ICONS.iconNoteGreen
    ]);
    const [icons2] = useState([
        ICONS.iconStarYellow,
        ICONS.iconShareBlue,
        ICONS.iconExclamation
    ]);
    const [texts] = useState([
        'Món yêu thích',
        'Món đã xem',
        'Món có ghi chú'
    ]);
    const [texts2] = useState([
        'Đánh giá ứng dụng',
        'Chia sẻ ứng dụng',
        'Thông tin ứng dụng'
    ]);

    // @ts-ignore
    const handlePressIn = (index, setIsPressed) => {
        const newIsPressed = [...isPressed];
        newIsPressed[index] = true;
        setIsPressed(newIsPressed);
    };

    // @ts-ignore
    const handlePressOut = (index, setIsPressed) => {
        const newIsPressed = [...isPressed];
        newIsPressed[index] = false;
        setIsPressed(newIsPressed);
        if (index===0){
            // @ts-ignore
            navigation.navigate(SCREEN.STORAGE_USER_SCREEN, {param:texts[index]});
        } else if (index===1){
            // @ts-ignore
            navigation.navigate(SCREEN.STORAGE_USER_SCREEN, {param:texts[index]});
        } else {
            // @ts-ignore
            navigation.navigate(SCREEN.STORAGE_USER_SCREEN, {param:texts[index]});
        }

    };
    // @ts-ignore
    const handlePressIn2 = (index, setIsPressed) => {
        const newIsPressed = [...isPressed];
        newIsPressed[index] = true;
        setIsPressed(newIsPressed);
    };

    // @ts-ignore
    const handlePressOut2 = (index, setIsPressed) => {
        const newIsPressed = [...isPressed];
        newIsPressed[index] = false;
        setIsPressed(newIsPressed);
        if (index===0){
            console.log('2--1')
        } else if (index===1){
            console.log('2--2')
        } else {
            console.log('2--3')
        }
    };

    // @ts-ignore
    const pressableStyles = (isPressedArray) => (index) => ({
        borderTopLeftRadius: index === 0 ? 20 : 0,
        borderTopRightRadius: index === 0 ? 20 : 0,
        borderBottomStartRadius: index === 2 ? 19 : 0,
        borderBottomEndRadius: index === 2 ? 19 : 0,
        flexDirection: 'row',
        paddingVertical: 19,
        backgroundColor: isPressedArray[index] ? 'rgba(255,210,79,0.7)' : 'transparent',
        ...styles.shadow,
        elevation: index === 0.1 ? 0.01 : 0.3,
    });

    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                title="Cá nhân"
                iconRight2={ICONS.iconSearchWhite}
                showIconRight2={true}
            />
            <View style={styles.content}>
                <View style={[styles.boxShadow,styles.shadow]}>
                {isPressed.map((isPressedState, index) => (
                        <Pressable
                            key={index}
                            onPressIn={() => handlePressIn(index, setIsPressed)}
                            onPressOut={() => handlePressOut(index, setIsPressed)}
                            // @ts-ignore
                            style={pressableStyles(isPressed)(index)}
                        >
                            <Image style={styles.icon} source={icons[index]}/>
                            <Text style={styles.text}>{texts[index]}</Text>
                        </Pressable>
                    ))}
                </View>

                <View style={[styles.boxShadow,styles.shadow,{marginTop: 20}]}>
                    {isPressed2.map((isPressedState, index) => (
                        <Pressable
                            key={index}
                            onPressIn={() => handlePressIn2(index, setIsPressed2)}
                            onPressOut={() => handlePressOut2(index, setIsPressed2)}
                            // @ts-ignore
                            style={pressableStyles(isPressed2)(index)}
                        >
                            <Image style={styles.icon} source={icons2[index]}/>
                            <Text style={styles.text}>{texts2[index]}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'rgba(0,0,0,0.45)',
        shadowOffset: {
            width: 1.95,
            height: 1.95,
        },
        shadowRadius: 2.6,
    },

    boxShadow: {
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:19,
        borderBottomRightRadius:19,
        elevation:1,
    },

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    content: {
        marginTop: 25,
        padding: 20,
    },
    icon: {
        width: 24,
        height: 24,
        marginHorizontal: 20,
    },
    text: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '500',
    },
});

export default UserScreen;
