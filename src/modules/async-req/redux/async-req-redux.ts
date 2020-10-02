import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
  FetchTodos,
  FetchTodosRequest,
  FetchTodosSuccess,
  FetchTodosFailure,
  Reset,
} from './async-req-actions';
import { getTodos } from '../../../api/json-placeholder/json-placeholder';
import { handle } from '../../../utils/utils';
import {
  _AppState,
  _AsyncReqState,
  _fetchTodos,
  _fetchTodosThunk,
  _reset,
  _useAsyncReq,
} from '../async-req-interface';

export const useAsyncReq: _useAsyncReq = () => {
  const { loading, todos } = useSelector<_AppState, _AsyncReqState>(
    (state) => state.modules.asyncReq,
    shallowEqual
  );

  const dispatch = useDispatch();

  const fetchTodos: _fetchTodos = async () => {
    dispatch(FetchTodosRequest());

    const [todos, err] = await handle(getTodos());

    if (err) return dispatch(FetchTodosFailure());
    dispatch(FetchTodosSuccess(todos));
  };

  const fetchTodosThunk: _fetchTodosThunk = () => {
    dispatch(FetchTodos());
  };

  const reset: _reset = () => {
    dispatch(Reset());
  };

  return { loading, todos, fetchTodos, fetchTodosThunk, reset };
};
