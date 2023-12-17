import React from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';

import store, {persistor} from './App/redux/store';
import RootNavigator from './App/navigators/RootNavigator';
import AuthProvider from "./App/context/AuthContext";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GestureHandlerRootView style={{flex: 1}}>
                    <AuthProvider>
                        <RootNavigator/>
                    </AuthProvider>
                </GestureHandlerRootView>
            </PersistGate>
        </Provider>
    );
};

export default App;
