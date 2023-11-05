import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ICONS from "../theme/icon";
import {useNavigation} from "@react-navigation/native";

const ListItemViewCategory = ({
                          detailCategory,
                          imageItem,
                          titleItem,
                          iconItem,
                          product,
                          category,
                          totalDish,
                          totalDishCount,
                          typeCategory,
                          onDetailCategory,


                      }: {
    detailCategory?:any;
    imageItem?: any;
    titleItem?: string;
    iconItem?: boolean;
    product?: boolean;
    category?: boolean;
    totalDish?: boolean;
    totalDishCount?: any;
    typeCategory?: string;
    onDetailCategory?: (onDetailCategory: any) => void; // Thêm kiểu của hàm xử lý

}) => {
    const containerStyle = [styles.container, styles.boxShadow, styles.androidShadow];
    const imageStyle = []
    const textStyle = [];
    if (product) {
        // @ts-ignore
        containerStyle.push(styles.itemProduct)
        imageStyle.push(styles.itemImgProduct)
        textStyle.push(styles.textProduct)

    } else if (category) {
        // @ts-ignore
        containerStyle.push(styles.itemCategory)
        textStyle.push(styles.textNameCategory)
        imageStyle.push(styles.itemImgCategory)
    }

    const Navigation = useNavigation();

    let count = 0;

    // @ts-ignore
    const OPDetailItem = () => {
        count=count+1;
        console.log('OPDetailCategory', count +1)
        if (onDetailCategory) {
            onDetailCategory(detailCategory); // Gọi hàm xử lý và truyền keyword
        }
    }

    return (
        <TouchableOpacity onPress={()=>OPDetailItem()} style={containerStyle}>
            <Image
                source={imageItem}
                style={imageStyle}
                resizeMode="cover"
            />
            <View style={styles.content}>
                <View>
                    <Text style={textStyle}>{titleItem}</Text>
                </View>
                {iconItem &&
                    <View style={styles.iconProduct}>
                        <TouchableOpacity>
                            <Image source={ICONS.iconHeart} resizeMode="contain" style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={ICONS.iconNote} resizeMode="contain" style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                }
                {totalDish &&
                    <Text style={styles.textCountOfCategory}>{totalDishCount} {typeCategory}</Text>
                }
            </View>
        </TouchableOpacity>
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
     marginTop:-20,
        width: '100%',
    },
    iconProduct: {
        flexDirection: 'row',
        position: 'absolute', // Đặt vị trí là absolute
        bottom: 0, // Đặt bottom là 0 để đặt ở phía dưới
        left: 0, // Đặt left là 0 để căn chỉnh theo viền trái
        right: 0, // Đặt right là 0 để căn chỉnh theo viền phải
        justifyContent: 'space-between', // Để biểu tượng ở hai góc
        padding: 6, // Điều chỉnh khoảng cách xung quanh icon nếu cần
        marginHorizontal:4,

    },
    icon: {
        width: 10,
        height: 10,
        padding:10
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
        marginHorizontal:1
    },
    textCountOfCategory: {
        textAlign: "center",
        width: '100%',
    },

});

export default ListItemViewCategory;
