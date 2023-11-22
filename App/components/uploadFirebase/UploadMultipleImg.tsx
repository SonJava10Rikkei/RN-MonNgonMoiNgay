import {Button, Image, PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
// @ts-ignore
import _ from 'lodash';
import {storage} from "../../firebase"

const UploadMultipleImg = () => {
    const [images, setImages] = useState([]);
    const [downloadURLs, setDownloadURLs] = useState([]);

    const requestCameraPermission = async () => {
        try {
            const checkPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
            if (checkPermission === PermissionsAndroid.RESULTS.GRANTED) {
                const result: any = await launchImageLibrary({mediaType: 'photo', selectionLimit: 3,});
                if (result.assets.length > 0) {
                    setImages(result.assets);
                }
            } else {
                console.log('Permission denied');
            }
        } catch (error) {
            console.log('Người dùng đã hủy chọn ảnh:', error);
        }
    };

    const submitData = async () => {
        try {
            const urls: any = [];

            for (const image of images) {
                // @ts-ignore
                const response = await fetch(image.uri);
                const blob = await response.blob();
                // @ts-ignore
                const randomFilename = Math.random().toString(30).substring(1) + '_' + image.fileName;
                const storageRef = ref(storage, randomFilename);

                // Tải lên ảnh lên Firebase Storage
                const snapshot = await uploadBytes(storageRef, blob);

                // Lấy URL tải về từ Firebase Storage
                const url = await getDownloadURL(snapshot.ref);
                urls.push(url);
            }

            setDownloadURLs(urls);

        } catch (error) {
            console.log('Lỗi khi tải lên Firebase Storage:', error);
        }
    };

    return (
        <View>
            <Text>TestCamera</Text>
            <Button title="Chọn ảnh" onPress={() => requestCameraPermission()}/>
            <View>
                {downloadURLs.length > 0
                    ?
                    (downloadURLs.map((url, index) => <Image key={index} source={{uri: url}} style={styles.afterImg}/>))
                    :
                    images.length > 0 ?
                        // @ts-ignore
                        (images.map((image, index) => <Image key={index} source={{uri: image.uri}}
                                                             style={styles.beforeImg}/>))
                        :
                        (<Text>Không có ảnh được chọn</Text>)
                }

                <Button title="Tải lên" onPress={submitData}/>
            </View>
        </View>
    );
};
export default UploadMultipleImg;

const styles = StyleSheet.create({
    beforeImg: {
        width: 100,
        height: 100,
    },
    afterImg: {
        width: 250,
        height: 300,
    },
});
