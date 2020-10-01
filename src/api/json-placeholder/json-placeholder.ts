import { _getTodos } from './json-placeholder-interface';

export const getTodos: _getTodos = () =>
  fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
    response.json()
  );
