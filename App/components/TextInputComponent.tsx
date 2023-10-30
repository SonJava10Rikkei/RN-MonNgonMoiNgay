import React from 'react';
import {Image, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

const TextInputComponent = ({
                                iconLeft,
                                iconRight,
                                value,
                                onChangeText,
                                placeholder,
                                keyboardType = 'default',
                                secureTextEntry,
                                onPressImRight,
                            }: {
    iconLeft?: any;
    iconRight?: any;
    value?: string;
    onChangeText?: any;
    placeholder?: string;
    keyboardType?: any;
    secureTextEntry?: boolean;
    onPressImRight?: any;
}) => {
    return (
        <View style={styles.containerItem}>
            {iconLeft && <Image source={iconLeft} style={styles.icon}/>}
            <TextInput
                style={styles.tpcontainer}
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
    containerItem: {
        borderWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    icon: {
        width: 24,
        height: 24,
        marginHorizontal: 10,
    },
    tpcontainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});

export default TextInputComponent;
