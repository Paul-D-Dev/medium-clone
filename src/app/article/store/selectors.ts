import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../shared/types/app-state.interface';
import { IArticleState } from './types/article.state.interface';

export const articleFeatureSelector = createFeatureSelector<
  IAppState,
  IArticleState
>('article');

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.data
);

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.error
);
