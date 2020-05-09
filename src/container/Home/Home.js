import React from 'react';
import {useStores} from '@store';
import {
    View,
    StyleSheet,
} from 'react-native';
import { useStores } from '@store';
import { observer } from 'mobx-react';


const Home = () => {
    const {
        HomeStore,
    } = useStores();
    const {  } = HomeStore;

    return (
        <Page>
            <Header nav/>
             


        </Page>
    );
};

export default observer(Home);
const buttonStyles = StyleSheet.create({
    lineButton: {
        backgroundColor: '#53B535',
        borderRadius: 30,
        alignSelf: 'center',
        padding: 15,
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});
