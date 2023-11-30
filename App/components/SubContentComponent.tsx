// SubContentComponent.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ListItemViewProduct from '../components/ListItemViewProduct';

type Props = {
    title?:string,
    data?:any,
    onPress?:any
}
const SubContentComponent = ({ title, data, onPress }:Props) => (
    <View style={[styles.subContent, styles.paddingScreen]}>
        <View style={styles.detailSubContent}>
            <View>
                <Text style={styles.textContent}>{title}</Text>
                <Text style={styles.textSubContent}>({data?.length} món)</Text>
            </View>
            <TouchableOpacity onPress={onPress} style={styles.btnAllDetail}>
                <Text style={styles.textBtnAllDetail}>Xem tất cả</Text>
            </TouchableOpacity>
        </View>
        <ListItemViewProduct data={data} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
    paddingScreen: {
        paddingHorizontal: 10,
    },
    content: {},
    subContent: {
        paddingVertical: 10,
        borderColor: 'rgba(0,0,0,0.03)',
        borderTopWidth: 10,
        borderBottomWidth: 10,
    },
    detailSubContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    textContent: {
        color: '#070707',
        fontSize: 18,
        fontWeight: '500',
    },
    textSubContent: {
        color: '#070707',
    }
    ,
    btnAllDetail: {
        backgroundColor: '#4BA468',
        borderRadius: 20,
        width: 100,
        height: 28,
        marginVertical: 10,

    },
    textBtnAllDetail: {
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        marginVertical: 3,
    }


});
export default SubContentComponent;
