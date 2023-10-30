import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ICONS from "../theme/icon";

const ItemViewDish = ({
                          imageProduct,
                          title,
                          imageHeart,
                      }: {
    imageProduct?: any;
    title?: string;
    imageHeart?: boolean;
}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={imageProduct}
                style={{width: '100%', height: 150}}
                resizeMode="cover"
            />
            <View style={styles.textView}>
                <Text style={styles.text}>{title}</Text>
            </View>
            {imageHeart &&
                <TouchableOpacity>
                    <Image source={ICONS.iconHeart} resizeMode="contain" style={styles.icon}/>
                </TouchableOpacity>
            }
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        padding: 6,
        borderWidth: 0.5,
        margin: 6,
    },

    textView: {
        width: 150,
    },
    text: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 16,
    },

    icon: {
        width: 20,
        height: 20,
    },
});

export default ItemViewDish;
