import React from 'react';
import HomeStore from './HomeStore';

import {MobXProviderContext} from 'mobx-react';

function useStores() {
  return React.useContext(MobXProviderContext);
}

export {
  HomeStore,
  useStores,
};
