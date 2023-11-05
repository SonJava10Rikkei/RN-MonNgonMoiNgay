import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import RNSpeedometer from "react-native-speedometer";
// @ts-ignore
import _ from 'lodash';
import ICONS from "../theme/icon";
import Animated, {FadeIn} from "react-native-reanimated";

const ListItemViewProduct = (
    {
        data,
    }: {
        data?: any;
    }) => {
    // @ts-ignore
    const OPDetailItem = () => {

    }
    const containerStyle = [styles.container, styles.boxShadow, styles.androidShadow, styles.itemProduct];
    const imageStyle = [styles.itemImgProduct]
    const textStyle = [styles.textProduct];
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={false}
        >
            <SafeAreaView style={{flexDirection: 'column', marginVertical: 5, marginHorizontal: 5}}>
                {/*@ts-ignore*/}
                {_.chunk(data, 2).map((item, index) => (
                    <View key={index} style={{flexDirection: 'row'}}>
                        {/*@ts-ignore*/}
                        {item.map((subItem, subIndex) => (
                            <TouchableOpacity key={subIndex} onPress={() => OPDetailItem()} style={containerStyle}>
                                    <Animated.Image
                                        entering={FadeIn.delay(200)}
                                        source={subItem.imageProduct[0].urlImage}
                                        style={imageStyle}
                                        resizeMode="cover"
                                    />
                                    <Animated.View
                                        entering={FadeIn.delay(200)}
                                        style={styles.content}>
                                        <View>
                                            <Text style={textStyle}>{subItem.nameProduct}</Text>
                                        </View>
                                        <View style={styles.iconProduct}>
                                            <TouchableOpacity>
                                                <Image source={ICONS.iconHeart} resizeMode="contain"
                                                       style={styles.icon}/>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Image source={ICONS.iconNote} resizeMode="contain"
                                                       style={styles.icon}/>
                                            </TouchableOpacity>
                                        </View>
                                    </Animated.View>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </SafeAreaView>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        marginBottom: 20,
    },
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
        elevation: 2, // Sử dụng thuộc tính elevation để tạo bóng trên Android?
    },
    content: {
        flex: 1,
        justifyContent: 'center', // Để căn giữa theo chiều dọc
        alignItems: 'center', // Để căn giữa theo chiều ngang
    },

// Phần product
    itemProduct: {
        marginLeft: 8,
        marginRight: 8,
        height: 215,
    },
    itemImgProduct: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        width: '100%',
        height: 150
    },
    textProduct: {
        fontSize: 15,
        marginTop: -15,
        width: "100%",
    },
    iconProduct: {
        flexDirection: 'row',
        position: 'absolute', // Đặt vị trí là absolute
        bottom: 0, // Đặt bottom là 0 để đặt ở phía dưới
        left: 0, // Đặt left là 0 để căn chỉnh theo viền trái
        right: 0, // Đặt right là 0 để căn chỉnh theo viền phải
        justifyContent: 'space-between', // Để biểu tượng ở hai góc
        padding: 6, // Điều chỉnh khoảng cách xung quanh icon nếu cần
        marginHorizontal: 4,

    },
    icon: {
        width: 10,
        height: 10,
        padding: 10
    },

// Phần Category
    itemCategory: {
        marginLeft: 10,
        marginRight: 10,
        height: 235,
    },
    itemImgCategory: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: 160,
    },
    textNameCategory: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '700',
        textAlign: "center",
        marginHorizontal: 1
    },
    textCountOfCategory: {
        textAlign: "center",
        width: '100%',
    },

});

export default ListItemViewProduct;
