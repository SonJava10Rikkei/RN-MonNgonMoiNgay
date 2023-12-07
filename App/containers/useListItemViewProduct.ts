import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UseListItemViewProduct = () => {
// like logic AsyncStorage
    const [listLikeProducts, setListLikeProducts] = useState([{ id: undefined }]);
    const [likeStatusMap, setLikeStatusMap] = useState(new Map());

    const OPLikeProduct = async (likeId: number) => {
        console.log("like product: likeId", likeId);
        if (likeId !== 0) {
            try {
                const existingLikes = await AsyncStorage.getItem('likeProducts');
                const currentListLikeProducts = existingLikes ? JSON.parse(existingLikes) : [];
                const existingProductIndex = currentListLikeProducts.findIndex((product: any) => product.id === likeId);
                if (existingProductIndex !== -1) {
                    // Nếu đã tồn tại, loại bỏ nó khỏi danh sách
                    const newListLikeProducts = [...currentListLikeProducts];
                    newListLikeProducts.splice(existingProductIndex, 1);
                    await AsyncStorage.setItem('likeProducts', JSON.stringify(newListLikeProducts));
                    setListLikeProducts(newListLikeProducts);

                    // Cập nhật trạng thái like trong likeStatusMap
                    const newLikeStatusMap = new Map(likeStatusMap);
                    newLikeStatusMap.set(likeId, !newLikeStatusMap.get(likeId));
                    setLikeStatusMap(newLikeStatusMap);

                    return;
                }
                // Nếu likeId chưa tồn tại, thêm vào danh sách
                const newProduct = { id: likeId };
                const newListLikeProducts = [newProduct, ...currentListLikeProducts];

                await AsyncStorage.setItem('likeProducts', JSON.stringify(newListLikeProducts));
                setListLikeProducts(newListLikeProducts);

                // Cập nhật trạng thái like trong likeStatusMap
                const newLikeStatusMap = new Map(likeStatusMap);
                newLikeStatusMap.set(likeId, true);
                setLikeStatusMap(newLikeStatusMap);
            } catch (err) {
                console.log("Lỗi OPLikeProduct: ", err);
            }
        }
    };

    // Trong hàm khởi tạo component hoặc một hàm useEffect
    const fetchData = async () => {
        try {
            const existingLikes = await AsyncStorage.getItem('likeProducts');
            const currentListLikeProducts = existingLikes ? JSON.parse(existingLikes) : [];
            // Tạo một đối tượng Map mới với trạng thái like của từng sản phẩm
            const newLikeStatusMap = new Map();
            currentListLikeProducts.forEach((product: any) => {
                newLikeStatusMap.set(product.id, true);
            });
            setLikeStatusMap(newLikeStatusMap);
        } catch (err) {
            console.log("Lỗi khi lấy danh sách đã like: ", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return {
        OPLikeProduct,
        likeStatusMap
    }
}

export default UseListItemViewProduct;
