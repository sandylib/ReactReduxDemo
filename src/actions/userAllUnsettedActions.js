import AllUnSetts from '../api/mockUsersUnSettedApi';
import * as types from './actionTypes';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';

export function loadSuccess(data) {
  return {type: types.LOAD_USERS_ALL_UNSETTLED_SUCCESS, data};
}

export function loadUnSetted() {
  return dispatch => {
     dispatch(beginAjaxCall());
    return AllUnSetts.getAllUnSetteds().then(data => {
      dispatch(loadSuccess(data));
    }).catch(error => {
         dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
