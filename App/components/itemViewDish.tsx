import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ICONS from "../theme/icon";

const ItemViewDish = ({
                          imageProduct,
                          title,
                          imageHeart,
                          product,
                          category,
                          totalDish,
                          totalDishCount,
                          typeCategory,

                      }: {
    imageProduct?: any;
    title?: string;
    imageHeart?: boolean;
    product?: boolean;
    category?: boolean;
    totalDish?: boolean;
    totalDishCount?: any;
    typeCategory?: string;

}) => {
    const textStyle = [];
    const containerStyle = [styles.container, styles.boxShadow, styles.androidShadow];
    if (product) {
        // @ts-ignore
        containerStyle.push(styles.useProduct);
        textStyle.push(styles.textProduct)
    } else if (category) {
        // @ts-ignore
        containerStyle.push(styles.useCategory);
        textStyle.push(styles.textCategory)
    }

    return (
        <TouchableOpacity style={containerStyle}>
            <Image
                source={imageProduct}
                style={[styles.itemImg, {width: '100%', height: 160}]}
                resizeMode="cover"
            />
            <View style={styles.textContent}>
                <View>
                    <Text style={textStyle}>{title}</Text>
                </View>
                {imageHeart &&
                    <TouchableOpacity>
                        <Image source={ICONS.iconHeart} resizeMode="contain" style={styles.icon}/>
                    </TouchableOpacity>
                }
                {totalDish &&
                    <View style={styles.textView}>
                        <Text style={styles.textCountCategory}>{totalDishCount} {typeCategory}</Text>
                    </View>
                }
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        // margin: 15,
        backgroundColor: '#ffffff',

    },
    useProduct: {
        height: 200,

    },
    useCategory: {
        marginTop: 16,
        marginLeft: 15,
        marginRight: 15,
        height: 235,
    }
    ,
    boxShadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowRadius: 4,
        shadowOpacity: 0.6,
    },
    androidShadow: {
        elevation: 3, // Sử dụng thuộc tính elevation để tạo bóng trên Android?
    }
    ,
    itemImg: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContent: {
        padding: 10,
    }
    ,
    textView: {

    },
    textProduct: {
        fontSize: 14,
    },
    textCategory: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '700',
        textAlign:"center"
    },
    textCountCategory: {
        fontSize: 14,
        textAlign:"center"
    }
    ,
    icon: {
        width: 15,
        height: 15,
    },
});

export default ItemViewDish;
