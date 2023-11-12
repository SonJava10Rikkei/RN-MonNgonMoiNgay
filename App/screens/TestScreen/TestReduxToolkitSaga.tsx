import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsFetch} from '../../redux/RuduxToolkitSaga/reducers/slices/productsSlice';
// @ts-ignore
import _ from 'lodash';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const TestReduxToolkitSaga = () => {
    // @ts-ignore
    const listProducts = useSelector((state) => state.productsReducer.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsFetch());
    }, [dispatch]);

    return (
        <View>
            <Text>Test</Text>
            <Text>{listProducts[0]?.title}</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <View style={{flexDirection: 'column'}}>
                    {/*@ts-ignore*/}
                    {_.chunk(listProducts, 1).map((item, index) => (
                        <View key={index} style={{flexDirection: 'row'}}>
                            {/*@ts-ignore*/}
                            {item.map((subItem, subIndex) => (
                                <View key={subIndex}>
                                    <Text>{subItem.title}</Text>
                                    <Image style={styles.img} source={{uri: subItem.thumbnail}}/>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50,
    }
});

export default TestReduxToolkitSaga;
