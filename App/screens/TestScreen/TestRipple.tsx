import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Ripple from "../../components/Ripple";

const TestRipple = () => {

    let [count, setCount] = useState(0);
    const onTap = () => {
        // @ts-ignore
        // navigation.navigate(SCREEN.LOGIN_SCREEN)
        setCount(count + 1);
        console.log('tap', count)
    }

    return (
        <View style={styles.container}>
            <Ripple
                style={styles.ripple}
                onTap={() => onTap()}
                rippleScaleColor='rgba(253,0,152,0.62)' // Thay đổi màu scale ở đây
            >
                <Text style={{fontSize: 20, zIndex: 1}}>Tap</Text>
            </Ripple>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: "center",
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 100,
    },
    ripple: {
        width: 200,
        height: 200,
        backgroundColor: '#ffffff',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 25,
        // IOS
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 20,
        // Android
        elevation: 10,
    },


})
export default TestRipple;
