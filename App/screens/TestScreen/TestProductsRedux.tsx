import React, {useEffect} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from "../../hooks/Hooks";
import {
    homeAction,
    selectHomeHighestProductList,
    selectHomeLoading,
    selectHomeLowestProductList,
    selectHomeRankingByCategoryList,
    selectHomeStatistics
} from "../../redux/RuduxToolkitSaga/home/homeSlice";

const TestProductsRedux = () => {
    const aa: any = []

    const dispatch = useAppDispatch()
    const loading = useAppSelector(selectHomeLoading);
    const statistics = useAppSelector(selectHomeStatistics);
    const highestProductList = useAppSelector(selectHomeHighestProductList);
    const lowestProductList = useAppSelector(selectHomeLowestProductList);
    const rankingByCategoryList = useAppSelector(selectHomeRankingByCategoryList);

    // console.log('loading: ',JSON.stringify(loading,null,2) )
    // console.log('statistics: ',JSON.stringify(statistics,null,2) )
    // console.log('highestProductList: ',JSON.stringify(highestProductList,null,2) )
    // console.log('lowestProductList: ',JSON.stringify(lowestProductList,null,2) )
    // console.log('rankingByCategoryList: ',JSON.stringify(rankingByCategoryList,null,2) )


    useEffect(() => {
        dispatch(homeAction.fetchData());
    }, [dispatch]);


    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
        >

            <Text>TestProductsRedux</Text>
            <FlatList
                data={aa}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={{margin: 10}}>
                        <Text>{item.name}</Text>
                        {/* Add other product details as needed */}
                    </View>
                )}
            />


        </ScrollView>
    );
};

export default TestProductsRedux;
