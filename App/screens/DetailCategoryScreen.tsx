import React, {useRef} from "react";
import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {useRoute} from '@react-navigation/native';
import HeaderComponent from "../components/HeaderComponent";
import ICONS from "../theme/icon";
import Animated, {FadeIn,} from "react-native-reanimated";
import ListItemViewProduct from "../components/ListItemViewProduct";
import IMAGES from "../theme/images";


const DetailCategoryScreen = () => {

    const {width} = useWindowDimensions();
    const route = useRoute();
    // @ts-ignore
    const {takeDetailCategory, totalDishCount, productsOfCategory} = route.params;
    return (
        <View style={styles.container}>
            <HeaderComponent
                title={takeDetailCategory.nameCategory}
                iconLeft={ICONS.iconBackWhite}
                showIconLeft={true}
                detailStyle={true}
            />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
            >
                <View>
                    <View style={styles.container}>
                        <Animated.Image
                            sharedTransitionTag={takeDetailCategory.nameCategory}
                            source={{uri:takeDetailCategory.avatarCategory}}
                            style={{width: width, height: 260}}
                        />
                        <Animated.View
                            entering={FadeIn.delay(500)}
                            style={styles.textContainer}>
                            <Text style={styles.textNameCategory}>{takeDetailCategory.nameCategory}</Text>
                            <Text
                                style={styles.textCountCategory}>{totalDishCount} {takeDetailCategory.type}</Text>
                        </Animated.View>
                    </View>
                    <ListItemViewProduct
                        data={productsOfCategory}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
    },
    textContainer: {
        position: 'absolute',
        bottom: 10,
        backgroundColor: 'rgba(0,0,0,0.41)',
        left: 15,
        right: 15,
        padding: 2,
        borderRadius: 30,
    },
    textNameCategory: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    },
    textCountCategory: {
        color: '#ffffff',
        fontSize: 13,
        textAlign: "center",

    },

});

export default DetailCategoryScreen;
