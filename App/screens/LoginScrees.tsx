import React from 'react';
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
import useLogin from '../containers/useLogin';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LoginScreen = () => {
    const {
        userName,
        onChangeUserName,
        password,
        onChangePassword,
        onSubmit,
        useSecureTextEntry,
        onPressImRight,
    } = useLogin()

    const insets = useSafeAreaInsets();

    return (
        <ImageBackground
            source={IMAGES.backgroundHistory}
            style={styles.container}>
            <StatusBar translucent backgroundColor="transparent"/>
            <SafeAreaView>
            <ScrollView>
                <Text style={styles.text}>Welcome {userName} !</Text>
                <TextInputComponent
                    iconLeft={ICONS.iconUser}
                    placeholder="User Name"
                    value={userName}
                    keyboardType={'numeric'}
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
                <TouchableOpacity onPress={onSubmit}>
                    <View style={styles.btnSubmit}>
                        <Text style={styles.textSubmit}>{'Submit'}</Text>
                    </View>
                </TouchableOpacity>
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
    textSubmit: {
        color: '#FF6600',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    btnSubmit: {
        backgroundColor: '#99CCFF',
        alignItems: 'center',
        padding: 10,
        width: '30%',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
});

export default LoginScreen;
