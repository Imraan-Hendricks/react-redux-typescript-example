import { RESET_APP } from './root-types';
import { _ResetApp } from './root-interface';

export const ResetApp: _ResetApp = () => ({
  type: RESET_APP,
});
