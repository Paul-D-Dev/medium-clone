import { createReducer, on } from '@ngrx/store';
import { IPopularTagsState } from '../types/popular-tags-state.interface';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions/get-Popular-Tags.action';

const initialState: IPopularTagsState = {
  isLoading: false,
  error: null,
  data: null,
};

export const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTagsAction, (state: IPopularTagsState) => ({
    ...state,
    isLoading: true,
  })),
  on(getPopularTagsSuccessAction, (state: IPopularTagsState, action) => ({
    ...state,
    isLoading: false,
    data: action.popularTags,
  })),
  on(getPopularTagsFailureAction, (state: IPopularTagsState) => ({
    ...state,
    isLoading: false,
  }))
);

export function reducers(state: IPopularTagsState, action) {
  return popularTagsReducer(state, action);
}

export const popularTagsFeatureKey = 'popularTags';
