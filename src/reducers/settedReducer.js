import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function settedReducer(state = initialState.setted, action) {
  switch (action.type) {
    case types.LOAD_USERS_ALL_SETTLED_SUCCESS:{
        //do something 
      return action.setted;
      }

    default:
      return state;
  }
}
