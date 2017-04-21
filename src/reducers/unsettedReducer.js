import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function unsettedReducer(state = initialState.unsetted, action) {
  switch (action.type) {
    case types.LOAD_USERS_ALL_UNSETTLED_SUCCESS:{
        //do something 
      return action.unsetted;
      }

    default:
      return state;
  }
}