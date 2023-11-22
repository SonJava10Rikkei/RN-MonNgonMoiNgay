import {Button, Image, PermissionsAndroid, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {launchImageLibrary} from "react-native-image-picker";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../firebase"
// @ts-ignore
import _ from "lodash";

const UploadFileImg = () => {

    const [img, setImg] = useState('');
    const [imageToFirebase, setImageToFirebase] = useState('');
    const [imageName, setImageName] = useState('');
    const [downloadURL, setDownloadURL] = useState('')

    const requestCameraPermission = async () => {
        try {
            const checkPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
            if (checkPermission === PermissionsAndroid.RESULTS.GRANTED) {
                // mở camera: --------------------------------
                // const result: any = await launchCamera({mediaType: 'photo', cameraType: 'back'})
                // mở thư viện ảnh: --------------------------
                const result: any = await launchImageLibrary({mediaType: 'photo'})
                setImg(result.assets[0].uri)
                setImageToFirebase(result.assets[0].uri)
                setImageName(result.assets[0].fileName);
            } else {
                console.log('từ chối');
            }
        } catch (error) {
            console.log('Người dùng không up nữa :(: ', error);
        }
    }

    const submitData = async () => {
        try {
            if (imageToFirebase) {
                const response = await fetch(imageToFirebase);
                const blob = await response.blob();
                const randomFilename = Math.random().toString(30).substring(1) + '_' + imageName;
                const storageRef = ref(storage, randomFilename);
                // Tải lên tệp lên Firebase Storage
                const snapshot = await uploadBytes(storageRef, blob);
                // Lấy URL tải về từ Firebase Storage
                const url = await getDownloadURL(snapshot.ref);
                setDownloadURL(url);
                console.log(url)
            }
        } catch (error) {
            console.log('Lỗi khi tải lên Firebase Storage:', error);
        }
    };
    return (
        <View>
            <Text>TestCamera</Text>
            <Button title='chọn ảnh' onPress={() => requestCameraPermission()}/>
            <View>
                {downloadURL != '' ? <Image source={{uri: downloadURL}} style={styles.img}/> : (img != '' ? <Image source={{uri: img}} style={{width: 250, height: 200}}/> : '')}

                <Button title="Upload" onPress={submitData}/>
            </View>
        </View>
    )
}
export default UploadFileImg

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 300,
    }
})
