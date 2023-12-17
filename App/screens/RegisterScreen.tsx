import React, {useContext, useEffect, useState} from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import IMAGES from "../theme/images";
import TextInputComponent from "../components/TextInputComponent";
import ICONS from "../theme/icon";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {selectIsLoggedIn} from "../redux/RuduxToolkitSaga/auth/authSlice";
import SCREEN from "../navigators/RouteKey";
import {AuthContext} from "../context/AuthContext";

type Props = {}

const RegisterScreen = ({}: Props) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [useSecureTextEntry, setUseSecureTextEntry] = useState(true);
    const val = useContext(AuthContext)

    const onChangeUserName = (value: string) => {
        setUserName(value);
    };
    const onChangePassword = (value: string) => {
        setPassword(value);
    };
    const onChangeEmail = (value: string) => {
        setEmail(value);
    };

    const onPressImRight = () => {
        setUseSecureTextEntry(!useSecureTextEntry); // Đảo ngược trạng thái
    };
    const onGotoLoggin = () => {
        // @ts-ignore
        navigation.navigate(SCREEN.LOGIN_SCREEN);
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
        navigation.navigate(SCREEN.REGISTER_SCREEN);
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
                    <Text>{val}</Text>

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
                    <TextInputComponent
                        iconLeft={ICONS.iconUser}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text: string) => onChangeEmail(text)}
                    />
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={onRegisterClick} style={styles.btnSubmit}>
                            <Text style={styles.textSubmit}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnContainer}>
                        <Text style={styles.textRegister}>Already have an account? </Text>
                        <TouchableOpacity onPress={onGotoLoggin}>
                            <Text style={[styles.textRegister, {color: '#007eff'}]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
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
        backgroundColor: '#4cc53d',
        alignItems: 'center',
        padding: 10,
        width: '30%',
        alignSelf: 'center',
        borderRadius: 30,
        margin: 10,
    },
    textRegister: {
        fontSize: 18,
    }
});

export default RegisterScreen;
