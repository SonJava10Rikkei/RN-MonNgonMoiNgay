import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const ButtonTextNameDish = (
    {
        productKeyword,
        onKeywordButton, // Thêm một hàm xử lý khi nút được nhấn
    }:
        {
            productKeyword: string;
            onKeywordButton?: (sentKeyword: string) => void; // Thêm kiểu của hàm xử lý
        }) => {

    const OPSearchByKeyword = () => {
        if (onKeywordButton) {
            onKeywordButton(productKeyword); // Gọi hàm xử lý và truyền keyword
        }
    }

    return (
        <TouchableOpacity onPress={OPSearchByKeyword} style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.textButton}>{productKeyword}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(119,164,164,0.13)',
        padding: 7,
        borderRadius: 15,
        marginTop: 10,
        marginRight: 11,

    },
    textButton: {
        marginHorizontal: 15,
        fontSize: 13,
        fontWeight: '400',
    }
})
export default ButtonTextNameDish;
