import React from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import ICONS from '../theme/icon';
import ButtonTextNameDish from "../components/buttonTextNameDish";
import ItemViewDish from "../components/itemViewDish";
import useSearch from "../containers/useSearch";

// @ts-ignore
const SearchScreen = ({}) => {
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
            <ItemViewDish
                imageHeart={true}
                title={item?.nameProduct}
                imageProduct={item?.imageProduct[0].urlImage}
            />
        );
    };
    return (
        <View style={styles.container}>
            <HeaderComponent
                iconLeft={ICONS.iconBackWhite}
                showIconLeft={true}
                showSearchDish2={true}
                setKeywordInput={setKeywordInput}
                valueInput={valueInput}
                setValueInput={setValueInput}
            />
            <View style={styles.container2}>
                <View>
                    <View>
                        <View>
                            <Text style={styles.text1}>Gợi ý từ khóa</Text>
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
                            <View style={[styles.textTitle]}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ICONS.iconClockGreen} style={styles.icon}></Image>
                                    <Text style={styles.text1}>Lịch sử tìm kiếm</Text>
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
                            <Image source={ICONS.iconSearchBlack} style={styles.icon2}></Image>
                            <Text style={styles.textTitle2}>Kết quả tìm kiếm :</Text>
                        </View>
                    </View>
                )}
                {checkData.length === 0 && (
                    <View>
                        <Text style={styles.textNull}>Không tìm thấy kết quả nào !</Text>
                    </View>
                )}
                {listFilter !== null && listFilter.length !== 0 && (
                    <FlatList
                        data={listFilter}
                        renderItem={renderProduct}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD24F',
        borderRadius: 30,

    },
    container2: {
        marginTop: 5,
        flex: 1,
        backgroundColor: '#fff',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        padding: 20,
    },
    icon: {
        width: 17,
        height: 17,
        marginRight: 10,
        marginVertical: 4
    },
    icon2: {
        width: 17,
        height: 17,
        marginRight: 10,
        marginVertical: 14
    },

    text1: {
        color: '#000000',
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 3,
    },
    textTitle: {
        marginTop: 30,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textTitle2: {
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
