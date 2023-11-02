import React, {useState} from 'react';
import {FlatList, StyleSheet, View,} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import ICONS from '../theme/icon';
import ItemViewDish from '../components/itemViewDish';
import fakeProduct from "../containers/data/fakeProduct";

const CategoryScreen = () => {
    const [touchNumberColumnCategory, setTouchNumberColumnCategory] = useState(1);

    const {
        listCategories,
        listProduct,
    } = fakeProduct;

    // @ts-ignore
    const render = ({item}) => {
        const totalDishCount = listProduct.reduce((count, product) => {
            if (product.category && product.category.idCategory === item.idCategory) {
                return count + 1;
            }
            return count;
        }, 0);

        return (
            <ItemViewDish
                titleItem={item?.nameCategory}
                imageItem={item?.avatarCategory}
                category={true}
                totalDish={true}
                totalDishCount={totalDishCount}
                typeCategory={item?.type}
            />
        );
    };
    return (
        <View style={styles.container}>
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
                        paddingBottom:30
                    }}
                />
            </View>

        </View>
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
