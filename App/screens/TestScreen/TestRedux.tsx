import React from 'react'
import {useDispatch} from 'react-redux'

import {Text, TouchableOpacity, View} from "react-native";
import DisplayValue from "./TestReduxToolkit";
import HeaderComponent from "../../components/HeaderComponent";
import {decrement, increment} from '../../redux/ReduxToolkit/CalculatorStateSlice';
import {add, dec} from '../../redux/ReduxToolkit/CountPlusStateSlice';

const Calculator = () => {
    const dispatch = useDispatch();

    return (
        <View>
            <HeaderComponent/>
            <DisplayValue/>
            <View>
                <TouchableOpacity onPress={() => dispatch(increment(Math.floor(Math.random() * 10) + 1))}>
                    <Text>
                        Increment
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(decrement(1))}>
                    <Text>
                        Decrement
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(add(1))}>
                    <Text>
                        add
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(dec(1))}>
                    <Text>
                        dec
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Calculator
