import {useEffect, useState} from 'react';
import IMAGES from "../theme/images";
import ICONS from "../theme/icon";
import fakeProduct from "./data/fakeProduct";

const useSearch = () => {
    const {listProduct} = fakeProduct;

    const [nameKey, setNameKey] = useState([
        {
            productKeyword: 'Chả',
        },
        {
            productKeyword: 'cá',
        },
        {
            productKeyword: 'thịt lợn',
        },
    ]);

    const listProduct2 = [
        {
            id: 1,
            imageProduct: IMAGES.dishCaBienKko,
            nameProduct: 'Cơm tấm chân giò',
            imageLike: ICONS.iconHeart,
        },

        {
            id: 2,
            imageProduct: IMAGES.dishCanhGheRauMuon,
            nameProduct: 'Canh ghẹ rau muống',
            imageLike: ICONS.iconHeart,
        },

        {
            id: 3,
            imageProduct: IMAGES.dishChaBo,
            nameProduct: 'Chả bò',
            imageLike: ICONS.iconHeart,
        },
        {
            id: 4,
            imageProduct: IMAGES.dishChaLua,
            nameProduct: 'Chả lụa',
            imageLike: ICONS.iconHeart,
        },
        {
            id: 5,
            imageProduct: IMAGES.dishChaoCaPhoMai,
            nameProduct: 'Cháo cá phô mai',
            imageLike: ICONS.iconHeart,
        },
        {
            id: 6,
            imageProduct: IMAGES.dishGoiDuaLeo,
            nameProduct: 'Gỏi dưa leo',
            imageLike: ICONS.iconHeart,
        },
        {
            id: 7,
            imageProduct: IMAGES.dishOvernightOat,
            nameProduct: 'Overnight Oat',
            imageLike: ICONS.iconHeart,
        },
        {
            id: 8,
            imageProduct: IMAGES.dishPhoXao,
            nameProduct: 'Phở xào',
            imageLike: ICONS.iconHeart,
        },


    ];

    const [valueInput, setValueInput] = useState('')
    const [keywordInput, setKeywordInput] = useState('');
    const [listFilter, setListFilter] = useState([]);
    const [checkData, setCheckData] = useState([{title: 'default'}]);
    const [historySearchKeyword, setHistorySearchKeyword] = useState([]);

    useEffect(() => {
        onHistorySearch()
    }, [keywordInput]);
    const onHistorySearch = () => {
        if (keywordInput !== '') {
            if (historySearchKeyword.length === 10) {
                // nếu độ dài của mảng bằng 10 phần tử thì Xóa phần tử cuối cùng của mảng
                const newHistorySearchKeyword = [...historySearchKeyword];
                newHistorySearchKeyword.pop();
                // @ts-ignore
                setHistorySearchKeyword([{productKeyword: removeExtraSpaces(keywordInput.trim())}, ...newHistorySearchKeyword]);
            } else {
                // @ts-ignore
                setHistorySearchKeyword([{productKeyword: removeExtraSpaces(keywordInput.trim())}, ...historySearchKeyword]);
            }
        }
    };

// @ts-ignore
    const onKeywordButton = (takeKeyword) => {
        setKeywordInput(takeKeyword)
        setValueInput(takeKeyword)
    };


    useEffect(() => {
        onSearch(keywordInput);
    }, [keywordInput]);

// @ts-ignore
    const removeExtraSpaces = (str) => {
        // Sử dụng regex để thay thế các khoảng trắng liên tiếp bằng một khoảng trắng duy nhất
        return str.replace(/\s+/g, ' ').trim();
    };
// @ts-ignore

    const removeDiacritics = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };
// @ts-ignore

    const onSearch = (searchKeywordInput) => {
        // Loại bỏ khoảng trắng thừa
        searchKeywordInput = removeExtraSpaces(searchKeywordInput);
        let filterData;
        if (hasDiacritics(searchKeywordInput)) {
            // Sử dụng logic tìm kiếm có dấu
            filterData = listProduct.filter?.(
                item => item?.nameProduct?.toLowerCase().indexOf?.(searchKeywordInput?.toLowerCase()) !== -1
            );
        } else {
            // Sử dụng logic tìm kiếm không dấu
            const searchKeywordNormalized = removeDiacritics(searchKeywordInput.toLowerCase()).trim();
            filterData = listProduct.filter?.(item => {
                const itemNameNormalized = removeDiacritics(item?.nameProduct?.toLowerCase()).trim();
                return itemNameNormalized.indexOf(searchKeywordNormalized) !== -1;
            });
        }

        if (searchKeywordInput !== '') {
            // Sắp xếp mảng kết quả dựa trên độ tương đồng với giá trị nhập vào
            const sortedData = filterData.sort((a, b) => {
                const aNameNormalized = removeDiacritics(a?.nameProduct?.toLowerCase()).trim();
                const bNameNormalized = removeDiacritics(b?.nameProduct?.toLowerCase()).trim();
                const aIndex = aNameNormalized.indexOf(searchKeywordInput);
                const bIndex = bNameNormalized.indexOf(searchKeywordInput);

                // Ưu tiên kết quả có dấu bằng với giá trị nhập vào
                if (aIndex !== -1 && bIndex === -1) {
                    return -1;
                } else if (aIndex === -1 && bIndex !== -1) {
                    return 1;
                }
                // Nếu cả hai có dấu hoặc không có dấu, sắp xếp theo thứ tự bình thường
                return aNameNormalized.localeCompare(bNameNormalized);
            });

            // @ts-ignore
            setListFilter(sortedData);
            // @ts-ignore
            setCheckData(sortedData);
        }
    };

    // @ts-ignore
    const hasDiacritics = (str) => {
        return /[àáâãäåæçèéêëìíîïðñòóôõöøùúûüý]/.test(str);
    };

    const OPDeleteHistory = () => {
        setHistorySearchKeyword([]) // Xóa lịch sử về mảng rỗng
        setListFilter([])
        setKeywordInput('')
    };


    return {
        nameKey,
        setNameKey,
        listProduct,
        valueInput, setValueInput,
        keywordInput, setKeywordInput,
        listFilter, setListFilter,
        checkData, setCheckData,
        historySearchKeyword, setHistorySearchKeyword,
        onHistorySearch,
        onKeywordButton,
        onSearch,
        OPDeleteHistory,

    };
};

export default useSearch;
