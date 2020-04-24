import * as actions from './actions';
import reducer from './reducer'
import * as selectors from './selectors';

export {default as AddFood} from "./components/AddFood";
export {default as FindFoods} from "./components/FindFoods";
export {default as FindFoodsResults} from "./components/FindFoodsResults";
export {default as Foods} from "./components/Foods";
export {default as InfoFood} from "./components/InfoFood";
export {default as NotificationDeletedFood} from "./components/NotificationDeleteFood";

export default {actions, reducer, selectors};