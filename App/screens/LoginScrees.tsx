import React, {useEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import IMAGES from '../theme/images';
import ICONS from '../theme/icon';
import TextInputComponent from '../components/TextInputComponent';
import {useDispatch, useSelector} from "react-redux";
import {authActions, selectIsLoggedIn} from "../redux/RuduxToolkitSaga/auth/authSlice";
import SCREEN from "../navigators/RouteKey";

const LoginScreen = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [useSecureTextEntry, setUseSecureTextEntry] = useState(true);

    const onChangeUserName = (value: string) => {
        setUserName(value);
    };
    const onChangePassword = (value: string) => {
        setPassword(value);
    };
    const onPressImRight = () => {
        setUseSecureTextEntry(!useSecureTextEntry); // Đảo ngược trạng thái
    };
    const onLoginClick = () => {
        // TO DO get user = password from login form
        dispatch(authActions.login({
            username: '',
            password: '',
        }))
        //
        // // @ts-ignore
        // navigation.navigate(SCREEN.BOTTOM_TAB);
    };

    const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            // @ts-ignore
            navigation.navigate(SCREEN.BOTTOM_TAB);
        }
    }, [isLoggedIn]);

    const onRegisterClick = () => {
        // @ts-ignore
        navigation.navigate(SCREEN.BOTTOM_TAB);
    };
    return (
        <ImageBackground
            source={IMAGES.backgroundHistory}
            style={styles.container}>
            <StatusBar translucent backgroundColor="transparent"/>
            <SafeAreaView>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.text}>Welcome {userName} !</Text>
                    <TextInputComponent
                        iconLeft={ICONS.iconUser}
                        placeholder="User Name"
                        value={userName}
                        // keyboardType={'numeric'}
                        onChangeText={(text: string) => onChangeUserName(text)}
                    />
                    <TextInputComponent
                        iconLeft={ICONS.iconPadlock}
                        placeholder="Password"
                        value={password}
                        onChangeText={(text: string) => onChangePassword(text)}
                        secureTextEntry={useSecureTextEntry}
                        iconRight={
                            useSecureTextEntry ? ICONS.iconEyeVisible : ICONS.iconEyeHide
                        }
                        onPressImRight={onPressImRight} // Truyền hàm onPressImRight trực tiếp
                    />
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={onLoginClick} style={styles.btnSubmit}>
                            <Text style={styles.textSubmit}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onRegisterClick}
                                          style={[styles.btnSubmit, {backgroundColor: '#4cc53d'}]}>
                            <Text style={styles.textSubmit}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        margin: 50,
        marginTop: 200,
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    textSubmit: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '600',
    },
    btnSubmit: {
        backgroundColor: '#007eff',
        alignItems: 'center',
        padding: 10,
        width: '30%',
        alignSelf: 'center',
        borderRadius: 30,
        margin: 10,
    },
});

export default LoginScreen;
