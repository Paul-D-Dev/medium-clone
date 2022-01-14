import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAppState } from '../../../types/app-state.interface';
import { IPopularTagsState } from '../types/popular-tags-state.interface';

// Allow to select a specific part of the state (auth slice)
export const popularTagsFeatureSelector = createFeatureSelector<
  IAppState,
  IPopularTagsState
>('popularTags');

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.error
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.data
);
