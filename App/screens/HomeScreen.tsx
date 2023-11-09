import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View,} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HeaderComponent from '../components/HeaderComponent';
import ICONS from '../theme/icon';
import ListItemViewCategory from '../components/ListItemViewCategory';
import fakeProduct from "../containers/data/fakeProduct";

const HomeScreen = () => {
    const Navigation = useNavigation();
    const listProduct = fakeProduct;

    // @ts-ignore
    const render = ({item}) => {
        return (
            <ListItemViewCategory
                iconItem={item?.imageLike}
                titleItem={item?.title}
                imageItem={item?.imageProduct}
                product={true}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                iconLeft={ICONS.iconBack}
                iconRight1={ICONS.iconCategoriesWhite}
                iconRight2={ICONS.iconSearchWhite}
                showSearchDish={true}
            />
            <ScrollView>
                <View>
                    <Text>Man Chinh</Text>
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
        color: '#ff0000',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
});

export default HomeScreen;
