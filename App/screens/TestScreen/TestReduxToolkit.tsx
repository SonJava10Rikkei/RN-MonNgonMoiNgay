import React from 'react'
import {useSelector} from 'react-redux'
import {Text, View} from "react-native";

const DisplayValue = () => {

    // @ts-ignore
    const value = useSelector((state) => state.calculator.value);
    // @ts-ignore
    const count = useSelector((state) => state.counter.count);
    return (
        <View>
            <Text>Gia tri: {value}</Text>
            <Text>Gia tri: {count}</Text>
        </View>
    )
}

export default DisplayValue
