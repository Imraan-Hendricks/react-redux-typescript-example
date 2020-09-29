import { useDispatch } from 'react-redux';
import { ResetApp } from './root-actions';
import { _resetApp, _useRoot } from './root-interface';

export const useRoot: _useRoot = () => {
  const dispatch = useDispatch();

  const resetApp: _resetApp = () => {
    dispatch(ResetApp());
  };

  return { resetApp };
};
