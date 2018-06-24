import {combineReducers} from 'redux';
import products from './products';
import itemEdit from './itemedit';
const appReducers=combineReducers({
    products,itemEdit
});
export default appReducers;