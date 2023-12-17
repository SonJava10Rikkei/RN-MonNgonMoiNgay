import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {FadeIn} from "react-native-reanimated";
import {useNavigation} from "@react-navigation/native";
// @ts-ignore
import _ from 'lodash';
import ICONS from "../theme/icon";
import SCREEN from "../navigators/RouteKey";
import UseListItemViewProduct from "../containers/useListItemViewProduct";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListItemViewProduct = (
    {
        data,
        displayTypeRow,
        setStyles,
        numberFlex,
    }: {
        data?: any;
        displayTypeRow: boolean;
        setStyles: number;
        numberFlex: number,
    }) => {

    const navigation = useNavigation()
    const OPDetailItem = (subItem: any) => {
        // @ts-ignore
        navigation.navigate(SCREEN.DETAIL_PRODUCT_SCREEN, {subItem})
    }
    const containerStyles: any = [styles.container];
    const subContainerStyles: any = [];
    if (displayTypeRow) {
        containerStyles.push(styles.flexDirectionColumn);
        subContainerStyles.push(styles.flexDirectionRow);
    } else {
        containerStyles.push(styles.flexDirectionRow);
        subContainerStyles.push(styles.flexDirectionColumn);
    }
    // like logic AsyncStorage
    const [listLikeProducts, setListLikeProducts] = useState([{ id: undefined }]);
    const [likeStatusMap, setLikeStatusMap] = useState(new Map());
    const OPLikeProduct = async (likeId: number) => {
        console.log("like product: likeId", likeId);
        if (likeId !== 0) {
            try {
                const existingLikes = await AsyncStorage.getItem('likeProducts');
                const currentListLikeProducts = existingLikes ? JSON.parse(existingLikes) : [];
                const existingProductIndex = currentListLikeProducts.findIndex((product: any) => product.id === likeId);
                if (existingProductIndex !== -1) {
                    // Nếu đã tồn tại, loại bỏ nó khỏi danh sách
                    const newListLikeProducts = [...currentListLikeProducts];
                    newListLikeProducts.splice(existingProductIndex, 1);
                    await AsyncStorage.setItem('likeProducts', JSON.stringify(newListLikeProducts));
                    setListLikeProducts(newListLikeProducts);

                    // Cập nhật trạng thái like trong likeStatusMap
                    const newLikeStatusMap = new Map(likeStatusMap);
                    newLikeStatusMap.set(likeId, !newLikeStatusMap.get(likeId));
                    setLikeStatusMap(newLikeStatusMap);

                    return;
                }
                // Nếu likeId chưa tồn tại, thêm vào danh sách
                const newProduct = { id: likeId };
                const newListLikeProducts = [newProduct, ...currentListLikeProducts];

                await AsyncStorage.setItem('likeProducts', JSON.stringify(newListLikeProducts));
                setListLikeProducts(newListLikeProducts);

                // Cập nhật trạng thái like trong likeStatusMap
                const newLikeStatusMap = new Map(likeStatusMap);
                newLikeStatusMap.set(likeId, true);
                setLikeStatusMap(newLikeStatusMap);
            } catch (err) {
                console.log("Lỗi OPLikeProduct: ", err);
            }
        }
    };

    // Trong hàm khởi tạo component hoặc một hàm useEffect
    const fetchData = async () => {
        try {
            const existingLikes = await AsyncStorage.getItem('likeProducts');
            const currentListLikeProducts = existingLikes ? JSON.parse(existingLikes) : [];
            // Tạo một đối tượng Map mới với trạng thái like của từng sản phẩm
            const newLikeStatusMap = new Map();
            currentListLikeProducts.forEach((product: any) => {
                newLikeStatusMap.set(product.id, true);
            });
            setLikeStatusMap(newLikeStatusMap);
        } catch (err) {
            console.log("Lỗi khi lấy danh sách đã like: ", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    // set styles
    const itemProductStyle: any = [styles.boxShadow, styles.androidShadow,];
    const viewImgStyle: any = [];
    const itemImgProductStyle: any = [];
    const viewContentStyle: any = [];
    const subContentStyle: any = [];
    const textProductStyle: any = [];
    const iconProductStyle: any = [];
    const iconStyle1: any = []
    const iconStyle2: any = []
    if (setStyles == 0) {
        itemProductStyle.push(styles.content, styles.itemProduct);
        viewImgStyle.push(styles.viewImg);
        itemImgProductStyle.push(styles.itemImgProduct);
        subContentStyle.push(styles.subContent);
        textProductStyle.push(styles.textProduct);
        iconProductStyle.push(styles.iconProduct);
        iconStyle1.push(styles.icon);
        iconStyle2.push(styles.icon);

    } else if (setStyles == 1) {
        itemProductStyle.push(styles.content, styles.itemProduct1);
        viewImgStyle.push(styles.viewImg1);
        itemImgProductStyle.push(styles.itemImgProduct1);
        viewContentStyle.push(styles.viewContent1)
        subContentStyle.push(styles.subContent1);
        textProductStyle.push(styles.textProduct1);
        iconProductStyle.push(styles.iconProduct);
        iconStyle1.push(styles.icon);
        iconStyle2.push(styles.icon);

    } else if (setStyles == 2) {
        itemProductStyle.push(styles.content2, styles.itemProduct2);
        viewImgStyle.push(styles.viewImg2);
        itemImgProductStyle.push(styles.itemImgProduct2);
        viewContentStyle.push(styles.viewContent2);
        subContentStyle.push(styles.subContent2);
        textProductStyle.push(styles.textProduct2);
        iconProductStyle.push(styles.iconProduct2);
        iconStyle1.push(styles.icon2);
        iconStyle2.push(styles.icon3);
    }

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
        >
            <View style={containerStyles}>
                {_.chunk(data, numberFlex).map((item: any, index: number) => (
                    <View key={index} style={subContainerStyles}>
                        {/*@ts-ignore*/}
                        {item.map((subItem, subIndex) => (
                            <TouchableOpacity key={subIndex} onPress={() => OPDetailItem(subItem)}
                                              style={itemProductStyle}>
                                <View style={viewImgStyle}>
                                    <Animated.Image
                                        entering={FadeIn.delay(200)}
                                        source={{uri: subItem?.imageProduct[0]?.urlImage}}
                                        style={itemImgProductStyle}
                                        resizeMode="cover"
                                    />
                                </View>

                                <View style={viewContentStyle}>
                                    <Animated.View
                                        entering={FadeIn.delay(200)}
                                        style={subContentStyle}>
                                        <View>
                                            <Text style={textProductStyle}>{subItem?.nameProduct}</Text>
                                        </View>
                                        <View style={iconProductStyle}>
                                            {likeStatusMap&&

                                                <TouchableOpacity onPress={() => OPLikeProduct(subItem?.id)}>
                                                    <Image
                                                        source={likeStatusMap.get(subItem?.id) ? ICONS?.iconHeartRed : ICONS?.iconHeart}
                                                        resizeMode="contain"
                                                        style={iconStyle1}
                                                    />
                                                </TouchableOpacity>
                                            }

                                            {setStyles == 2 ? null :
                                                <TouchableOpacity>
                                                    <Image source={ICONS?.iconNote} resizeMode="contain"
                                                           style={iconStyle2}/>
                                                </TouchableOpacity>
                                            }
                                        </View>
                                    </Animated.View>

                                </View>


                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    // set1
    container: {
        marginVertical: 30,
        marginHorizontal: 8
    },
    flexDirectionRow: {
        flexDirection: 'row',
    },
    flexDirectionColumn: {
        flexDirection: 'column',
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

    icon: {
        width: 10,
        height: 10,
        padding: 10
    },

    content: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        marginBottom: 20,

    },

// Phần displayStyle 1


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
    viewImg: {
        borderRadius: 6,
        height: 215,
    },
    subContent: {
        flex: 1,
        justifyContent: 'center', // Để căn giữa theo chiều dọc
        alignItems: 'center', // Để căn giữa theo chiều ngang
    },
    textProduct: {
        fontSize: 15,
        marginTop: -50,
        width: 182,
        textAlign: "center",
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

    // styleDisplay 1

    itemProduct1: {
        marginHorizontal: 10,
        marginRight: 10,
    },

    itemImgProduct1: {
        borderRadius: 6,
        width: "100%",
        height: 180,
    },
    viewImg1: {
        borderRadius: 6,
        width: 300,
        height: 180,
        backgroundColor: 'rgba(9,75,241,0.29)'
    },
    viewContent1: {
        position: 'absolute',
        bottom: 0, left: 0,
    },
    subContent1: {
        height: 50,
        backgroundColor: 'rgba(129,128,128,0.22)',
        bottom: 0,
        left: 0,
        right: 0,
        borderBottomEndRadius: 6,
        borderBottomStartRadius: 6,

    },
    textProduct1: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 300,
        color: '#ffffff',
        textAlign: 'center'
    },


    // styleDisplay 2
    content2: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        marginBottom: 1,

    },
    itemProduct2: {
        // width: '100%',
        flexDirection: 'row',
    },
    viewImg2: {},
    itemImgProduct2: {
        borderRadius: 6,
        width: 80,
        height: 80,
    },

    viewContent2: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    subContent2: {
        bottom: 0,
        left: 0,
        right: 0,
        borderBottomEndRadius: 6,
        borderBottomStartRadius: 6,

    },
    textProduct2: {
        fontSize: 16,
        width: 305,
        textAlign: 'center',
        justifyContent: 'center',
        marginRight: 10,
        alignItems: 'center'
    },
    iconProduct2: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        justifyContent: 'space-around',
        padding: 8,
        marginHorizontal: 2,

    },
    icon2: {
        width: 20,
        height: 20,
        padding: 1,
        // top: -10,
        bottom: -10,

    },
    icon3: {
        // width: 10,
        // height: 10,
        // padding: 9,
        // marginBottom: -160,
        // bottom: -10,
    },


});

export default ListItemViewProduct;
