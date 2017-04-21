import AllUnSetts from '../api/mockUsersUnSettedApi';
import * as types from './actionTypes';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';

export function loadSuccess(unsetted) {
  return {type: types.LOAD_USERS_ALL_UNSETTLED_SUCCESS, unsetted};
}

export function loadUnSetted() {
  return dispatch => {
     dispatch(beginAjaxCall());
    return AllUnSetts.getAllUnSetteds().then(unsetted => {
      dispatch(loadSuccess(unsetted));
    }).catch(error => {
         dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
