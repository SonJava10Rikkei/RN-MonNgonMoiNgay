import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from "../components/HeaderComponent";
import ICONS from "../theme/icon";
import {useRoute} from "@react-navigation/native";
import ListItemView from "../components/ListItemViewProduct";
import IMAGES from "../theme/images";
import fakeProduct from "../containers/data/fakeProduct";

const StorageUserScreen = () => {
    const {listProduct} =fakeProduct;

    const router = useRoute();

    // @ts-ignore
    const {param} = router.params
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                title={param}
                iconLeft={ICONS.iconBackWhite}
                showIconLeft={true}
            />

            <View style={styles.content}>
                <ListItemView
                    data={listProduct}
                />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content:{
        paddingBottom:90,
    }

})
export default StorageUserScreen;
