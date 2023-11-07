import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HeaderComponent from '../components/HeaderComponent';
import ICONS from '../theme/icon';
import ListItemView from "../components/ListItemViewProduct";
import DetailProductScreen from "./DetailProductScreen";
import SCREEN from "../navigators/RouteKey";

const UserScreen = () => {
    const navigation = useNavigation()
    const OPGotoDetailProduct = () => {
        // @ts-ignore
        navigation.navigate(SCREEN.DETAIL_PRODUCT)
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* <ImageBackground source={IMAGES.backgroundHistory} style={styles.container}> */}
            <HeaderComponent
                title="Cá nhân"
                iconLeft={ICONS.iconBack}
                iconRight1={ICONS.iconCategoriesWhite}
                iconRight2={ICONS.iconSearchWhite}
                // showIconLeft={true}
                // showSearchDish={true}
                // showIconRight1={true}
                showIconRight2={true}
            />
            <TouchableOpacity onPress={OPGotoDetailProduct}>
                <Text>OPGotoDetailProduct</Text>
            </TouchableOpacity>
            {/* </ImageBackground> */}
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
    },
});
export default UserScreen;
