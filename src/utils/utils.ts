import { _handle } from './utils-interface';

export const handle: _handle = (promise) =>
  promise
    .then((data: any) => [data, undefined])
    .catch((error: any) => Promise.resolve([undefined, error]));
