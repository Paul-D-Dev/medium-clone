import { createAction, props } from '@ngrx/store';
import { IArticleInput } from '../../../shared/types/article-input.interface';
import { IArticle } from '../../../shared/types/article.interface';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { ArticleActionTypes } from '../article-action.type';

export const createArticleAction = createAction(
  ArticleActionTypes.CREATE_ARTICLE,
  props<{ articleInput: IArticleInput }>()
);
export const createArticleSuccessAction = createAction(
  ArticleActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);
export const createArticleFailureAction = createAction(
  ArticleActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: IBackendErrors }>()
);
