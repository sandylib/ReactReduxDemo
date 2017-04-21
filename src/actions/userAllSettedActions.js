import AllSetts from '../api/mockUsersSettedApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadSuccess(data) {
    debugger;
  return {type: types.LOAD_USERS_ALL_SETTLED_SUCCESS, data};
}

export function loadSetted() {
  return dispatch => {
     dispatch(beginAjaxCall());
    return AllSetts.getAllSetteds().then(data => {
      dispatch(loadSuccess(data));
    }).catch(error => {
      throw(error);
    });
  };
}
