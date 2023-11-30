import React from 'react';
import {Image, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

type Props = {
    iconLeft?: any;
    iconRight?: any;
    value?: string;
    onChangeText?: any;
    placeholder?: string;
    keyboardType?: any;
    secureTextEntry?: boolean;
    onPressImRight?: any;

}
const TextInputComponent = ({
                                iconLeft,
                                iconRight,
                                value,
                                onChangeText,
                                placeholder,
                                keyboardType = 'default',
                                secureTextEntry,
                                onPressImRight,
                            }: Props) => {
    return (
        <View style={styles.container}>
            {iconLeft && <Image source={iconLeft} style={styles.icon}/>}
            <TextInput
                style={styles.tpContainer}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry} // Sử dụng secureTextEntry trực tiếp từ prop
            />
            {iconRight && (
                <TouchableOpacity onPress={onPressImRight}>
                    <Image source={iconRight} style={styles.icon}/>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 50,
        marginBottom: 20,
    },
    icon: {
        width: 24,
        height: 24,
        marginHorizontal: 10,
    },
    tpContainer: {
        flex: 1,
    },
});

export default TextInputComponent;
