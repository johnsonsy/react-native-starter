import React from 'react';
import { useStores } from '@store';
import {
    View,
    Text
} from 'react-native';
import { observer } from 'mobx-react';

const Home = () => {
    const {
        HomeStore,
    } = useStores();
    const { testState }=HomeStore;

    return (
        <View>
            <Text> Home Test</Text>
            <Text> testState: {testState} </Text>
        </View>
    );
};

export default observer(Home);
