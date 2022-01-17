import { createAction, props } from '@ngrx/store';
import { ArticleActionTypes } from '../article.action.types';

export const deleteArticleAction = createAction(
  ArticleActionTypes.DELETE_ARTICLE,
  props<{ slug: string }>()
);

export const deleteArticleSuccessAction = createAction(
  ArticleActionTypes.DELETE_ARTICLE_SUCCESS
);

export const deleteArticleFailureAction = createAction(
  ArticleActionTypes.DELETE_ARTICLE_FAILURE
);
