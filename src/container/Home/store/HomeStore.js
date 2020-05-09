import { action, extendObservable } from 'mobx';


const initState = {
  testState
};

class HomeStore {
  constructor() {
    super();
    this.initState = initState;
    extendObservable(this, initState);
  }

  @action init = async () => {
    console.log('init')

  }
}
export {HomeStore} ;
