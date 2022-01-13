import { createAction, props } from '@ngrx/store';
import { IGetFeedResponse } from '../../types/get-feed-response.interface';
import { FeedActionTypes } from '../feed.action-types';

export const getFeedAction = createAction(
  FeedActionTypes.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  FeedActionTypes.GET_FEED_SUCCESS,
  props<{ feed: IGetFeedResponse }>()
);

export const getFeedFailureAction = createAction(
  FeedActionTypes.GET_FEED_FAILURE
);
