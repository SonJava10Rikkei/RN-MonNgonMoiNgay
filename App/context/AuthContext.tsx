import React, {createContext} from 'react';
import {StyleSheet} from 'react-native';

type Props = {
    children: any,

}
export const AuthContext = createContext('');
const AuthProvider = ({children}: Props) => {
    return (
        <AuthContext.Provider value={"test value change"}>
            {children}
        </AuthContext.Provider>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AuthProvider;
