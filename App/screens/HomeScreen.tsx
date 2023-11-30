import React, {useEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import ICONS from '../theme/icon';
import SCREEN from "../navigators/RouteKey";
import HeaderComponent from '../components/HeaderComponent';
import ListItemViewCategory from "../components/ListItemViewCategory";
import categoryApi from "../api/categoryApi";
import productApi from "../api/productApi";
import ButtonListHorizontal from "../components/ButtonListHorizontal";
import SubContentComponent from "../components/SubContentComponent";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [listProducts, setListProducts] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    const [listCategoryRandom, setListCategoryRandom] = useState([{
        id: 1
    }])
    const [listProductCategoryIds, setListProductCategoryIds] = useState([[], [], []]);
    const numColumns = Math.ceil(listCategories.length / 3) | 4;
    const data = [
        {
            id: 1,
            icon: ICONS.iconGraphOrange,
            name: 'Được xem nhiều'
        },
        {
            id: 2,
            icon: ICONS.iconShiningPink,
            name: 'Hôm nay ăn gì'
        },
        {
            id: 3,
            icon: ICONS.iconHeartRed,
            name: 'Món yêu thích'
        },
    ];

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        await categoryApi.getAll().then((response:any) => {
            setListCategories(response.data);
            generateRandom(response.data)
        });
        productApi.getAll([]).then((response:any) => setListProducts(response.data))

    }

    const generateRandom = (data: any) => {
        const randomSortedData = [...data].sort(() => Math.random() - 0.5);
        const selectedElements = randomSortedData.slice(0, 3);
        setListCategoryRandom(selectedElements);
    };

    useEffect(() => {
        // Chắc chắn listCategoryRandom có đủ phần tử để tránh lỗi
        if (listCategoryRandom && listCategoryRandom.length >= 3) {
            // Lặp qua 3 danh mục và gọi hàm tương ứng
            listCategoryRandom.forEach((category, index) => {
                callProductsByCategoryId(category.id, index);
            });
        }
    }, [listCategoryRandom]);
    const callProductsByCategoryId = async (id: any, index: number) => {
        try {
            const res = await fetch(`http://192.168.9.104:3000/api/products?categoryId=${id}`);
            const data = await res.json();
            setListProductCategoryIds(prevState => {
                const updatedList = [...prevState];
                updatedList[index] = data;
                return updatedList;
            });
        } catch (err) {
            console.log(`callProductsByCategoryId${index + 1}`, err);
        }
    };


    const contentNavigationButton = (subItemId: number) => {
        if (subItemId === 1) {
            // @ts-ignore
            navigation.navigate(SCREEN.STORAGE_USER_SCREEN, {param: data[0].name})
        } else if (subItemId === 2) {
            // @ts-ignore
            navigation.navigate(SCREEN.SUGGEST_SCREEN)
        } else {
            // @ts-ignore
            navigation.navigate(SCREEN.STORAGE_USER_SCREEN, {param: data[2].name})
        }
    };

    const OPGotoScreen = () => {
        // @ts-ignore
        navigation.navigate(SCREEN.CATEGORY_SCREEN)
    };
    const OPGotoScreenByCategory1 = () => {
        // @ts-ignore
        navigation.navigate(SCREEN.DETAIL_CATEGORY_SCREEN, {
            takeDetailCategory:listCategoryRandom[0],
            totalDishCount:listProductCategoryIds[0].length,
            productsOfCategory:listProductCategoryIds[0]
        });
    };
    const OPGotoScreenByCategory2 = () => {
        // @ts-ignore
        navigation.navigate(SCREEN.DETAIL_CATEGORY_SCREEN, {
            takeDetailCategory:listCategoryRandom[1],
            totalDishCount:listProductCategoryIds[1].length,
            productsOfCategory:listProductCategoryIds[1]
        });
    };
    const OPGotoScreenByCategory3 = () => {
        // @ts-ignore
        navigation.navigate(SCREEN.DETAIL_CATEGORY_SCREEN, {
            takeDetailCategory:listCategoryRandom[2],
            totalDishCount:listProductCategoryIds[2].length,
            productsOfCategory:listProductCategoryIds[2]
        });
    };

    const render = (item: any) => {
        const totalDishCount = listProducts.reduce((count, product) => {
            // @ts-ignore
            if (product?.categoryId && product?.categoryId === item.id) {
                return count + 1;
            }
            return count;
        }, 0);
        // Hàm lấy ra product có category giống nhau
        const getProductsForCategory = (categoryId = item.id) => {
            // @ts-ignore
            return listProducts.filter((product) => product.categoryId && product.categoryId === categoryId);
        };
        const productsOfCategory = getProductsForCategory(item.id);

        const onDetailCategory = (takeDetailCategory: any) => {
            // @ts-ignore
            navigation.navigate(SCREEN.DETAIL_CATEGORY_SCREEN, {
                takeDetailCategory,
                listCategories,
                listProducts,
                totalDishCount,
                productsOfCategory
            }); // đi đến màn hình và truyền dữ liệu
        };
        return (
            <ListItemViewCategory
                homeScreen={true}
                detailCategory={item}
                titleItem={item?.nameCategory}
                imageItem={item?.avatarCategory}
                totalDishCount={totalDishCount}
                typeCategory={item?.type}
                onDetailCategory={onDetailCategory}
            />
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                iconLeft={ICONS.iconBack}
                iconRight1={ICONS.iconCategoriesWhite}
                iconRight2={ICONS.iconSearchWhite}
                showSearchDish={true}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.content}
            >
                <ButtonListHorizontal
                    data={data}
                    onPressButton={(subItemId: number) => contentNavigationButton(subItemId)}
                />
                <View style={[styles.subContent]}>
                    <View style={[styles.detailSubContent, styles.paddingScreen]}>
                        <View>
                            <Text style={styles.textContent}>Tất cả chuyên mục</Text>
                            {/*@ts-ignore*/}
                            <Text style={styles.textSubContent}>({listCategories?.length} chuyên mục)</Text>
                        </View>
                        <TouchableOpacity onPress={OPGotoScreen} style={styles.btnAllDetail}>
                            <Text style={styles.textBtnAllDetail}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    >
                        <FlatList
                            data={listCategories}
                            renderItem={({item}) => render(item)}
                            key={numColumns.toString()} // Add this key prop
                            numColumns={numColumns}
                            contentContainerStyle={{
                                marginHorizontal: 10,
                            }}
                        />
                    </ScrollView>
                </View>

                <SubContentComponent
                    // @ts-ignore
                    title={listCategoryRandom[0]?.nameCategory}
                    data={listProductCategoryIds[0]}
                    onPress={OPGotoScreenByCategory1}
                />
                <SubContentComponent
                    // @ts-ignore
                    title={listCategoryRandom[1]?.nameCategory}
                    data={listProductCategoryIds[1]}
                    onPress={OPGotoScreenByCategory2}
                />
                <SubContentComponent
                    // @ts-ignore
                    title={listCategoryRandom[2]?.nameCategory}
                    data={listProductCategoryIds[2]}
                    onPress={OPGotoScreenByCategory3}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

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

export default HomeScreen;
