import { createAction, props } from '@ngrx/store';
import { IArticle } from '../../../shared/types/article.interface';
import { ArticleActionTypes } from '../article.action.types';

export const getArticleAction = createAction(
  ArticleActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ArticleActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const getArticleFailureAction = createAction(
  ArticleActionTypes.GET_ARTICLE_FAILURE
);
