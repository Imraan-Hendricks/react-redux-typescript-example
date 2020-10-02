import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  RESET,
} from './async-req-types';
import {
  _FetchTodosRequest,
  _FetchTodosSuccess,
  _FetchTodosFailure,
  _Reset,
} from '../async-req-interface';

export const FetchTodosRequest: _FetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});

export const FetchTodosSuccess: _FetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const FetchTodosFailure: _FetchTodosFailure = () => ({
  type: FETCH_TODOS_FAILURE,
});

export const FetchTodos = () => (dispatch: any) => {
  dispatch(FetchTodosRequest());
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => {
      dispatch(FetchTodosSuccess(json));
    })
    .catch(() => dispatch(FetchTodosFailure()));
};

export const Reset: _Reset = () => ({
  type: RESET,
});
