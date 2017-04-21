import AllSetts from '../api/mockUsersSettedApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadSettedSuccess(setted) {
    debugger;
  return {type: types.LOAD_USERS_ALL_SETTLED_SUCCESS, setted};
}

export function loadSetted() {
  return dispatch => {
     dispatch(beginAjaxCall());
    return AllSetts.getAllSetteds().then(setted => {
      dispatch(loadSettedSuccess(setted));
    }).catch(error => {
       dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
