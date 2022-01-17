import { createAction, props } from '@ngrx/store';
import { IArticle } from '../../../shared/types/article.interface';
import { EditArticleActionTypes } from '../edit-article-action.types';

export const getArticleAction = createAction(
  EditArticleActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  EditArticleActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const getArticleFailureAction = createAction(
  EditArticleActionTypes.GET_ARTICLE_FAILURE
);
