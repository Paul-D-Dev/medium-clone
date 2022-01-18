import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../shared/types/app-state.interface';
import { IUserProfileState } from '../types/user-profile-state.interface';

const userProfileFeatureSelector = createFeatureSelector<
  IAppState,
  IUserProfileState
>('userProfile');

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState) => userProfileState.data
);

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState) => userProfileState.isLoading
);

export const errorSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState) => userProfileState.error
);
