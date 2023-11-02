import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const [valueInput, setValueInput] = useState('')
    const [keywordInput, setKeywordInput] = useState('');
    const [listFilter, setListFilter] = useState([]);
    const [checkData, setCheckData] = useState([{title: 'default'}]);
    const [historySearchKeyword, setHistorySearchKeyword] = useState([]);

    const onHistorySearch = async () => {
        if (keywordInput !== '') {
            if (historySearchKeyword.length === 10) {
                const newHistorySearchKeyword = [...historySearchKeyword];
                // nếu độ dài của mảng bằng 10 phần tử thì Xóa phần tử cuối cùng của mảng
                newHistorySearchKeyword.pop();
                // @ts-ignore
                newHistorySearchKeyword.unshift({productKeyword: removeExtraSpaces(keywordInput.trim())});
                try {
                    await AsyncStorage.setItem('historySearchKeyword', JSON.stringify(newHistorySearchKeyword));
                } catch (error) {
                    console.error('Lỗi khi lưu lịch sử tìm kiếm:', error);
                }
                setHistorySearchKeyword(newHistorySearchKeyword);
            } else {
                const newHistorySearchKeyword = [{productKeyword: removeExtraSpaces(keywordInput.trim())}, ...historySearchKeyword];
                try {
                    await AsyncStorage.setItem('historySearchKeyword', JSON.stringify(newHistorySearchKeyword));
                } catch (error) {
                    console.error('Lỗi khi lưu lịch sử tìm kiếm:', error);
                }
                // @ts-ignore
                setHistorySearchKeyword(newHistorySearchKeyword);
            }
        }
    };
    useEffect(() => {
        onHistorySearch()
    }, [keywordInput]);


    const loadHistorySearchKeyword = async () => {
        try {
            const historySearch = await AsyncStorage.getItem('historySearchKeyword');
            if (historySearch !== null) {
                const historySearchArray = JSON.parse(historySearch);
                setHistorySearchKeyword(historySearchArray);
            }
        } catch (error) {
            console.error('Lỗi khi tải lịch sử tìm kiếm:', error);
        }
    };
// Gọi hàm này khi màn hình được tải để lấy lịch sử tìm kiếm từ bộ nhớ cục bộ
    useEffect(() => {
        loadHistorySearchKeyword();
    }, []);


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
        return str.replace(/\s+/g, ' ').trim(); // Sử dụng regex để thay thế các khoảng trắng liên tiếp bằng một khoảng trắng duy nhất
    };
// @ts-ignore
    const removeDiacritics = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };
    // @ts-ignore
    const hasDiacritics = (str) => {
        return /[àáâãäåæçèéêëìíîïðñòóôõöøùúûüý]/.test(str);
    };
// @ts-ignore
    const onSearch = (searchKeywordInput) => {
        searchKeywordInput = removeExtraSpaces(searchKeywordInput); // Loại bỏ khoảng trắng thừa
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
                return aNameNormalized.localeCompare(bNameNormalized); // Nếu cả hai có dấu hoặc không có dấu, sắp xếp theo thứ tự bình thường
            });
            // @ts-ignore
            setListFilter(sortedData);
            // @ts-ignore
            setCheckData(sortedData);
        }
    };

    const clearHistorySearchKeyword = async () => {
        try {
            await AsyncStorage.removeItem('historySearchKeyword');
            setHistorySearchKeyword([]); // Xóa lịch sử trên trạng thái ứng dụng
            setListFilter([])
            setKeywordInput('')
        } catch (error) {
            console.error('Lỗi khi xóa lịch sử tìm kiếm:', error);
        }
    };
    const OPDeleteHistory = () => {
        clearHistorySearchKeyword();
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
