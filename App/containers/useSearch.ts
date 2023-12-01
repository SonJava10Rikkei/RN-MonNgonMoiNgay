import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import productApi from '../api/productApi';

const useSearch = () => {
    const [nameKey, setNameKey] = useState([
        {productKeyword: 'Chả'},
        {productKeyword: 'cá'},
        {productKeyword: 'thịt lợn'},
    ]);
    const [listProducts, setListProducts] = useState([]);
    const [valueInput, setValueInput] = useState('');
    const [keywordInput, setKeywordInput] = useState('');
    const [listFilter, setListFilter] = useState([]);
    const [checkData, setCheckData] = useState([{title: 'default'}]);
    const [historySearchKeyword, setHistorySearchKeyword] = useState([]);

    useEffect(() => {
        // @ts-ignore
        productApi.getAll().then((response) => setListProducts(response.data));
    }, []);

    useEffect(() => {
        onSaveHistorySearch();
    }, [keywordInput]);

    useEffect(() => {
        loadHistorySearchKeyword();
    }, []);


    const loadHistorySearchKeyword = async () => {
        try {
            const historySearch = await AsyncStorage.getItem('historySearch');
            if (historySearch !== null) {
                const historySearchArray = JSON.parse(historySearch);
                setHistorySearchKeyword(historySearchArray);
            }
        } catch (error) {
            console.error('Lỗi khi tải lịch sử tìm kiếm:', error);
        }
    };

    // @ts-ignore
    const onKeywordButton = (takeKeyword) => {
        setKeywordInput(takeKeyword);
        setValueInput(takeKeyword);
    };

    useEffect(() => {
        onSearch(valueInput);
    }, [valueInput]);

    const removeExtraSpaces = (str: string) => {
        return str.replace(/\s+/g, ' ').trim();
    };

    const removeDiacritics = (str: string) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    const hasDiacritics = (str: string) => {
        return /[àáâãäåæçèéêëìíîïðñòóôõöøùúûüý]/.test(str);
    };

    const onSearch = (valueInput: string) => {
        valueInput = removeExtraSpaces(valueInput);
        let filterData;
        if (hasDiacritics(valueInput)) {
            filterData = listProducts.filter?.(
                (item: any) =>
                    item?.nameProduct?.toLowerCase().includes?.(valueInput.toLowerCase())
            );
        } else {
            const searchKeywordNormalized = removeDiacritics(
                valueInput.toLowerCase()
            ).trim();
            filterData = listProducts.filter?.((item: any) => {
                const itemNameNormalized = removeDiacritics(item?.nameProduct?.toLowerCase()).trim();
                return itemNameNormalized.includes(searchKeywordNormalized);
            });
        }
        if (valueInput !== '') {
            const sortedData = filterData.sort((a: any, b: any) => {
                const aNameNormalized = removeDiacritics(a?.nameProduct?.toLowerCase()).trim();
                const bNameNormalized = removeDiacritics(b?.nameProduct?.toLowerCase()).trim();
                const aIndex = aNameNormalized.indexOf(valueInput);
                const bIndex = bNameNormalized.indexOf(valueInput);
                if (aIndex !== -1 && bIndex === -1) {
                    return -1;
                } else if (aIndex === -1 && bIndex !== -1) {
                    return 1;
                }
                return aNameNormalized.localeCompare(bNameNormalized);
            });
            setListFilter(sortedData);
            setCheckData(sortedData);
        }
    };

    const onSaveHistorySearch = async () => {
        if (keywordInput !== '') {
            let updatedHistorySearchKeyword;
            if (historySearchKeyword.length === 10) {
                updatedHistorySearchKeyword = [
                    {productKeyword: removeExtraSpaces(keywordInput.trim())},
                    ...historySearchKeyword.slice(0, 9),
                ];
            } else {
                updatedHistorySearchKeyword = [
                    {productKeyword: removeExtraSpaces(keywordInput.trim())},
                    ...historySearchKeyword,
                ];
            }
            try {
                await AsyncStorage.setItem(
                    'historySearch',
                    JSON.stringify(updatedHistorySearchKeyword)
                );
                // @ts-ignore
                setHistorySearchKeyword(updatedHistorySearchKeyword);
            } catch (error) {
                console.error('Lỗi khi lưu lịch sử tìm kiếm:', error);
            }
        }
    };

    const OPClearHistorySearch = async () => {
        try {
            await AsyncStorage.removeItem('historySearch');
            setHistorySearchKeyword([]);
            setListFilter([]);
            setKeywordInput('');
            setValueInput('')
        } catch (error) {
            console.error('Lỗi khi xóa lịch sử tìm kiếm:', error);
        }
    };

    return {
        nameKey,
        valueInput,
        listFilter,
        checkData,
        historySearchKeyword,
        setValueInput,
        setKeywordInput,
        onKeywordButton,
        OPClearHistorySearch: OPClearHistorySearch,
    };
};

export default useSearch;
