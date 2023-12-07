import React from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import ICONS from "../theme/icon";
import {useRoute} from "@react-navigation/native";

const DetailProductScreen = (
    {}: {}
) => {
    const route = useRoute();
    // @ts-ignore
    const {subItem} = route.params;


    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                title={subItem.nameProduct}
                iconLeft={ICONS.iconBackWhite}
                iconRight1={ICONS.iconHeartWhite}
                iconRight2={ICONS.iconNoteWhite}
                activeDetailProduct={true}
                showIconLeft={true}
                showIconRight1={true}
                showIconRight2={true}
                subItem ={subItem}
            />
            <View>
                <ScrollView
                    style={styles.content}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{marginBottom: 1, paddingBottom: 140}}
                >
                    <View>
                        <Text style={[styles.text, styles.textProduct]}>{subItem.nameProduct}</Text>
                        <Text style={styles.text}>    {subItem.description[0].name} :</Text>
                        <Image style={styles.image} source={{uri:subItem.imageProduct[0].urlImage}}/>
                        <Text
                            style={[styles.text, styles.textContent]}>{subItem.description[0].ingredient.name} :</Text>
                        {/*@ts-ignore*/}
                        {subItem.description[0].ingredient.detail.map((item, index) => (
                            <View key={index} style={{padding: 8}}>
                                {Object.entries(item).map(([key, value]) => (
                                    <Text style={styles.textIngredient} key={key}>{`${key}: ${value}`}</Text>
                                ))}
                            </View>
                        ))}
                    </View>
                    <View>
                        <Text style={[styles.text, styles.textContent]}>{subItem.description[0].makeFood.steps} :</Text>
                        <View>
                            {/*@ts-ignore*/}
                            {subItem.description[0].makeFood.detail.map((item, index) => (
                                <View key={index}>
                                    <Text style={[styles.text, styles.textMakeFood]}>{item.step}</Text>
                                    <Text style={styles.text}>   {item.content}</Text>
                                    {item.image && (
                                        <Image source={{uri:item.image}} style={styles.image} resizeMode="cover"/>
                                    )}
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

    },
    content: {
        padding: 15,
    },
    image: {
        marginVertical: 10,
        marginBottom: 20,
        width: 400,
        height: 220,
    },
    text: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'justify', // Để căn đều cả hai lề
        marginVertical: 10,

    },
    textProduct: {
        color: '#43b937',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textContent: {
        color: '#fc0303',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 25,
    },
    textIngredient: {
        color: '#565454',
        fontSize: 15,
        fontStyle: 'italic',
    },
    textMakeFood: {
        color: '#d0b307',
        fontSize: 18,
        fontWeight: 'bold',
    },

})

export default DetailProductScreen;

