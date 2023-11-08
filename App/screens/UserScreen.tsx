import React, {useState} from 'react';
import {Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import ICONS from '../theme/icon';

const UserScreen = () => {
    const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
        // Xử lý sự kiện khi người dùng bấm xuống ở đây
        console.log('Bấm xuống');
        setIsPressed(true);
    };

    const handlePressOut = () => {
        // Xử lý sự kiện khi người dùng nhả ra ở đây
        console.log('Nhả ra');
        setIsPressed(false);
    };
    const pressableStyle = isPressed ? [styles.pressable, { backgroundColor: 'yellow' }] : styles.pressable;
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                title="Cá nhân"
                iconLeft={ICONS.iconBack}
                iconRight1={ICONS.iconCategoriesWhite}
                iconRight2={ICONS.iconSearchWhite}
                showIconRight2={true}
            />

            <View style={styles.content}>
                <View style={[styles.subContent, styles.boxShadow, styles.androidShadow1]}>
                    <Pressable
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        style={pressableStyle}>
                        <Image style={styles.icon} source={ICONS.iconHeartRed}/>
                        <Text style={styles.text}>Món yêu thích</Text>
                    </Pressable>
                    <Pressable style={[styles.buttons, styles.boxShadow, styles.androidShadow2]}>
                        <Image style={styles.icon} source={ICONS.iconClockGreen}/>
                        <Text style={styles.text}>Món đã xem</Text>
                    </Pressable>
                    <Pressable style={[styles.buttons,]}>
                        <Image style={styles.icon} source={ICONS.iconNoteGreen}/>
                        <Text style={styles.text}>Món có ghi chú</Text>
                    </Pressable>
                </View>
                <View style={[styles.subContent, styles.boxShadow, styles.androidShadow1]}>
                    <Pressable style={[styles.buttons,]}>
                        <Image style={styles.icon} source={ICONS.iconStarYellow}/>
                        <Text style={styles.text}>Dánh giá ứng dụng</Text>
                    </Pressable>
                    <Pressable style={[styles.buttons, styles.boxShadow, styles.androidShadow2]}>
                        <Image style={styles.icon} source={ICONS.iconShareBlue}/>
                        <Text style={styles.text}>Chia sẻ ứng dụng</Text>
                    </Pressable>
                    <Pressable style={[styles.buttons,]}>
                        <Image style={styles.icon} source={ICONS.iconExclamation}/>
                        <Text style={styles.text}>Thông tin ứng dụng</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    pressable: {
        flexDirection: 'row',
        paddingVertical: 19,
        backgroundColor: 'transparent' // Màu nền mặc định
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    content: {
        marginTop: 25,
        padding: 20,
    },
    subContent: {
        marginBottom: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomStartRadius: 19,
        borderBottomEndRadius: 19,
    },
    buttons: {
        flexDirection: "row",
        paddingVertical: 19,

    },
    boxShadow: {
        shadowColor: 'rgba(0,0,0,0.45)',
        shadowOffset: {
            width: 1.95, // Điều chỉnh giá trị width
            height: 1.95, // Điều chỉnh giá trị height
        },
        shadowRadius: 2.6, // Điều chỉnh giá trị shadowRadius
    },
    androidShadow1: {
        elevation: 1,
        shadowColor: '#000000',
    },
    androidShadow2: {
        borderRadius:0.3,
        elevation: 0.01, // Sử dụng thuộc tính elevation để tạo bóng trên Android?
    },
    icon: {
        width: 24,
        height: 24,
        marginHorizontal: 20,
    },
    text: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '500'
    },
});
export default UserScreen;
