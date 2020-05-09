import React from 'react';
import { Provider } from 'mobx-react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from './src/container/Home';
import * as stores from './src/store'

const App = () => {
  return (
    <Provider {...stores}>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <SafeAreaView> */}
        <Router>
          <Stack key="root">
            <Scene key="Home" component={Home} hideNavBar initial />
          </Stack>
        </Router>
      {/* </SafeAreaView> */}
    </Provider>
  );
};



export default App;
