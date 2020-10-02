import React from 'react';
import { useAsyncReq } from './redux/async-req-redux';
import { _AsyncReq } from './async-req-interface';

export const AsyncReq: _AsyncReq = () => {
  const { loading, todos, fetchTodos, fetchTodosThunk, reset } = useAsyncReq();

  return (
    <div>
      <h1>Async Req</h1>
      <h3>loading: {loading ? 'true' : 'false'}</h3>
      {todos.length === 0 && <button onClick={fetchTodos}>fetch todos</button>}
      {todos.length === 0 && (
        <button onClick={fetchTodosThunk}>fetch todos thunk</button>
      )}
      {todos.length !== 0 && <button onClick={reset}>reset</button>}
      {todos.length !== 0 &&
        todos.map((todo) => (
          <div key={todo.id}>
            <ul>
              <li>id: {todo.id}</li>
              <li>userId: {todo.userId}</li>
              <li>title: {todo.title}</li>
              <li>completed: {todo.completed ? 'true' : 'false'}</li>
            </ul>
            <p>------------------------------</p>
          </div>
        ))}
      <hr />
    </div>
  );
};
