import React from 'react';
import { AsyncReq } from '../../modules/async-req/async-req-component';
import { Notes } from '../../modules/notes/notes-component';
import { _Home } from './home-interface';

export const Home: _Home = () => (
  <div>
    <AsyncReq />
    <Notes />
  </div>
);
