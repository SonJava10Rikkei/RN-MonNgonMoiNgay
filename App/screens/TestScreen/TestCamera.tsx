import {Button, Image, PermissionsAndroid, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {launchImageLibrary} from "react-native-image-picker";
import axios from "axios";

type Props = {}


const TestCamera = (props: Props) => {

    const [img, setImg] = useState('');
    const requestCameraPermission = async () => {
        try {
            const checkPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
            if (checkPermission === PermissionsAndroid.RESULTS.GRANTED) {
                // console.log('ok: ');
                // mở camera: --------------------------------
                // const result: any = await launchCamera({mediaType: 'photo', cameraType: 'back'})
                // mở thư viện ảnh: --------------------------
                const result: any = await launchImageLibrary({mediaType: 'photo'})
                // console.log(result.assets[0].uri);
                setImg(result.assets[0].uri)
                const formData = new FormData();
                formData.append("uploaded_file", {
                    uri: result.assets[0].uri,
                    name: result.assets[0].fileName,
                    type: result.assets[0].type,
                });

                // ----------------------------------------------------------------
                // const setting = {
                //     method: 'POST',
                //     body: formData,
                // }
                // fetch('http://192.168.9.104:3000/api/upload', setting)
                //     .then(response => response.json())
                //     .then(json => {
                //         console.log(json)
                //     })
                //     .catch(error => {
                //         console.log(error)
                //     });
                // ----------------------------------------------------------------

                const setting = {
                    method: 'POST',
                    url: 'http://mon-973767c9f0f6.herokuapp.com/api/upload',
                    data: formData,
                    headers: {"Content-Type": "multipart/form-data"}
                }
                axios(setting).then((res: any) => {
                    console.log(res)
                }).catch((error) => {
                    console.log(error)
                })


            } else {
                console.log('từ chối: ');
            }
        } catch (error) {
            console.log('error: ', error);
        }

    }

    // useEffect(() => {
    //     fetch('http://192.168.9.104:3000/api/uploadedFiles')
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         });
    // }, []);


    return (
        <View>
            <Text>TestCamera</Text>
            <Button title='chọn ảnh' onPress={() => requestCameraPermission()}/>
            {img != '' ? <Image source={{uri: img}} style={{width: 250, height: 200}}/> : ''}

        </View>
    )
}

export default TestCamera

const styles = StyleSheet.create({})
