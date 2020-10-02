import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  RESET,
  RESET_APP,
} from './async-req-types';
import { _Action, _AsyncReqState } from '../async-req-interface';

export const initialState = {
  loading: false,
  todos: [],
};

export const asyncReqReducer = (
  state: _AsyncReqState = initialState,
  action: _Action
) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return { ...state, loading: true };
    case FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case FETCH_TODOS_FAILURE:
      return { ...state, loading: false };
    case RESET:
    case RESET_APP:
      return initialState;
    default:
      return state;
  }
};
