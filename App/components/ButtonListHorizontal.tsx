// ButtonListHorizontal.js

import React from 'react';
import {Image, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

type Props = {
    data?: any,
    onPressButton?: any,
};
const ButtonListHorizontal = ({
                                  data,
                                  onPressButton,
                              }: Props) => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
        >
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                {data.map((item: any, index: number) => (
                    <View key={index} style={{flexDirection: 'column'}}>
                        <Pressable
                            key={item.id}
                            onPress={() => onPressButton(item.id)}
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed ? 'rgb(234,193,78)' : '#4BA468',
                                },
                                styles.contentButton,
                            ]}
                        >
                            <View style={styles.button}>
                                <View style={styles.containerIcon}>
                                    <Image style={styles.icon} source={item?.icon}/>
                                </View>
                                <Text style={styles.text}>{item?.name}</Text>
                            </View>
                        </Pressable>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contentButton: {
        marginVertical: 20,
        borderRadius: 50,
        padding: 3,
        marginHorizontal:8,
    },
    button: {
        flexDirection: 'row',
    },
    containerIcon: {
        width: 25,
        height: 25,
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    icon: {
        width: 15,
        height: 15,
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontWeight: '500',
        marginHorizontal: 5,
        marginVertical: 2,
    },
});

export default ButtonListHorizontal;
