import { createAction, props } from '@ngrx/store';
import { IArticleInput } from '../../../shared/types/article-input.interface';
import { IArticle } from '../../../shared/types/article.interface';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { EditArticleActionTypes } from '../edit-article-action.types';

export const updateArticleAction = createAction(
  EditArticleActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; articleInput: IArticleInput }>()
);

export const updateArticleSuccessAction = createAction(
  EditArticleActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const updateArticleFailureAction = createAction(
  EditArticleActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: IBackendErrors }>()
);
