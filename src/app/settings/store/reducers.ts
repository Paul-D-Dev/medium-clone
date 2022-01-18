import { Action, createReducer, on } from '@ngrx/store';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from '../../auth/store/actions/update-current-user.action';
import { ISettingsState } from './types/settings-state.interface';

const initialState: ISettingsState = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsReducer = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (): ISettingsState => ({
      ...initialState,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (): ISettingsState => ({
      ...initialState,
      isSubmitting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): ISettingsState => ({
      ...initialState,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: ISettingsState, action: Action) {
  return settingsReducer(state, action);
}

export const settingsFeatureKey = 'settings';
