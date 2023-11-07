import React from "react";
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import Animated, {FadeIn, FadeInDown,} from "react-native-reanimated";

import HeaderComponent from '../components/HeaderComponent';
import ICONS from '../theme/icon';
import ButtonTextNameDish from "../components/ButtonTextNameDish";
import ListItemViewCategory from "../components/ListItemViewCategory";
import useSearch from "../containers/useSearch";
import ListItemView from "../components/ListItemViewProduct";

// @ts-ignore
const SearchScreen = () => {
    const {
        nameKey,
        valueInput, setValueInput,
        setKeywordInput,
        listFilter,
        checkData,
        historySearchKeyword,
        onKeywordButton,
        OPDeleteHistory,
    } = useSearch();

    // @ts-ignore
    const renderItem = ({item}) => {
        return (
            <ButtonTextNameDish
                productKeyword={item?.productKeyword}
                onKeywordButton={onKeywordButton} // Truyền hàm xử lý vào ButtonTextNameDish
            />
        );
    };

    // @ts-ignore
    const renderProduct = ({item}) => {
        return (
            <ListItemViewCategory
                iconItem={true}
                titleItem={item?.nameProduct}
                imageItem={item?.imageProduct[0].urlImage}
                product={true}
            />
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                iconLeft={ICONS.iconBackWhite}
                showIconLeft={true}
                showSearchDish2={true}
                setKeywordInput={setKeywordInput}
                valueInput={valueInput}
                setValueInput={setValueInput}
            />
            <View style={styles.contents}>
                <View>
                    <View>
                        <View>
                            <Text style={styles.textKeywordStyle}>Gợi ý từ khóa</Text>
                        </View>
                        <FlatList
                            data={nameKey}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        />
                    </View>
                    <View>
                        {(historySearchKeyword.length !== 0) && (
                            <View style={[styles.textTitleHistory]}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ICONS.iconClockGreen} style={styles.iconHistory}></Image>
                                    <Text style={styles.textKeywordStyle}>Lịch sử tìm kiếm</Text>
                                </View>
                                <TouchableOpacity onPress={OPDeleteHistory}>
                                    <Text>Xóa lịch sử</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        <FlatList
                            data={historySearchKeyword}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        />
                    </View>
                </View>
                {(checkData.length === 0 || listFilter !== null && listFilter.length !== 0) && (
                    <View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Image source={ICONS.iconSearchBlack} style={styles.iconSearch}></Image>
                            <Text style={styles.textResultStyle}>Kết quả tìm kiếm :</Text>
                        </View>
                    </View>
                )}
                {checkData.length === 0 && (
                    <View>
                        <Text style={styles.textNull}>Không tìm thấy kết quả nào !</Text>
                    </View>
                )}
                {listFilter !== null && listFilter.length !== 0 && (
                    // <Animated.FlatList
                    //     entering={FadeInDown.delay(200)}
                    //     data={listFilter}
                    //     renderItem={renderProduct}
                    //     numColumns={2}
                    //     showsVerticalScrollIndicator={false}
                    // />
                    <ListItemView
                    data={listFilter}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD24F',
        borderRadius: 30,
    },
    contents: {
        marginTop: 5,
        flex: 1,
        backgroundColor: '#fff',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        padding: 20,
    },
    iconHistory: {
        width: 17,
        height: 17,
        marginRight: 10,
        marginVertical: 4
    },
    iconSearch: {
        width: 17,
        height: 17,
        marginRight: 10,
        marginVertical: 14
    },

    textKeywordStyle: {
        color: '#000000',
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 3,
    },
    textTitleHistory: {
        marginTop: 20,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textResultStyle: {
        color: '#000000',
        fontSize: 17,
        fontWeight: '500',
        marginTop: 10
    },
    textNull: {
        textAlign: 'center'
    }
});
export default SearchScreen;
