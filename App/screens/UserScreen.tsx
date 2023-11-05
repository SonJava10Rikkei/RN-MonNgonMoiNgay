import React from 'react';
import {StyleSheet, View,} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HeaderComponent from '../components/HeaderComponent';
import ICONS from '../theme/icon';
import ListItemView from "../components/ListItemViewProduct";

const UserScreen = () => {
    const Navigation = useNavigation();
    return (
        <View style={styles.container}>
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
            <ListItemView/>
            {/* </ImageBackground> */}
        </View>
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
