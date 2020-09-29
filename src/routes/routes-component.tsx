import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './home/home-component';
import { _Routes } from './routes-interface';

export const Routes: _Routes = () => (
  <Switch>
    <Route component={Home} exact path='/' strict />
  </Switch>
);
