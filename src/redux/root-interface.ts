import { rootReducer } from './root-reducer';
import { RESET_APP } from './root-types';

export type _AppState = ReturnType<typeof rootReducer>;

//-----------
// Shared
//-----------

interface _ResetAppAction {
  type: typeof RESET_APP;
}

//-----------
// Actions
//-----------

export interface _ResetApp {
  (): _ResetAppAction;
}

//-----------
// Hook
//-----------

export interface _resetApp {
  (): void;
}

export interface _useRoot {
  (): { resetApp: _resetApp };
}
