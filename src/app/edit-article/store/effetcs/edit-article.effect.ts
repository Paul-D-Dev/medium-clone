import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { IArticle } from '../../../shared/types/article.interface';
import { EditArticleService } from '../../services/edit-article.service';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from '../actions/edit-article.action';

@Injectable()
export class EditArticleEffect {
  updateArticle$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateArticleAction),
      switchMap(({ slug, articleInput }) => {
        return this.editArticleService.updateArticle(slug, articleInput).pipe(
          map((article: IArticle) => {
            return updateArticleSuccessAction({ article });
          }),
          catchError(() => {
            return of(updateArticleFailureAction);
          })
        );
      })
    )
  );

  redirectAfterUpdating$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
}
