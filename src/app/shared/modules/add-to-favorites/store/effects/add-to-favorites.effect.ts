import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IArticle } from '../../../../types/article.interface';
import { AddToFavoritesService } from '../../services/add-to-favorites.service';
import {
  addToFavoritesAction,
  addToFavoritesFailureAction,
  addToFavoritesSuccessAction,
} from '../actions/add-to-favorites.action';

/*
 * Aim of Effect is to decrease responsibilities of register component
 * Effect handle the fetching of data
 * */

@Injectable()
export class AddToFavoritesEffect {
  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ isFavorite, slug }) => {
        // Set article as result of observable after we could pipe it
        const article$ = isFavorite
          ? this.addToFavoriteService.removeToFavorites(slug)
          : this.addToFavoriteService.addToFavorites(slug);

        return article$.pipe(
          // When successful
          map((article: IArticle) => {
            return addToFavoritesSuccessAction({ article });
          }),

          // When error from API
          catchError(() => {
            return of(addToFavoritesFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private addToFavoriteService: AddToFavoritesService
  ) {}
}
