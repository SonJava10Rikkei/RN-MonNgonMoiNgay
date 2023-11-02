import React from 'react';
import {Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SCREEN from '../navigators/RouteKey';
import ICONS from '../theme/icon';

// @ts-ignore
const HeaderComponent = (
    {
        title,
        iconLeft,
        iconRight1,
        iconRight2,
        showIconLeft,
        showSearchDish,
        showSearchDish2,
        showIconRight1,
        showIconRight2,

        setKeywordInput,
        valueInput,
        setValueInput,
        touchNumberColumnCategory,
        setTouchNumberColumnCategory,

    }:
        {
            title?: string;
            iconLeft?: any;
            iconRight1?: any;
            iconRight2?: any;
            showIconLeft?: boolean;
            showSearchDish?: boolean;
            showSearchDish2?: boolean;
            showIconRight1?: boolean;
            showIconRight2?: boolean;

            setKeywordInput?: any;
            valueInput?: any;
            setValueInput?: any;
            touchNumberColumnCategory?: any;
            setTouchNumberColumnCategory?: any;

        }) => {

    const onChangeTextInput = (changeTextInput: string) => {
        setValueInput(changeTextInput)
    }
    const onSubmitKeyword = (submitNativeEvent: string) => {
        setKeywordInput(submitNativeEvent)
    }

    const Navigation = useNavigation();
    const onPressClickButtonLeft = () => {
        Navigation.goBack();
    };
    const onPressSearchDish = () => {
        // @ts-ignore
        Navigation.navigate(SCREEN.SEARCH_SCREEN);
    };
    const onPressButtonRight1 = () => {
        if (touchNumberColumnCategory === 1) {
            setTouchNumberColumnCategory(2)
        } else {
            setTouchNumberColumnCategory(1)
        }
    };
    const onPressButtonRight2 = () => {
        // @ts-ignore
        Navigation.navigate(SCREEN.SEARCH_SCREEN);
    };

    return (
        <View style={styles.box}>
            <StatusBar translucent backgroundColor="transparent"/>
            <View style={styles.header}>
                {showIconLeft && (
                    <TouchableOpacity onPress={onPressClickButtonLeft}>
                        <Image style={styles.iconHeaderLeft} source={iconLeft}/>
                    </TouchableOpacity>
                )}
                {showSearchDish && (
                    <TouchableOpacity onPress={onPressSearchDish}>
                        <View style={styles.searchInput}>
                            <Image source={ICONS.iconSearchGreen} style={styles.iconSearch}/>
                            <TextInput
                                style={styles.textInputContainer}
                                placeholder="Tìm kiếm trong 20.000 món ăn..."
                                editable={false}
                            />
                        </View>
                    </TouchableOpacity>
                )}
                {showSearchDish2 && (
                    <TouchableOpacity>
                        <View style={styles.searchInput2}>
                            <Image source={ICONS.iconSearchGreen} style={styles.iconSearch}/>
                            <TextInput
                                style={styles.textInputContainer2}
                                placeholder="Tìm kiếm"
                                value={valueInput} // Sử dụng giá trị searchText để hiển thị trong ô input
                                onChangeText={(changeTextInput) => onChangeTextInput(changeTextInput)}
                                onSubmitEditing={(event) => {
                                    const submitNativeEvent = event.nativeEvent.text;
                                    onSubmitKeyword(submitNativeEvent);
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                )}
                <View style={styles.textView}>
                    <Text style={styles.text}>{title}</Text>
                </View>

                {showIconRight1 && (
                    <TouchableOpacity onPress={onPressButtonRight1}>
                        <Image style={styles.iconHeaderRight} source={iconRight1}/>
                    </TouchableOpacity>
                )}
                {showIconRight2 && (
                    <TouchableOpacity onPress={onPressButtonRight2}>
                        <Image style={styles.iconHeaderRight} source={iconRight2}/>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    box: {
        backgroundColor: '#FFD24F',
        paddingTop: 36,
        paddingBottom: 10,
        display: 'flex',
    },
    header: {
        flexDirection: 'row',
    },
    iconHeaderLeft: {
        width: 16,
        height: 16,
        marginLeft: 15,
        marginVertical: 10
    },
    iconHeaderRight: {
        width: 22,
        height: 22,
        marginLeft: 15,
        marginRight: 15,
        marginVertical: 5,

    },

    textView: {
        flex: 1,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 15,
        marginVertical: 5,
    },

    searchInput: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        alignSelf: 'center',
        borderRadius: 6,
        marginHorizontal: 15,
    },
    searchInput2: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        alignSelf: 'center',
        borderRadius: 50,
    },
    iconSearch: {
        width: 19,
        height: 19,
        marginLeft: 15,
    },
    textInputContainer: {
        backgroundColor: 'transparent',
        width: '90%',
        fontSize: 14,
        marginLeft: 5,
    },
    textInputContainer2: {
        backgroundColor: 'transparent',
        padding:5,
        width: '80%',
        fontSize: 14,
        marginLeft: 5,
    },
});

export default HeaderComponent;
