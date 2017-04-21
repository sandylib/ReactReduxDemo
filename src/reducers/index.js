import {combineReducers} from 'redux';
import setted from './settedReducer';
import unsetted from './unsettedReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    setted,
    unsetted,
    ajaxCallsInProgress
});
export default rootReducer;