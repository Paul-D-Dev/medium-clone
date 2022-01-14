import { createAction, props } from '@ngrx/store';

import { PopularTagType } from '../../../../types/popular-tag.type';
import { PopularTagsActionTypes } from '../action-types';

export const getPopularTagsAction = createAction(
  PopularTagsActionTypes.GET_POPULAR_TAGS
);

export const getPopularTagsSuccessAction = createAction(
  PopularTagsActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: PopularTagType[] }>()
);

export const getPopularTagsFailureAction = createAction(
  PopularTagsActionTypes.GET_POPULAR_TAGS_FAILURE
);
