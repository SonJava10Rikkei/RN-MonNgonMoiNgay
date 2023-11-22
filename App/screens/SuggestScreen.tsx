import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View,} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import ListItemViewProduct from "../components/ListItemViewProduct";
import productApi from "../api/productApi";

const SuggestScreen = () => {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        // @ts-ignore
        productApi.getAll().then((response) => setListProducts(response.data))
    }, [])

    // Hàm lấy ra product có category giống nhau
    // @ts-ignore
    const getProductsForCategory = (categoryId) => {
        // @ts-ignore
        return listProducts.filter((product) => product.categoryId && product.categoryId === categoryId);
    };
    const productsOfCategory = getProductsForCategory(1);
    const productsOfCategory2 = getProductsForCategory(4);
    const productsOfCategory3 = getProductsForCategory(6);


    // @ts-ignore
    const getRandomProducts = (productsOfCategory, count = 2) => {
        const randomIndex = Math.floor(Math.random() * (productsOfCategory.length - count + 1));
        return productsOfCategory.slice(randomIndex, randomIndex + count);
    };
    const randomProducts = getRandomProducts(productsOfCategory);
    const randomProducts2 = getRandomProducts(productsOfCategory2);
    const randomProducts3 = getRandomProducts(productsOfCategory3);

    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                title="Gợi ý hôm nay"

            />
            <ScrollView style={styles.content}>
                <View style={styles.subContent}>
                    <Text style={styles.text}>Món Chính</Text>
                    <ListItemViewProduct
                        data={randomProducts}
                    />
                </View>
                <View style={[styles.subContentMid, styles.subContent]}>
                    <Text style={styles.text}>Món Rau, Canh</Text>
                    <ListItemViewProduct
                        data={randomProducts2}
                    />
                </View>

                <View style={styles.subContent}>
                    <Text style={styles.text}>Món Tráng Miệng, Khai Vị</Text>
                    <ListItemViewProduct
                        data={randomProducts3}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: 'red',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
    },
    content: {},
    subContent: {
        backgroundColor: '#ffffff',
    },
    subContentMid: {
        borderColor: 'rgba(0,0,0,0.03)',
        borderTopWidth: 10,
        borderBottomWidth: 10,
    }

});

export default SuggestScreen;
