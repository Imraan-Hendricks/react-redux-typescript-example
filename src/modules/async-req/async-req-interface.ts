import { FC } from 'react';
import { _AppState as _AppStateImport } from '../../redux/root-interface';
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  RESET,
  RESET_APP,
} from './redux/async-req-types';

//-----------
// Shared
//-----------

interface _todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface _FetchTodosRequestAction {
  type: typeof FETCH_TODOS_REQUEST;
}

interface _FetchTodosSuccessAction {
  type: typeof FETCH_TODOS_SUCCESS;
  payload: _todo[];
}

interface _FetchTodosFailureAction {
  type: typeof FETCH_TODOS_FAILURE;
}

interface _ResetAction {
  type: typeof RESET;
}

interface _ResetAppAction {
  type: typeof RESET_APP;
}

//-----------
// Reducer
//-----------

export interface _AsyncReqState {
  loading: boolean;
  todos: _todo[];
}

export type _Action =
  | _FetchTodosRequestAction
  | _FetchTodosSuccessAction
  | _FetchTodosFailureAction
  | _ResetAction
  | _ResetAppAction;

//-----------
// Actions
//-----------

export interface _FetchTodosRequest {
  (): _FetchTodosRequestAction;
}

export interface _FetchTodosSuccess {
  (todos: _todo[]): _FetchTodosSuccessAction;
}

export interface _FetchTodosFailure {
  (): _FetchTodosFailureAction;
}

export interface _Reset {
  (): _ResetAction;
}

//-----------
// Hook
//-----------

export type _AppState = _AppStateImport;

export interface _fetchTodos {
  (): void;
}

export interface _fetchTodosThunk {
  (): void;
}

export interface _reset {
  (): void;
}

export interface _useAsyncReq {
  (): {
    loading: boolean;
    todos: _todo[];
    fetchTodos: _fetchTodos;
    fetchTodosThunk: _fetchTodosThunk;
    reset: _reset;
  };
}

//-----------
// Component
//-----------

interface _AsyncReqProps {}

export type _AsyncReq = FC<_AsyncReqProps>;
