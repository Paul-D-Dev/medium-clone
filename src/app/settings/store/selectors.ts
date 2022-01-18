import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../shared/types/app-state.interface';
import { ISettingsState } from './types/settings-state.interface';

const settingsFeatureSelector = createFeatureSelector<
  IAppState,
  ISettingsState
>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (state) => state.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (state) => state.validationErrors
);
