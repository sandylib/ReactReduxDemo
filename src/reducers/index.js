import {combineReducers} from 'redux';
import settedReducer from './settedReducer';
import unsettedReducer from './unsettedReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    settedReducer,
    unsettedReducer,
    ajaxCallsInProgress
});
export default rootReducer;