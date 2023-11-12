import React from "react";
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import store from './App/redux/RuduxToolkitSaga/store'
import RootNavigator from "./App/navigators/RootNavigator";

const App = () => {
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{flex: 1}}>
                <RootNavigator/>
            </GestureHandlerRootView>
        </Provider>
    );
};

export default App;
