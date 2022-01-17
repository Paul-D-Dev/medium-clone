import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../shared/types/app-state.interface';
import { ICreateArticleState } from './types/create-article-state.interface';

const createArticleFeature = createFeatureSelector<
  IAppState,
  ICreateArticleState
>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeature,
  (state: ICreateArticleState) => state.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createArticleFeature,
  (state: ICreateArticleState) => state.validationErrors
);
