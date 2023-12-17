import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {productActions, selectProducts} from "../redux/RuduxToolkitSaga/product/productSlice";
import {useEffect, useState} from "react";
import ICONS from "../theme/icon";
import categoryApi from "../api/categoryApi";
import productApi from "../api/productApi";
import SCREEN from "../navigators/RouteKey";
import AsyncStorage from "@react-native-async-storage/async-storage";


const useHome = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const listProducts = useSelector(selectProducts);

    const [listCategories, setListCategories] = useState([]);
    const [listCategoryRandom, setListCategoryRandom] = useState([{
        id: 1,
        nameCategory: '',
        type: '',
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


    const fetchData = async () => {
        dispatch(productActions.getProductsFetch());
        await categoryApi.getAll().then((response: any) => {
            setListCategories(response.data);
            generateRandom(response.data)
        });
    }
    useEffect(() => {
        fetchData();
    }, [dispatch])

    const generateRandom = (data: any) => {
        const randomSortedData = [...data].sort(() => Math.random() - 0.5);
        const selectedElements = randomSortedData.slice(0, 3);
        setListCategoryRandom(selectedElements);
    };

    useEffect(() => {
        // Chắc chắn listCategoryRandom có đủ phần tử để tránh lỗi
        if (listCategoryRandom && listCategoryRandom.length >= 3) {
            // Lặp qua 3 dash mục và gọi hàm tương ứng
            listCategoryRandom.forEach((category, index) => {
                callProductsByCategoryId(category.id, index);
            });
        }
    }, [listCategoryRandom]);
    const callProductsByCategoryId = async (id: any, index: number) => {
        try {
            let data: any = [];
            await productApi.getProductsByCategoryId(id).then((response: any) => (data = response.data))
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
    const OPGotoScreenByCategory0 = () => {
        // @ts-ignore
        navigation.navigate(SCREEN.DETAIL_CATEGORY_SCREEN, {
            takeDetailCategory: listCategoryRandom[0],
            totalDishCount: listProductCategoryIds[0].length,
            productsOfCategory: listProductCategoryIds[0]
        });
    };
    const OPGotoScreenByCategory1 = () => {
        // @ts-ignore
        navigation.navigate(SCREEN.DETAIL_CATEGORY_SCREEN, {
            takeDetailCategory: listCategoryRandom[1],
            totalDishCount: listProductCategoryIds[1].length,
            productsOfCategory: listProductCategoryIds[1]
        });
    };
    const OPGotoScreenByCategory2 = () => {
        // @ts-ignore
        navigation.navigate(SCREEN.DETAIL_CATEGORY_SCREEN, {
            takeDetailCategory: listCategoryRandom[2],
            totalDishCount: listProductCategoryIds[2].length,
            productsOfCategory: listProductCategoryIds[2]
        });
    };

    return {
        listProducts,
        listCategories,
        data,
        contentNavigationButton,
        OPGotoScreen,
        numColumns,
        listCategoryRandom,
        listProductCategoryIds,
        OPGotoScreenByCategory0,
        OPGotoScreenByCategory1,
        OPGotoScreenByCategory2,

    };
}

export default useHome;
