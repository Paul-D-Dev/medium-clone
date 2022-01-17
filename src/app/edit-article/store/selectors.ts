import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../shared/types/app-state.interface';
import { IEditArticleState } from './types/edit-article-state-interface';

const editArticleFeatureSelector = createFeatureSelector<
  IAppState,
  IEditArticleState
>('editArticle');

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (state: IEditArticleState) => state.article
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (state: IEditArticleState) => state.isLoading
);

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (state: IEditArticleState) => state.isSubmitting
);

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (state: IEditArticleState) => state.validationErrors
);
