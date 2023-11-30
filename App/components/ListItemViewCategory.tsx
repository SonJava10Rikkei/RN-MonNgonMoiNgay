import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
    homeScreen?: boolean,
    categoryScreen?: boolean,
    detailCategory?: any;
    imageItem: any;
    titleItem: string;
    typeCategory: string;
    totalDishCount?: any;
    onDetailCategory?: (onDetailCategory: any) => void; // Thêm kiểu của hàm xử lý
}
const ListItemViewCategory = ({
                                  homeScreen,
                                  categoryScreen,
                                  detailCategory,
                                  imageItem,
                                  titleItem,
                                  typeCategory,
                                  totalDishCount,
                                  onDetailCategory,
                              }: Props) => {
    const containerStyle = [styles.container, styles.boxShadow, styles.androidShadow];
    const contentStyle = [styles.subContentCategoryScreen];
    const imageStyle = [];
    const textStyle = [];
    if (homeScreen) {
        // @ts-ignore
        containerStyle.push(styles.subContainerHome)
        imageStyle.push(styles.itemImgCategoryHome)
        textStyle.push(styles.textNameHome)
    } else if (categoryScreen) {
        // @ts-ignore
        containerStyle.push(styles.itemCategory)
        imageStyle.push(styles.itemImgCategory)
        textStyle.push(styles.textNameCategory)
    }
    ;

    let count = 0;

    // @ts-ignore
    const OPDetailItem = () => {
        count = count + 1;
        console.log('OPDetailCategory', count + 1)
        if (onDetailCategory) {
            onDetailCategory(detailCategory); // Gọi hàm xử lý và truyền keyword
        }
    }

    return (
        <TouchableOpacity onPress={() => OPDetailItem()} style={containerStyle}>
            <Image
                source={{uri: imageItem}}
                style={imageStyle}
                resizeMode="cover"
            />
            <View style={contentStyle}>
                    <View>
                        <Text style={textStyle}>{titleItem}</Text>
                    </View>
                    <Text style={styles.textCountOfCategory}>{totalDishCount} {typeCategory}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 9,
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

// Phần HomeScreen
    subContainerHome:{
        flexDirection: 'row',
        marginHorizontal:10,
        marginVertical:5,
    },

    itemImgCategoryHome:{
        width:50,
        height:50,
        borderRadius:5,
        margin:4,
    },
    textNameHome:{
        color: '#000000',
        fontSize: 16,
        fontWeight: '500',

        marginHorizontal: 10,
    },

// Phần CategoryScreen
    subContentCategoryScreen: {
        flex: 1,
        justifyContent: 'center', // Để căn giữa theo chiều dọc
        alignItems: 'center', // Để căn giữa theo chiều ngang
    },
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

export default ListItemViewCategory;
