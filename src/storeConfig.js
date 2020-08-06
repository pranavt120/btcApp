import {createStore, applyMiddleware, combineReducers} from 'redux';
import Prices from './Redux/Pricesreducer';
import BasePrices from './Redux/UpdatedReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const Store = createStore(combineReducers({
    Prices,
    BasePrices
}), applyMiddleware(thunk,logger));

export default Store;