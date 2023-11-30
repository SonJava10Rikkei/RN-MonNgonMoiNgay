import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {FadeIn} from "react-native-reanimated";
import {useNavigation} from "@react-navigation/native";
// @ts-ignore
import _ from 'lodash';
import ICONS from "../theme/icon";
import SCREEN from "../navigators/RouteKey";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListItemViewProduct = (
    {
        data,
    }: {
        data?: any;
    }) => {
    const navigation = useNavigation()
    const OPDetailItem = (subItem: any) => {
        // @ts-ignore
        navigation.navigate(SCREEN.DETAIL_PRODUCT_SCREEN, {subItem})
    }

    // like logic AsyncStorage
    const [listLikeProducts, setListLikeProducts] = useState([]);
    const OPLikeProduct = async (likeId: number) => {
        console.log("like product: likeId", likeId);
        if (likeId !== 0) {
            const newListLikeProducts = [likeId, ...listLikeProducts];
            try {
                await AsyncStorage.setItem('productId', JSON.stringify(likeId));
            } catch (err) {
                console.log("Lỗi OPlikeProduct: ", err);
            }
            // @ts-ignore
            setListLikeProducts(newListLikeProducts);
        }
    }

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={false}
        >
            <View style={{flexDirection: 'column', marginVertical: 30, marginHorizontal: 8}}>
                {_.chunk(data, 2).map((item:any, index:number) => (
                    <View key={index} style={{flexDirection: 'row'}}>
                        {/*@ts-ignore*/}
                        {item.map((subItem, subIndex) => (
                            <TouchableOpacity key={subIndex} onPress={() => OPDetailItem(subItem)}
                                              style={[styles.container, styles.boxShadow, styles.androidShadow, styles.itemProduct]}>
                                <Animated.Image
                                    entering={FadeIn.delay(200)}
                                    source={{uri: subItem?.imageProduct[0]?.urlImage}}
                                    style={[styles.itemImgProduct]}
                                    resizeMode="cover"
                                />
                                <Animated.View
                                    entering={FadeIn.delay(200)}
                                    style={styles.content}>
                                    <View>
                                        <Text style={[styles.textProduct]}>{subItem?.nameProduct}</Text>
                                    </View>
                                    <View style={styles.iconProduct}>
                                        <TouchableOpacity onPress={() => OPLikeProduct(subItem?.id)}>
                                            <Image source={ICONS?.iconHeart} resizeMode="contain"
                                                   style={styles.icon}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={ICONS?.iconNote} resizeMode="contain"
                                                   style={styles.icon}/>
                                        </TouchableOpacity>
                                    </View>
                                </Animated.View>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
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
        marginTop: -20,
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
});

export default ListItemViewProduct;
