import React, {useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/testHooks';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementIfOdd,
    incrementSaga,
    selectCount,
} from '../../redux/RuduxToolkitSaga/reducers/slices/testCounter/testCounterSlice';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export function TestCounter() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <View style={styles.container}>
            <View style={styles.calculator}>
                <TouchableOpacity
                    aria-label="Decrement value"
                    onPress={() => dispatch(decrement())}
                >
                    <Text style={[styles.text]}>
                        -
                    </Text>
                </TouchableOpacity>
                <Text style={styles.text}>
                    Count: {count}
                </Text>
                <TouchableOpacity
                    onPress={() => dispatch(increment())}
                >
                    <Text style={styles.text}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{marginHorizontal: 10}}>
                        Amount:
                    </Text>
                    <TextInput style={styles.textInput}
                               aria-label="Set increment amount"
                               value={incrementAmount.toString()}  // Convert to string if needed
                               onChangeText={(number) => setIncrementAmount(number)}
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        onPress={() => dispatch(incrementByAmount(incrementValue))}
                    >
                        <Text style={[styles.text]}>
                            Add Amount
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => dispatch(incrementSaga(incrementValue))}
                    >
                        <Text style={[styles.text]}>
                            Add Async Saga
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => dispatch(incrementIfOdd(incrementValue))}>
                        <Text style={[styles.text]}>

                            Add If Odd
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    calculator: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    text: {
        fontSize: 20,
        color: '#015aff',
        marginHorizontal: 10,
    },
    textInput: {
        borderWidth: 0.6,
        backgroundColor: 'rgba(90,243,14,0.63)',
        alignItems: 'center',
        width: '20%',
        borderRadius: 10,
    }
})
