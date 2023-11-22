import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View,} from 'react-native';
import {useNavigation} from "@react-navigation/native";

import HeaderComponent from '../components/HeaderComponent';
import ListItemViewCategory from '../components/ListItemViewCategory';
import categoryApi from "../api/categoryApi";
import productApi from "../api/productApi";
import SCREEN from "../navigators/RouteKey";
import ICONS from '../theme/icon';

const CategoryScreen = () => {
    const [listCategories, setListCategories] = useState([]);
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        // @ts-ignore
        categoryApi.getAll().then((response) => setListCategories(response.data))
        // @ts-ignore
        productApi.getAll().then((response) => setListProducts(response.data))
    }, [])

    const navigation = useNavigation();
    const [touchNumberColumnCategory, setTouchNumberColumnCategory] = useState(1);

    // @ts-ignore
    const render = ({item}) => {
        const totalDishCount = listProducts.reduce((count, product) => {
            // @ts-ignore
            if (product?.categoryId && product?.categoryId === item.id) {
                return count + 1;
            }
            return count;
        }, 0);
        // Hàm lấy ra product có category giống nhau
        const getProductsForCategory = (categoryId = item.id) => {
            // @ts-ignore
            return listProducts.filter((product) => product.categoryId && product.categoryId === categoryId);
        };
        const productsOfCategory = getProductsForCategory(item.id);

        // @ts-ignore
        const onDetailCategory = (takeDetailCategory) => {
            // @ts-ignore
            navigation.navigate(SCREEN.DETAIL_CATEGORY_SCREEN, {
                takeDetailCategory,
                listCategories,
                listProducts,
                totalDishCount,
                productsOfCategory
            }); // đi đến màn hình và truyền dữ liệu
        };
        return (
            <ListItemViewCategory
                detailCategory={item}
                titleItem={item?.nameCategory}
                imageItem={item?.avatarCategory}
                category={true}
                totalDish={true}
                totalDishCount={totalDishCount}
                typeCategory={item?.type}
                onDetailCategory={onDetailCategory}
            />
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                title="Chuyên mục"
                iconLeft={ICONS.iconBack}
                iconRight1={touchNumberColumnCategory === 1 ? ICONS.iconCategoriesWhite : ICONS.iconListWhite}
                iconRight2={ICONS.iconSearchWhite}
                showIconRight1={true}
                showIconRight2={true}
                touchNumberColumnCategory={touchNumberColumnCategory}
                setTouchNumberColumnCategory={setTouchNumberColumnCategory}
            />
            <View style={styles.contents}>
                <FlatList
                    data={listCategories}
                    renderItem={render}
                    numColumns={touchNumberColumnCategory}
                    showsVerticalScrollIndicator={false}
                    key={touchNumberColumnCategory.toString()} // Add this key prop
                    contentContainerStyle={{
                        marginTop: 20,
                        paddingBottom: 30
                    }}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    contents: {
        flex: 1,
    },
});

export default CategoryScreen;
