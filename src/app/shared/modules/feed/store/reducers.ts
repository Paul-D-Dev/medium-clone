import { routerNavigationAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';

import { IFeedState } from '../types/feed-state.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.action';

/*
 * This file, reducer reacts according to actions
 * and updates state of store
 * */
const initialState: IFeedState = {
  data: null,
  isLoading: false,
  error: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): IFeedState => initialState)
);

export function reducers(state: IFeedState, action: Action) {
  return feedReducer(state, action);
}

export const feedFeatureKey = 'feed';
