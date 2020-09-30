import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createMigrate, persistReducer } from 'redux-persist';
import { initialState } from './notes-reducer';
import storage from 'redux-persist/lib/storage';
import { _NotesState } from '../notes-interface';

const migrations: any = {
  0: () => {
    return initialState;
  }, // migration reset state to initial state
  1: (state: any) => {
    return {
      ...state,
      notes: undefined,
    };
  }, // migration clear out notes state
  2: (state: any) => {
    return {
      notes: state.notes,
    };
  }, // migration to keep only notes state
};

const persistConfig = {
  key: 'root/modules/notes',
  version: -1,
  storage,
  whitelist: ['notes'],
  stateReconciler: autoMergeLevel2,
  migrate: createMigrate(migrations, { debug: false }),
};

export const persist = (reducer: any) =>
  persistReducer<_NotesState>(persistConfig, reducer);
