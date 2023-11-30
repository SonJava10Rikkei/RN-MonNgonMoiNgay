import React from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';

import store, {persistor} from './App/redux/store';
import RootNavigator from './App/navigators/RootNavigator';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GestureHandlerRootView style={{flex: 1}}>
                    <RootNavigator/>
                </GestureHandlerRootView>
            </PersistGate>
        </Provider>
    );
};

export default App;
