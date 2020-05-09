import { action, extendObservable } from 'mobx';


const initState = {
  testState:''
};

class HomeStore {
  constructor() {
    // super();
    this.initState = initState;
    extendObservable(this, initState);
  }

  @action init = async () => {
  

  }
}
export default new HomeStore();
