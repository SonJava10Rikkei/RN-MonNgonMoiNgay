import React from "react";
import {StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {useRoute} from '@react-navigation/native';
import HeaderComponent from "../components/HeaderComponent";
import ICONS from "../theme/icon";
import ItemViewDish from "../components/itemViewDish";
import Animated, {FadeIn, FadeInDown,} from "react-native-reanimated";

const DetailCategory = () => {

    const {width} = useWindowDimensions();
    const route = useRoute();
    // @ts-ignore
    const {takeDetailCategory, totalDishCount, productsOfCategory} = route.params;

    // @ts-ignore
    const renderProduct = ({item}) => {
        return (
            <ItemViewDish
                iconItem={true}
                titleItem={item?.nameProduct}
                imageItem={item?.imageProduct[0].urlImage}
                product={true}
            />
        );
    };
    return (
        <View style={styles.container}>
            <HeaderComponent
                title={takeDetailCategory.nameCategory}
                iconLeft={ICONS.iconBackWhite}
                showIconLeft={true}
                detailStyle={true}
            />
            <View>
                <Animated.FlatList
                    entering={FadeInDown.delay(200)}
                    ListHeaderComponent={() => (
                        <View style={styles.container}>
                            <Animated.Image
                                sharedTransitionTag={takeDetailCategory.nameCategory}
                                source={takeDetailCategory.avatarCategory}
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
                    )}
                    data={productsOfCategory}
                    renderItem={renderProduct}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{marginTop: 0, paddingBottom: 10}}

                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
        marginBottom: 25
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

export default DetailCategory;
